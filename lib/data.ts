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
    title: "Gaming Commentary Edit",
    thumbnail:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://youtu.be/BmialHN3bVw?si=kaH-A48W51XKs2UC",
    result: "2M+ views",
    description:
      "Fast-paced long-form edit focused on retention, punchy zooms, and dynamic captions for gaming creators.",
  },
  {
    id: 2,
    title: "YouTube Talking-Head Edit",
    thumbnail:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://youtu.be/BmialHN3bVw?si=kaH-A48W51XKs2UC",
    result: "48% avg watch time",
    description:
      "Story-driven cuts, strategic b-roll, and motion graphics designed to increase viewer watch time.",
  },
  {
    id: 3,
    title: "Podcast-to-Reel Repurpose",
    thumbnail:
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://youtu.be/BmialHN3bVw?si=kaH-A48W51XKs2UC",
    result: "1.3M short views",
    description:
      "Repurposed long podcasts into viral vertical clips with hook-first intros and subtitles.",
  },
  {
    id: 4,
    title: "E-commerce Ad Creative",
    thumbnail:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://youtu.be/BmialHN3bVw?si=kaH-A48W51XKs2UC",
    result: "3.8x ROAS",
    description:
      "Performance ad edited for paid social using strong hooks, value framing, and CTA-oriented pacing.",
  },
  {
    id: 5,
    title: "Education Channel Edit",
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://youtu.be/BmialHN3bVw?si=kaH-A48W51XKs2UC",
    result: "120K new subscribers",
    description:
      "Clean educational edit with visual callouts and chapter transitions to keep content easy to follow.",
  },
  {
    id: 6,
    title: "Fitness Creator Reels",
    thumbnail:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://youtu.be/BmialHN3bVw?si=kaH-A48W51XKs2UC",
    result: "900K+ reach",
    description:
      "High-energy short-form edits with beat sync, rapid cuts, and retention-focused text overlays.",
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
