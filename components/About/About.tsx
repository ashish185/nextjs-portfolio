import styles from './About.module.css';
import { PhotoGallery } from './PhotoGallery/PhotoGallery';
import config from "../../config.json";
import { SiShadcnui } from "react-icons/si";
import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaAws } from "react-icons/fa6";
import { SiTypescript, SiJavascript } from "react-icons/si";

const frontendTech = [
  { name: "React.js", component: FaReact, className: 'icon-text', color: 'rgb(0, 255, 255)' },
  { name: "Next.js", component: RiNextjsFill, className: 'icon-text', },
  { name: "Redux.js", component: SiRedux, className: 'icon-text', color: 'rgb(255, 0, 255)' },
  { name: "Html5", component: FaHtml5, className: 'icon-text', color: 'rgb(255, 255, 0)' },
  { name: "CSS3", component: FaCss3, className: 'icon-text' },
  { name: "Tailwind", component: RiTailwindCssFill, className: 'icon-text', color: 'rgb(0, 255, 255)' },
  { name: "ShadCnUI", component: SiShadcnui, className: 'icon-text', color: 'rgb(0, 255, 255)' }
]

const backendTech = [
  { name: "Node js", component: FaNodeJs, className: 'icon-text', color: 'rgb(0, 255, 255)' },
  { name: "MongoDB", component: DiMongodb, className: 'icon-text', color: 'green' },
  { name: "AWS", component: FaAws, className: 'icon-text', color: 'orange' },
];

const programmingLanguages = [
  { name: "TypeScript", component: SiTypescript, className: 'icon-text', color: 'rgb(255, 255, 0)' },
  { name: "JavaScript", component: SiJavascript, className: 'icon-text' },
]

export function About() {
  const { experiences } = config;
  return (
    <section className={styles.about}>
      <div className="container">
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
          <div className={styles.text}>
            <p className={styles.intro}>
              With over 6+ years of experience in web development, I specialize
              in creating beautiful and functional digital experiences.
            </p>
            <div className={styles.details}>
              <div className={styles.detail}>
                <h3>Frontend Development⭐⭐⭐⭐⭐</h3>
                Crafting responsive and intuitive user interfaces using modern
                web technologies.
                <div className={styles['icons-arrange']}>
                  {
                    frontendTech.map(({ name, component: IconComponent, className, color }) => <span title={name} key={name}><IconComponent color={color} />{` ${name}`}</span>)
                  }
                </div>
              </div>
              <div className={styles.detail}>
                <h3>Backend Architecture ⭐⭐⭐</h3>
                <p>Building scalable server-side solutions and robust APIs.</p>
                <div className={styles['icons-arrange']}>
                  {
                    backendTech.map(({ name, component: IconComponent, className, color }) => <span title={name} key={name}><IconComponent color={color} />{` ${name}`}</span>)
                  }
                </div>
              </div>
              <div className={styles.detail}>
                <h3>Programming Languages ⭐⭐⭐⭐⭐</h3>
                <div className={styles['icons-arrange']}>
                  {
                    programmingLanguages.map(({ name, component: IconComponent, className, color }) => <span title={name} key={name}><IconComponent color={color} />{` ${name}`}</span>)
                  }
                </div>
              </div>
            </div>
          </div>
          <PhotoGallery />
        </div>
      </div>
    </section>
  );
}