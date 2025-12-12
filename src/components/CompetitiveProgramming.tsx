"use client";

import { motion } from "framer-motion";
import { Trophy, Code2, Target, Users } from "lucide-react";
import styles from "./CompetitiveProgramming.module.css";

const stats = [
    {
        label: "Codeforces Rating",
        value: "1642",
        sub: "Expert",
        icon: Trophy,
        link: "https://codeforces.com/profile/AhmedOmani",
    },
    {
        label: "Problems Solved",
        value: "3,000+",
        sub: "Across All Platforms",
        icon: Code2,
    },
    {
        label: "Role",
        value: "Problem Setter",
        sub: "ECPC Qualifications",
        icon: Target,
    },
];

export default function CompetitiveProgramming() {
    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <div className={styles.badge}>
                    <Users size={14} />
                    <span>Problem Solving</span>
                </div>
                <h2 className={styles.title}>Competitive Programming</h2>
                <p className={styles.subtitle}>
                    Problem solving is at the core of my engineering mindset.
                </p>
            </div>

            <div className={styles.grid}>
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    const Wrapper = stat.link ? motion.a : motion.div;
                    const props = stat.link ? { href: stat.link, target: "_blank", rel: "noopener noreferrer" } : {};

                    return (
                        <Wrapper
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={styles.card}
                            {...props}
                        >
                            <div className={styles.iconWrapper}>
                                <Icon size={24} />
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.value}>{stat.value}</h3>
                                <p className={styles.label}>{stat.label}</p>
                                <p className={styles.sub}>{stat.sub}</p>
                            </div>
                        </Wrapper>
                    );
                })}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className={styles.platforms}
            >
                <p>Active on Codeforces, LeetCode, and AtCoder.</p>
            </motion.div>
        </section>
    );
}
