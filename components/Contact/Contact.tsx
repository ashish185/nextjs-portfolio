"use client";
import emailjs from "@emailjs/browser";
import { FormEvent, useRef } from "react";
import config from "../../config.json";
import heroStyles from "../Hero/Hero.module.css";
import { Email, Github, LinkedIn } from "../Icons/Icons";
import styles from "./Contact.module.css";
export function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  const { name, github, emailId, linkedIn } = config;

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process?.env?.NEXT_PUBLIC_SERVICE_ID || '',
        process?.env?.NEXT_PUBLIC_TEMPLATE_ID || '',
        form?.current || '',
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className={styles.contact}>
      <div className="container">
        <h2 className={styles.title}>Get In Touch</h2>
        <div className={heroStyles.socialLinks}>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className={heroStyles.socialLink}
          >
            <Github className={heroStyles.icon} />
          </a>
          <a href={linkedIn} className={heroStyles.socialLink}>
            <LinkedIn className={heroStyles.icon} />
          </a>
          <a href={`mailto:${emailId}`} className={heroStyles.socialLink}>
            <Email className={heroStyles.icon} />
          </a>
        </div>
        <h2 className={styles.title}>Say hello at my mail👋🏻</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} required></textarea>
          </div>
          <button type="submit" className={styles.button}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
