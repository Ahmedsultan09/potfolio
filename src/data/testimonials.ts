export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

// Publish quotes only after the person has approved the wording and attribution.
export const testimonials: Testimonial[] = [];

export const selectedTeams = ["LeadsMart", "TactiSport", "Big Data Egypt", "Lnkr"] as const;
