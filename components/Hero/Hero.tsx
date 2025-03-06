"use client";
import { useState } from "react";
import styles from "./Hero.module.css";
import config from "../../config.json";
import { Email, Github, LinkedIn } from "@/components/Icons/Icons";

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Full Stack Developer", "UI/UX Designer", "Problem Solver"];
  const { name, github, emailId, linkedIn } = config;

  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
      <div className={styles.content}>
        <span className={styles.greeting}>Hello, I'm</span>
        <h1 className={styles.title}>{name}</h1>
        <div className={styles.roleWrapper}>
          <span className={styles.rolePrefix}>I'm a</span>
          <div className={styles.roles}>
            {roles.map((role, index) => (
              <span
                key={role}
                className={currentRole === index ? styles.active : "not-active"}
                style={currentRole === index ? {} : { display: "none" }}
                onAnimationEnd={() =>
                  setCurrentRole((index + 1) % roles.length)
                }
              >
                {role}
              </span>
            ))}
          </div>
        </div>
        <p className={styles.description}>
          Crafting digital experiences with code and creativity
        </p>
        <div className={styles.cta}>
          <a href={"./projects"}>
            <button className={styles.primaryButton}>View My Work</button>
          </a>
          <a href={"./contact"}>
            <button className={styles.secondaryButton}>Get in Touch</button>
          </a>
        </div>
        <div className={styles.socialLinks}>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <Github className={styles.icon} />
          </a>
          <a href={linkedIn} className={styles.socialLink}>
            <LinkedIn className={styles.icon} />
          </a>
          <a href={`mailto:${emailId}`} className={styles.socialLink}>
            <Email className={styles.icon} />
          </a>
        </div>
      </div>
    </section>
  );
}
