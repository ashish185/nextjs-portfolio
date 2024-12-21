import styles from './Contact.module.css';

export function Contact() {
  return (
    <section className={styles.contact}>
      <div className="container">
        <h2 className={styles.title}>Get In Touch</h2>
        {/* <form className={styles.form}>
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
          <button type="submit" className={styles.button}>Send Message</button>
        </form> */}
      </div>
    </section>
  );
}