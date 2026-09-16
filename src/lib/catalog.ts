export type CatalogItem = {
  id: string;
  title: string;
  summary: string;
  services: string[];
  industry: string;
  outcomes: string[];
  verifiedAt: string;
  contentStatus: "current" | "review due" | "archived";
  agentTags: string[];
  artType: "signal" | "orbit" | "grid" | "field";
};

export const CATALOG_VERSION = "demo catalogue / v0.3";

export const CATALOG_ITEMS: CatalogItem[] = [
  {
    id: "atlas-ops",
    title: "Atlas",
    summary: "A fictional dispatch tool: a crowded task queue is reorganised so urgent exceptions are visible first.",
    services: ["UX strategy", "Product design"],
    industry: "Operations",
    outcomes: ["Clarity", "Workflow"],
    verifiedAt: "12 Sep 2026",
    contentStatus: "current",
    agentTags: ["complex-workflow", "internal-tool"],
    artType: "signal",
  },
  {
    id: "morrow-care",
    title: "Morrow",
    summary: "A fictional care service: a clear timeline shows patients what happens after booking and who owns each step.",
    services: ["Service design", "UX strategy"],
    industry: "Healthcare",
    outcomes: ["Navigation", "Trust"],
    verifiedAt: "08 Sep 2026",
    contentStatus: "current",
    agentTags: ["service", "onboarding"],
    artType: "orbit",
  },
  {
    id: "north-star",
    title: "Northstar",
    summary: "A fictional finance app: shared components and content rules bring consistency to screens built by different teams.",
    services: ["Visual system", "Product design"],
    industry: "Finance",
    outcomes: ["Consistency", "Scale"],
    verifiedAt: "02 Sep 2026",
    contentStatus: "review due",
    agentTags: ["visual-system", "scaling"],
    artType: "grid",
  },
  {
    id: "relay-mobile",
    title: "Relay",
    summary: "A fictional mobile app: first-use steps are shortened so people can complete one useful task before exploring more.",
    services: ["Product design", "Research"],
    industry: "Consumer",
    outcomes: ["Onboarding", "Activation"],
    verifiedAt: "26 Aug 2026",
    contentStatus: "archived",
    agentTags: ["mobile-product", "onboarding"],
    artType: "field",
  },
];

export type CatalogFilters = { service: string; industry: string; outcome: string };

export const EMPTY_FILTERS: CatalogFilters = { service: "all", industry: "all", outcome: "all" };

export function filterCatalog(items: CatalogItem[], filters: CatalogFilters): CatalogItem[] {
  return items.filter((item) => {
    const serviceMatches = filters.service === "all" || item.services.includes(filters.service);
    const industryMatches = filters.industry === "all" || item.industry === filters.industry;
    const outcomeMatches = filters.outcome === "all" || item.outcomes.includes(filters.outcome);
    return serviceMatches && industryMatches && outcomeMatches;
  });
}

export function uniqueCatalogValues(items: CatalogItem[], field: "services" | "industry" | "outcomes"): string[] {
  return [...new Set(items.flatMap((item) => (Array.isArray(item[field]) ? item[field] : [item[field]])))].sort();
}
