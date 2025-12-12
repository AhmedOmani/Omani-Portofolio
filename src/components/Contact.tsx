"use client";

import { Mail, Linkedin, Github } from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact() {
    return (
        <section className={styles.container}>
            <div className={styles.card}>
                <h2 className={styles.title}>Let's Build Something Resilient</h2>
                <p className={styles.text}>
                    I'm currently looking for new opportunities. Whether you have a question about system design,
                    want to discuss AI agents, or just want to say hi, my inbox is open.
                </p>

                <div className={styles.actions}>
                    <a href="mailto:ahmedomani2003@gmail.com" className={styles.primaryBtn}>
                        <Mail size={18} />
                        Say Hello
                    </a>
                    <div className={styles.socials}>
                        <a href="https://github.com/AhmedOmani" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/ahmed-saber-04586925a/" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                            <Linkedin size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
