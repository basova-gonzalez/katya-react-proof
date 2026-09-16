export const PROJECT_TYPES = [
  { value: "web-app", label: "Web app" },
  { value: "mobile-product", label: "Mobile product" },
  { value: "service", label: "Digital service" },
  { value: "internal-tool", label: "Internal tool" },
] as const;

export const STAGES = [
  { value: "early-discovery", label: "Early discovery" },
  { value: "working-product", label: "Working product" },
  { value: "scaling", label: "Scaling" },
  { value: "rethink", label: "Rethink / redesign" },
] as const;

export const CLARITY_NEEDS = [
  { value: "navigation", label: "Navigation and structure" },
  { value: "onboarding", label: "Onboarding and first use" },
  { value: "visual-system", label: "Visual system and UI" },
  { value: "workflow", label: "A complex workflow" },
] as const;

export const TIMEFRAMES = [
  { value: "2-4-weeks", label: "2–4 weeks" },
  { value: "1-2-months", label: "1–2 months" },
  { value: "ongoing", label: "Ongoing partnership" },
] as const;

export type BriefValues = {
  projectType: string;
  stage: string;
  clarityNeed: string;
  timeframe: string;
};

export type BriefPayload = BriefValues & {
  intent: "product-design-partnership";
  summary: string;
  recommendedNextStep: string;
  generatedAt: string;
};

export const EMPTY_BRIEF: BriefValues = {
  projectType: "",
  stage: "",
  clarityNeed: "",
  timeframe: "",
};

const labelFor = (options: ReadonlyArray<{ value: string; label: string }>, value: string) =>
  options.find((option) => option.value === value)?.label ?? value;

export function validateBrief(values: BriefValues): Partial<Record<keyof BriefValues, string>> {
  const errors: Partial<Record<keyof BriefValues, string>> = {};
  const options = { projectType: PROJECT_TYPES, stage: STAGES, clarityNeed: CLARITY_NEEDS, timeframe: TIMEFRAMES };
  (Object.keys(options) as Array<keyof BriefValues>).forEach((key) => {
    if (!values[key]) errors[key] = "Choose an option to continue.";
    else if (!options[key].some((option) => option.value === values[key])) errors[key] = "Choose a listed option.";
  });
  return errors;
}

export function createBriefPayload(values: BriefValues, generatedAt = new Date().toISOString()): BriefPayload {
  const projectType = labelFor(PROJECT_TYPES, values.projectType);
  const stage = labelFor(STAGES, values.stage);
  const clarityNeed = labelFor(CLARITY_NEEDS, values.clarityNeed);
  const timeframe = labelFor(TIMEFRAMES, values.timeframe);

  return {
    intent: "product-design-partnership",
    ...values,
    summary: `${projectType} at the ${stage.toLowerCase()} stage needs a focused design pass on ${clarityNeed.toLowerCase()}. Preferred timing: ${timeframe}.`,
    recommendedNextStep: values.stage === "early-discovery"
      ? "Map the first user journey, make a working prototype, and test whether people understand the next step."
      : "Review the current interface, choose one high-friction journey, and implement a first UX/UI improvement in the product.",
    generatedAt,
  };
}

export function formatHumanBrief(payload: BriefPayload): string {
  const projectType = labelFor(PROJECT_TYPES, payload.projectType);
  const stage = labelFor(STAGES, payload.stage);
  const clarityNeed = labelFor(CLARITY_NEEDS, payload.clarityNeed);
  const timeframe = labelFor(TIMEFRAMES, payload.timeframe);

  return `PRODUCT DESIGN BRIEF\n\nProduct: ${projectType}\nStage: ${stage}\nDesign focus: ${clarityNeed}\nTiming: ${timeframe}\n\nThe goal is to make this part of the experience easier to understand and use.\n\nFIRST STEP\n${payload.recommendedNextStep}`;
}

export function serializeBrief(payload: BriefPayload): string {
  return JSON.stringify(payload, null, 2);
}

export function formatAgentContext(payload: BriefPayload): string {
  const relevantWork = CATALOG_ITEMS
    .map((item) => ({ item, score: Number(item.agentTags.includes(payload.projectType)) + Number(item.agentTags.includes(payload.clarityNeed)) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 2)
    .map(({ item }) => `- ${item.title} — ${item.summary} [${item.contentStatus}; example content]`)
    .join("\n");

  return [
    "INDEPENDENT PRODUCT DESIGN EXPERIMENT",
    "This package turns a product request into a brief a designer can discuss and an agent can route. It is an independent demo, not an official UNKNW service or portfolio.",
    "",
    `CATALOGUE / ${CATALOG_VERSION}`,
    "The examples below are synthetic and show what kind of work may be relevant.",
    relevantWork,
    "",
    "ROUTING RULES",
    "1. Use the brief to prepare a first conversation; it is not a quote or project commitment.",
    "2. Ask a human designer to confirm the priority journey before proposing a solution.",
    "3. Do not attribute fictional examples to UNKNW or submit this demo data to them.",
    "",
    "HUMAN BRIEF",
    formatHumanBrief(payload),
    "",
    "STRUCTURED BRIEF / JSON",
    serializeBrief(payload),
  ].join("\n");
}
import { CATALOG_ITEMS, CATALOG_VERSION } from "./catalog";
