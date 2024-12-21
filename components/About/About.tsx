import styles from './About.module.css';
import { PhotoGallery } from './PhotoGallery/PhotoGallery';
import config from "../../config.json";

export function About() {
  const { experiences } = config;
  return (
    <section className={styles.about}>
      <div className="container">
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
          <div className={styles.text}>
            <p className={styles.intro}>
              With over 6 years of experience in web development, I specialize
              in creating beautiful and functional digital experiences.
            </p>
            <div className={styles.details}>
              <div className={styles.detail}>
                <h3>Frontend Development</h3>
                <p>
                  Crafting responsive and intuitive user interfaces using modern
                  web technologies.
                </p>
              </div>
              <div className={styles.detail}>
                <h3>Backend Architecture</h3>
                <p>Building scalable server-side solutions and robust APIs.</p>
              </div>
              <div className={styles.detail}>
                <h3>Problem Solving</h3>
                <p>
                  Turning complex challenges into elegant solutions through
                  creative thinking.
                </p>
              </div>
            </div>
          </div>
          <PhotoGallery />
        </div>
      </div>
    </section>
  );
}