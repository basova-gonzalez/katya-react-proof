"use client";

import { useMemo, useState } from "react";
import {
  CLARITY_NEEDS,
  createBriefPayload,
  EMPTY_BRIEF,
  formatAgentContext,
  formatHumanBrief,
  PROJECT_TYPES,
  serializeBrief,
  STAGES,
  TIMEFRAMES,
  validateBrief,
  type BriefValues,
} from "../lib/brief";

type FieldKey = keyof BriefValues;

const fields: Array<{ key: FieldKey; label: string; hint: string; options: ReadonlyArray<{ value: string; label: string }> }> = [
  { key: "projectType", label: "What kind of product?", hint: "Choose the closest match", options: PROJECT_TYPES },
  { key: "stage", label: "What stage is it at?", hint: "Tell us what exists today", options: STAGES },
  { key: "clarityNeed", label: "What should be easier?", hint: "Pick the first area to improve", options: CLARITY_NEEDS },
  { key: "timeframe", label: "What is the timing?", hint: "Choose the expected design window", options: TIMEFRAMES },
];

export function BriefComposer() {
  const [values, setValues] = useState<BriefValues>(EMPTY_BRIEF);
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [payload, setPayload] = useState<ReturnType<typeof createBriefPayload> | null>(null);
  const [tab, setTab] = useState<"human" | "json">("human");
  const [copied, setCopied] = useState(false);

  const humanBrief = useMemo(() => (payload ? formatHumanBrief(payload) : ""), [payload]);
  const jsonBrief = useMemo(() => (payload ? serializeBrief(payload) : ""), [payload]);
  const context = useMemo(() => payload ? formatAgentContext(payload) : "Complete the four questions to create a context package.", [payload]);

  function update(key: FieldKey, value: string) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setPayload(null);
    setCopied(false);
  }

  function generate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateBrief(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = fields.find((field) => nextErrors[field.key]);
      if (firstInvalid) document.getElementById(`brief-${firstInvalid.key}`)?.focus();
      return;
    }
    setPayload(createBriefPayload(values));
    setTab("human");
  }

  async function copyContext() {
    if (!payload) return;
    try {
      await navigator.clipboard.writeText(context);
      setCopied(true);
    } catch {
      setCopied(false);
      document.getElementById("agent-context")?.focus();
    }
  }

  return (
    <section className="brief" aria-label="Interactive brief and LLM context demo">
      <div className="brief__layout">
        <form className="brief__form" onSubmit={generate} noValidate>
          {fields.map((field, index) => {
            const errorId = `brief-error-${field.key}`;
            return (
              <fieldset className="brief__field" key={field.key}>
                <legend className="brief__legend"><span className="brief__index">0{index + 1}</span>{field.label}</legend>
                <label className="brief__hint" htmlFor={`brief-${field.key}`}>{field.hint}</label>
                <select
                  className="brief__select"
                  id={`brief-${field.key}`}
                  value={values[field.key]}
                  onChange={(event) => update(field.key, event.target.value)}
                  aria-invalid={Boolean(errors[field.key])}
                  aria-describedby={errors[field.key] ? errorId : undefined}
                >
                  <option value="">Select one</option>
                  {field.options.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
                </select>
                {errors[field.key] && <p className="brief__error" id={errorId}>{errors[field.key]}</p>}
              </fieldset>
            );
          })}
          <button className="brief__submit" type="submit">Create my brief <span aria-hidden="true">↗</span></button>
        </form>
        <div className="brief__result" aria-live="polite">
          {!payload ? (
            <div className="brief__empty"><span className="brief__empty-mark" aria-hidden="true">+</span><p>Your brief will appear here.</p><p className="brief__empty-note">Nothing is submitted. This is a local demo.</p></div>
          ) : (
            <>
              <div className="brief__result-head">
                <div><p className="brief__eyebrow">Your brief / ready to review</p><h3 className="brief__result-title">A first design conversation.</h3></div>
                <button className="brief__copy" type="button" onClick={copyContext}>{copied ? "Copied" : "Copy context"}</button>
              </div>
              <div className="brief__tabs" role="group" aria-label="Brief format">
                <button className={`brief__tab ${tab === "human" ? "is-active" : ""}`} type="button" aria-pressed={tab === "human"} onClick={() => setTab("human")}>Human brief</button>
                <button className={`brief__tab ${tab === "json" ? "is-active" : ""}`} type="button" aria-pressed={tab === "json"} onClick={() => setTab("json")}>JSON context</button>
              </div>
              <pre className="brief__output" aria-label={tab === "human" ? "Human readable brief" : "JSON context"}>{tab === "human" ? humanBrief : jsonBrief}</pre>
            </>
          )}
          <label className="brief__context-label" htmlFor="agent-context">Agent context package</label>
          <textarea className="brief__context" id="agent-context" value={context} readOnly rows={5} aria-describedby="brief-context-note" />
          <p className="brief__context-note" id="brief-context-note">Clipboard access is optional. You can always select and copy the text above.</p>
        </div>
      </div>
    </section>
  );
}
