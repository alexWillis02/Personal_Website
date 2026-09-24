// Resume data, from Alexander_Willis_Resume_9_13.pdf.
// To offer a downloadable PDF, drop it at public/resume.pdf and the
// "Download PDF" button appears automatically.

export interface Job {
  role: string;
  company: string;
  program?: string;
  location?: string;
  dates: string;
  current?: boolean;
  summary?: string;
  highlights: string[];
}

export interface Education {
  school: string;
  degree: string;
  location: string;
  dates: string;
  detail?: string;
}

export const revision = "Sep 2026";

export const summary =
  "Mechanical engineering student at BYU (aerospace emphasis) with more than a year on the Rogue 1 UAV program at Teledyne FLIR Defense: building propulsion test equipment, validation rigs, and production battery packs. Targeting aerospace/defense, space, and UAV roles after graduating in 2027.";

// Quick-reference "spec sheet" shown on the home page and resume header.
export const facts: { label: string; value: string }[] = [
  { label: "Base", value: "Provo, UT" },
  { label: "Program", value: "Rogue 1 UAV · Teledyne FLIR" },
  { label: "Education", value: "B.S. ME, Aerospace · BYU '27" },
  { label: "Certs", value: "FAA Part 107 · PPL in progress" },
  { label: "Languages", value: "English, Spanish (professional)" },
  { label: "Status", value: "Open to full-time roles, 2027" },
];

export const jobs: Job[] = [
  {
    role: "Mechanical Engineering Intern",
    company: "Teledyne FLIR Defense",
    program: "Rogue 1 UAV Program",
    location: "Orem, UT",
    dates: "May 2025 – Present",
    current: true,
    highlights: [
      "Price, procure, and build custom test equipment, including a UAV propulsion test stand and a liquid-cooled dynamometer for motor and ESC characterization.",
      "Design and build test rigs, including a suspended drop tester, IMU vibration stand, and ducted air-cooled IR calibration target board, to validate subsystem performance against program requirements.",
      "Own design and DFM for a foldable carbon-fiber tripod system, now in volume production.",
      "Lead onshoring efforts for composite, heat sink, and propeller components.",
      "Head battery builder: design and construct custom 21700-based battery packs, from prototype 6S3P to production 14S6P, using TIG/spot-welded copper strip construction; currently developing a charging unit for large-format packs.",
      "Perform burn and destructive testing to validate battery pack safety and performance.",
    ],
  },
  {
    role: "Missionary",
    company: "Church of Jesus Christ of Latter-day Saints",
    location: "Concepción, Chile",
    dates: "Jul 2021 – Jul 2023",
    highlights: [
      "Two-year full-time volunteer mission; reached professional Spanish fluency and managed an independent schedule with minimal oversight.",
    ],
  },
  {
    role: "Lead Bike Technician",
    company: "Evo Cycle Works LLC",
    location: "Silver Spring, MD",
    dates: "Sep 2019 – Aug 2020, May 2021 – Jul 2021",
    highlights: [],
  },
  {
    role: "Mentor & Instructor",
    company: "Hackground Makerspace",
    location: "Maple Lawn, MD",
    dates: "Fall 2017 – Spring 2019",
    highlights: ["Taught drone design, fabrication, and programming to youth students."],
  },
];

export const education: Education[] = [
  {
    school: "Brigham Young University",
    degree: "B.S. Mechanical Engineering, Aerospace Emphasis",
    location: "Provo, UT",
    dates: "Expected May 2027",
    detail: "GPA 3.58 · Formula SAE capstone team",
  },
  {
    school: "Utah State University",
    degree: "Aerospace Engineering Pre-Professional Program",
    location: "Logan, UT",
    dates: "Fall 2020 – Spring 2021",
  },
];

export const skills: Record<string, string[]> = {
  "CAD & Analysis": [
    "SolidWorks",
    "Onshape",
    "Creo",
    "AutoCAD",
    "ANSYS Static Structural FEA",
    "Hand Calculations",
    "Technical Drawing",
    "Design Validation",
    "DFM",
  ],
  "Manufacturing & Prototyping": [
    "Rapid Prototyping",
    "FDM 3D Printing",
    "CNC Machining",
    "Precision Assembly",
    "Battery Pack Assembly",
    "TIG/Spot Welding",
    "Soldering",
  ],
  "Programming & Embedded": [
    "Python (Pandas, SciPy, Matplotlib)",
    "C/C++",
    "PIC24 Firmware",
    "State-Machine Architecture",
    "React/JavaScript",
  ],
  "Drones & Autonomy": [
    "Drone Design & Fabrication",
    "Flight Controls",
    "Autonomous Flight",
    "FPV/3rd-Person Piloting",
  ],
};

export const certifications = [
  "FAA Part 107 Remote Pilot",
  "Private Pilot License (in progress)",
  "Eagle Scout",
];

export const languages = ["English (native)", "Spanish (professional fluency)"];
