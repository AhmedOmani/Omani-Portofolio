export type ProjectCategory = "Flagship AI & Product" | "Backend Systems" | "Architecture & Theory";

export interface Project {
    title: string;
    category: ProjectCategory;
    goal: string;
    story: string;
    tech: string[];
    links?: {
        github?: string;
        demo?: string;
        linkedin?: string;
    };
    featured?: boolean;
}

export const projects: Project[] = [
    // A. Flagship AI & Product
    {
        title: "Signify",
        category: "Flagship AI & Product",
        goal: "Bridging the communication gap between the deaf community and the hearing world.",
        story: "My flagship graduation project. Signify is a bidirectional translation tool using MediaPipe Holistic to translate real-time hand signs into Arabic text/speech, and conversely, translates voice/text into 3D skeleton sign animations. It features a 'Smart Voice UI' and Google Cloud integration.",
        tech: ["React", "MediaPipe Holistic", "Google Cloud Speech-to-Text", "3D Rendering"],
        links: {
            github: "https://github.com/AhmedOmani/Signify",
        },
        featured: true,
    },
    {
        title: "The Saber Scribe",
        category: "Flagship AI & Product",
        goal: "Liberating an educator from administrative burnout with a local-first AI agent.",
        story: "Built for my father to automate lesson planning. Unlike generic wrappers, this is a purpose-built desktop app that respects privacy by storing data locally (no cloud DB). It uses intelligent context extraction to generate quizzes from his specific materials using Vercel AI SDK.",
        tech: ["Electron", "React", "Vercel AI SDK", "Local JSON DB"],
        featured: true,
    },

    // B. Backend Systems
    {
        title: "OMIX Video Processor",
        category: "Backend Systems",
        goal: "Mastering resilient system design by facing real CPU constraints.",
        story: "Built a video processor from scratch without Express. The challenge was preventing server crashes under FFmpeg load. I implemented a DB-backed job queue with 'FOR UPDATE SKIP LOCKED' and worker clustering to handle concurrency and recover from crashes.",
        tech: ["Node.js (Pure)", "PostgreSQL", "FFmpeg", "Docker", "Job Queues"],
        links: {
            github: "https://github.com/AhmedOmani/video-editor-app",
            linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7386113267556843520/",
        },
    },
    {
        title: "Raw WebSocket Protocol",
        category: "Backend Systems",
        goal: "Demystifying networking by implementing RFC 6455 from scratch.",
        story: "Implemented WebSockets using raw Node.js buffers. Handled frame fragmentation (reassembling split messages), masking, and bitwise parsing manually to understand exactly how data moves across the wire.",
        tech: ["Node.js Buffer", "Net Module", "Bitwise Ops", "RFC 6455"],
        links: {
            linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7383474990509268994/",
            github: "https://github.com/AhmedOmani/Omani-Websocket-Protocol",
            demo: "https://omani-websocket-protocol.onrender.com/",
        },
    },
    {
        title: "School Evaluation System",
        category: "Backend Systems",
        goal: "Deploying a production-grade, bilingual SaaS platform.",
        story: "A full-scale system for institutional assessment. Features complex data modeling (Axis/Domain/Standard), Role-Based Access Control (RBAC), and full Arabic/English bilingual support.",
        tech: ["Next.js", "Bilingual (Ar/En)", "RBAC", "PostgreSQL"],
        links: {
            github: "https://github.com/AhmedOmani/School-Performance-Evaluation",
            demo: "https://school-performance-evaluation-mtxr-2hup7782z.vercel.app/en",
        },
    },

    // C. Architecture & Theory
    {
        title: "\"Omani\" Compiler",
        category: "Architecture & Theory",
        goal: "Bridging the gap between code and machine.",
        story: "Built a custom programming language compiler to understand the translation pipeline. Implemented Lexical Analysis (tokenizing), Parsing (AST construction), and Code Generation from scratch.",
        tech: ["Compiler Design", "Lexer", "Parser", "AST", "Automata Theory"],
        links: {
            github: "https://github.com/AhmedOmani", // Placeholder to profile
        },
    },
    {
        title: "Image Processing Addon",
        category: "Architecture & Theory",
        goal: "Demonstrating the path from JS loop to Native C++ performance.",
        story: "Optimized a CPU-bound Box Blur task. Started with single-threaded JS (~12s), scaled with Worker Threads/SharedArrayBuffer (~3s), and finally wrote a Native C++ Addon (N-API) to drop execution time to ~700ms.",
        tech: ["Node.js", "C++ Addons (N-API)", "Worker Threads", "SharedArrayBuffer"],
        links: {
            github: "https://github.com/AhmedOmani/image-processing-node-addon",
        },
    },
];
