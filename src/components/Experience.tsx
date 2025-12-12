"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experience } from "@/data/experience";
import { Briefcase, GraduationCap, Users, FileCheck, X } from "lucide-react";
import styles from "./Experience.module.css";

const Icons = {
    Work: Briefcase,
    Education: GraduationCap,
    Community: Users,
};

export default function Experience() {
    const [selectedCert, setSelectedCert] = useState<string | null>(null);

    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Journey & Impact</h2>

            <div className={styles.timeline}>
                {experience.map((item, index) => {
                    const Icon = Icons[item.type];
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={styles.item}
                        >
                            <div className={styles.iconWrapper}>
                                <Icon size={20} />
                            </div>
                            <div className={styles.content}>
                                <span className={styles.period}>{item.period}</span>
                                <h3 className={styles.role}>{item.title}</h3>
                                <h4 className={styles.company}>{item.company}</h4>
                                <p className={styles.description}>{item.description}</p>

                                {item.certificate && (
                                    <button
                                        className={styles.certBtn}
                                        onClick={() => setSelectedCert(item.certificate!)}
                                    >
                                        <FileCheck size={16} />
                                        View Certificate
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        className={styles.modalOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            className={styles.modalContent}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className={styles.closeBtn}
                                onClick={() => setSelectedCert(null)}
                            >
                                <X size={24} />
                            </button>
                            {/* Using img tag since we are displaying user provided static assets from public folder */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={selectedCert} alt="Certificate" className={styles.certImage} />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
