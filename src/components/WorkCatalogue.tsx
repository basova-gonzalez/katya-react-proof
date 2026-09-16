"use client";

import { useMemo, useState } from "react";
import { NinjaCover } from "./NinjaCover";
import { CATALOG_ITEMS, EMPTY_FILTERS, filterCatalog, uniqueCatalogValues, type CatalogFilters } from "../lib/catalog";

export function WorkCatalogue() {
  const [filters, setFilters] = useState<CatalogFilters>(EMPTY_FILTERS);
  const results = useMemo(() => filterCatalog(CATALOG_ITEMS, filters), [filters]);
  const services = uniqueCatalogValues(CATALOG_ITEMS, "services");
  const industries = uniqueCatalogValues(CATALOG_ITEMS, "industry");
  const outcomes = uniqueCatalogValues(CATALOG_ITEMS, "outcomes");

  function update(key: keyof CatalogFilters, value: string) {
    setFilters((current) => ({ ...current, [key]: value }));
  }

  return (
    <div className="catalog">
      <div className="catalog__head">
        <h2 className="catalog__eyebrow" id="work-title">01 / Visual system in React</h2>
        <p className="catalog__meta">Fictional projects</p>
      </div>
      <div className="catalog__filters" aria-label="Filter catalogue">
        {([["service", "Service", "services", services], ["industry", "Industry", "industries", industries], ["outcome", "Outcome", "outcomes", outcomes]] as const).map(([key, label, plural, options]) => (
          <label className="catalog__filter" key={key}>{label}<select value={filters[key]} onChange={(event) => update(key, event.target.value)}><option value="all">All {plural}</option>{options.map((option) => <option value={option} key={option}>{option}</option>)}</select></label>
        ))}
        <p className="catalog__count" role="status">{results.length} of {CATALOG_ITEMS.length} shown</p>
      </div>
      <div className="catalog__grid">
        <NinjaCover compact />
        {results.length === 0 ? <p className="catalog__empty">No examples match these filters.</p> : results.map((item) => (
          <article className="catalog__card" key={item.id}>
            <div className={`catalog__art catalog__art--${item.artType}`} aria-hidden="true"><span>{item.id.slice(0, 2)}</span></div>
            <div className="catalog__card-body">
              <h3 className="catalog__card-title">{item.title}</h3>
              <span className="catalog__category">{item.services[0]}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
