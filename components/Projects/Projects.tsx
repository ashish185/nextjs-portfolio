import Image from 'next/image';
import styles from './Projects.module.css';
import ReactPortfolio from "./React-Portfolio.webp";

export function Projects() {
  const projects = [{
    title: 'React web portfolio',
    description: 'The project is made up using react.js, with framer motion and d3.js',
    screenshot: ReactPortfolio,
    link: "https://ashish185.github.io/portfolio-ashish-react/"
  }];
  
  return (
    <section className={styles.projects}>
      <div className="container">
        <h2 className={styles.title}>Featured Projects</h2>
        <div className={styles.grid}>
          {projects.map(({ title, description, screenshot,link }) => (
            <div key={title} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={ReactPortfolio}
                  alt={`Project ${title}`}
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.projectTitle}>Project Title {title}</h3>
                <p className={styles.description}>{`${description}`}</p>
                <a className={styles.link} href={link}>Open Link</a><span>🔗</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}