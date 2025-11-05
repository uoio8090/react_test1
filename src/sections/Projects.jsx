import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Growth Dashboard',
    period: '2023',
    description:
      '제품 지표를 한눈에 볼 수 있는 데이터 대시보드를 구축했습니다. React Query와 Recharts를 활용해 대용량 데이터를 최적화하고, 실시간 알림 시스템을 통해 빠른 의사결정을 지원했습니다.',
    stack: ['React', 'TypeScript', 'Recharts', 'Zustand'],
    link: 'https://growthdash.example.com',
  },
  {
    name: 'Commerce Platform',
    period: '2022',
    description:
      '검색, 장바구니, 결제 플로우를 전면 개편한 프로젝트입니다. 디자인 시스템을 도입해 개발 속도를 35% 향상시키고, Lighthouse 점수 30점 상승을 이루었습니다.',
    stack: ['React', 'Storybook', 'Jest', 'Node.js'],
    link: 'https://commerce.example.com',
  },
  {
    name: 'Onboarding Flow',
    period: '2021',
    description:
      '가입 단계별 이탈 데이터를 기반으로 가설을 세우고, 인터랙션을 개선하여 온보딩 완료율을 18% 끌어올렸습니다. 사용자 피드백을 반영해 컴포넌트를 재설계했습니다.',
    stack: ['React', 'Framer Motion', 'Segment', 'Amplitude'],
    link: 'https://onboarding.example.com',
  },
];

const Projects = () => (
  <section className="section" id="projects">
    <div className="section__header">
      <span className="eyebrow">Projects</span>
      <h2>가설 검증과 데이터 기반 개선으로 서비스 임팩트를 만들었습니다</h2>
      <p>
        정성, 정량 데이터를 근거로 문제를 정의하고 실험을 설계합니다. 제품의 핵심 지표를 향상시키기 위한 작은 반복을 즐깁니다.
      </p>
    </div>

    <div className="project-grid">
      {projects.map((project, index) => (
        <motion.article
          key={project.name}
          className="project"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.12 }}
        >
          <header>
            <div>
              <h3>{project.name}</h3>
              <span>{project.period}</span>
            </div>
            <a href={project.link} target="_blank" rel="noreferrer">
              프로젝트 보기 →
            </a>
          </header>
          <p>{project.description}</p>
          <ul className="tag-list">
            {project.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  </section>
);

export default Projects;
