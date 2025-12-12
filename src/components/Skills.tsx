"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import styles from "./Skills.module.css";

export default function Skills() {
    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.title}>Technical Arsenal</h2>
                <p className={styles.subtitle}>Tools I use to build systems from scratch.</p>
            </div>

            <div className={styles.grid}>
                {Object.entries(skills).map(([category, items], catIndex) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: catIndex * 0.1 }}
                        className={styles.card}
                    >
                        <h3 className={styles.categoryTitle}>{category}</h3>
                        <div className={styles.list}>
                            {items.map((skill) => (
                                <span key={skill} className={styles.skillTag}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
