export interface ExperienceItem {
    title: string;
    company: string;
    period: string;
    description: string;
    type: "Work" | "Education" | "Community";
    certificate?: string;
}

export const experience: ExperienceItem[] = [
    {
        title: "Backend Engineer (Part-time)",
        company: "Souq Al-Gomlah",
        period: "Dec 2025 - Present",
        description: "Leading the V1 → V2 Product API migration for a B2B e-commerce platform. Architected scalable Node.js/MongoDB systems, integrated Cloudflare Images pipeline, and established rigorous testing suites with Jest & Supertest.",
        type: "Work",
    },
    {
        title: "Software Engineering Intern",
        company: "Banque Misr",
        period: "August - September 2024",
        description: "Backend development and FinTech systems exposure. Worked on rigorous financial grade software standards.",
        type: "Work",
        certificate: "/internship.png",
    },
    {
        title: "Problem Solving Mentor",
        company: "ICPC Minya Community",
        period: "2022 - 2024",
        description: "Mentoring students at ICPC Minya Community in algorithms and data structures. Explaining complex graph theory and dynamic programming concepts.",
        type: "Community",
    },
    {
        title: "Bachelor of Computer Science",
        company: "Minia University",
        period: "2020 - 2024",
        description: "Graduated with focused studies in Compilers, Operating Systems, and Distributed Computing. Signify Graduation Project.",
        type: "Education",
    },
];
