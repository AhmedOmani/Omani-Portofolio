"use client";

import { motion } from "framer-motion";
import { Github, Globe, Linkedin, ArrowUpRight } from "lucide-react";
import { projects, Project, ProjectCategory } from "@/data/projects";
import styles from "./FeaturedProjects.module.css";
import clsx from "clsx";

const CategorySection = ({
    category,
    items,
}: {
    category: ProjectCategory;
    items: Project[];
}) => {
    return (
        <div className={styles.categoryBlock}>
            <h3 className={styles.categoryTitle}>{category}</h3>
            <div className={styles.grid}>
                {items.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={clsx(styles.card, project.featured && styles.featuredCard)}
                    >
                        <div className={styles.cardHeader}>
                            <h4 className={styles.projectTitle}>{project.title}</h4>
                            <div className={styles.links}>
                                {project.links?.github && (
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                                        <Github size={20} />
                                    </a>
                                )}
                                {project.links?.demo && (
                                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" title="Live Demo">
                                        <Globe size={20} />
                                    </a>
                                )}
                                {project.links?.linkedin && (
                                    <a href={project.links.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn Post">
                                        <Linkedin size={20} />
                                    </a>
                                )}
                            </div>
                        </div>

                        <p className={styles.goal}>
                            <span className={styles.label}>Goal:</span> {project.goal}
                        </p>
                        <p className={styles.story}>{project.story}</p>

                        <div className={styles.techStack}>
                            {project.tech.map((t) => (
                                <span key={t} className={styles.techTag}>
                                    {t}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default function FeaturedProjects() {
    const categories: ProjectCategory[] = [
        "Flagship AI & Product",
        "Backend Systems",
        "Architecture & Theory",
    ];

    return (
        <section id="projects" className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.title}>Engineering Showcase</h2>
                <p className={styles.subtitle}>
                    From low-level system internals to user-facing AI products.
                </p>
            </div>

            <div className={styles.content}>
                {categories.map((cat) => (
                    <CategorySection
                        key={cat}
                        category={cat}
                        items={projects.filter((p) => p.category === cat)}
                    />
                ))}
            </div>
        </section>
    );
}
