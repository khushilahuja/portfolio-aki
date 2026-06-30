export type Project = {
  id: number;
  title: string;
  thumbnail: string;
  videoUrl: string;
  result: string;
  description: string;
};

export type Testimonial = {
  id: number;
  name: string;
  feedback: string;
};

export type Stat = {
  id: number;
  label: string;
  value: string;
};

export type ProcessStep = {
  id: number;
  title: string;
  description: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Animation Edit",
    thumbnail: "https://img.youtube.com/vi/6NMpFHvb1vE/maxresdefault.jpg",
    videoUrl: "https://youtu.be/6NMpFHvb1vE",
    result: "— update me",
    description: "Update this with a short description of the project — niche, style, and result.",
  },
  {
    id: 2,
    title: "Short-form Commercial",
    thumbnail: "https://drive.google.com/thumbnail?id=1NxqEdnPgyZO1JYNFQmrRHEU2zCyjwjFa&sz=w1280",
    videoUrl: "https://drive.google.com/file/d/1NxqEdnPgyZO1JYNFQmrRHEU2zCyjwjFa/view",
    result: "— update me",
    description: "Update this with a short description of the project — niche, style, and result.",
  },
  {
    id: 3,
    title: "Educational Stick Animation",
    thumbnail: "https://img.youtube.com/vi/BmialHN3bVw/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=BmialHN3bVw",
    result: "— update me",
    description: "Update this with a short description of the project — niche, style, and result.",
  },
  {
    id: 4,
    title: "Educational Stick Animation",
    thumbnail: "https://img.youtube.com/vi/VxTEHzl2sWM/maxresdefault.jpg",
    videoUrl: "https://youtu.be/VxTEHzl2sWM",
    result: "— update me",
    description: "Update this with a short description of the project — niche, style, and result.",
  },
  {
    id: 5,
    title: "Animation Edit",
    thumbnail: "https://drive.google.com/thumbnail?id=11iWP3T_W9yhws1r8WdeBmIw8RmmIPRVc&sz=w1280",
    videoUrl: "https://drive.google.com/file/d/11iWP3T_W9yhws1r8WdeBmIw8RmmIPRVc/view",
    result: "— update me",
    description: "Update this with a short description of the project — niche, style, and result.",
  },
  {
    id: 6,
    title: "Animation Edit",
    thumbnail: "https://img.youtube.com/vi/LrJDDqJIk8g/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=LrJDDqJIk8g",
    result: "— update me",
    description: "Update this with a short description of the project — niche, style, and result.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Carter, YouTube Creator",
    feedback:
      "Our retention jumped in the first month. The edits are sharp, fast, and exactly what our audience loves.",
  },
  {
    id: 2,
    name: "Mia Thompson, Podcast Host",
    feedback:
      "Turned long episodes into short clips that consistently perform. Super reliable and easy to work with.",
  },
  {
    id: 3,
    name: "Daniel Reed, DTC Founder",
    feedback:
      "The ad edits improved our hook rate and lowered CPA. Great creative instincts for conversion-focused content.",
  },
  {
    id: 4,
    name: "Sophie Lane, Coach",
    feedback:
      "The videos look premium and feel on-brand. I can now publish more often without sacrificing quality.",
  },
];

// TODO: replace with real numbers once available
export const stats: Stat[] = [
  { id: 1, label: "Videos Edited", value: "50+" },
  { id: 2, label: "Views Generated", value: "10M+" },
  { id: 3, label: "Avg. Turnaround", value: "48hrs" },
  { id: 4, label: "Happy Clients", value: "30+" },
];

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Brief",
    description: "Share your raw footage, goals, and any reference edits so I understand the tone you're after.",
  },
  {
    id: 2,
    title: "Draft",
    description: "I deliver a first cut within the agreed turnaround, focused on pacing, story, and retention.",
  },
  {
    id: 3,
    title: "Revisions",
    description: "You review the draft and request changes. Most projects need just one or two revision rounds.",
  },
  {
    id: 4,
    title: "Delivery",
    description: "Final export in the format and resolution you need, ready to publish across platforms.",
  },
];
