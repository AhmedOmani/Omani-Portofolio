"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className={styles.badge}>
                        <Terminal size={16} />
                        <span>Ahmed Omani</span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className={styles.title}
                >
                    Building <span className={styles.highlight}>Backend Systems</span> &{" "}
                    <span className={styles.highlight}>AI Agents</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={styles.description}
                >
                    I'm <strong>Ahmed Omani</strong>. A Backend Engineer focused on mastering <strong>Computer Science fundamentals</strong> and integrating the world of <strong>AI & Agents</strong> into scalable backend systems.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className={styles.actions}
                >
                    <a href="#projects" className={styles.primaryBtn}>
                        View Engineering Showcase
                        <ArrowRight size={18} />
                    </a>
                    <a href="/cv.pdf" className={styles.secondaryBtn}>
                        <Download size={18} />
                        Download CV
                    </a>
                </motion.div>
            </div>

            {/* Background Graphic could go here */}
            <div className={styles.backgroundGlow} />
        </section>
    );
}
