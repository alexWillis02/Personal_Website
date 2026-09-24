// Resume data. Everything below is placeholder content — replace it.
// To offer a downloadable PDF, drop it at public/resume.pdf and the
// "Download PDF" button appears automatically.

export interface Job {
  role: string;
  company: string;
  location?: string;
  start: string; // free text, e.g. "Jun 2024"
  end?: string; // omit for "Present"
  highlights: string[];
}

export interface Education {
  school: string;
  degree: string;
  start: string;
  end?: string;
  notes?: string;
}

export const summary =
  "A short professional summary goes here: what you do, what you're good at, and what you're looking for next.";

export const jobs: Job[] = [
  {
    role: "Your Role",
    company: "Company Name",
    location: "City, ST",
    start: "Jan 2025",
    highlights: [
      "An accomplishment, ideally with a number attached.",
      "Another thing you built, shipped, or improved.",
    ],
  },
  {
    role: "Previous Role",
    company: "Previous Company",
    start: "Jun 2023",
    end: "Dec 2024",
    highlights: ["What you did there and why it mattered."],
  },
];

// Grouped skills. Group names and entries are free-form.
export const skills: Record<string, string[]> = {
  Languages: ["TypeScript", "Python", "SQL"],
  Frameworks: ["Astro", "React", "Node.js"],
  Tools: ["Git", "GitHub Actions", "Docker"],
};

export const education: Education[] = [
  {
    school: "University Name",
    degree: "B.S. Your Major",
    start: "2020",
    end: "2024",
  },
];
