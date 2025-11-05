const skillGroups = [
  {
    title: 'Frontend Core',
    skills: ['React 18', 'Next.js', 'TypeScript', 'Zustand & Redux', 'TanStack Query'],
  },
  {
    title: 'UI Engineering',
    skills: ['Storybook', 'Design System 구축', 'Framer Motion', 'Tailwind CSS', 'Accessibility'],
  },
  {
    title: 'Collaboration',
    skills: ['Product Discovery', 'A/B 테스트', '데이터 분석', 'CI/CD', '테크 리딩'],
  },
];

const Skills = () => (
  <section className="section" id="skills">
    <div className="section__header">
      <span className="eyebrow">Skills</span>
      <h2>빠른 실험과 안정적인 제품 운영을 위한 기술을 다룹니다</h2>
      <p>
        아키텍처 설계부터 팀 내 개발 문화까지, 제품 출시와 성장을 가속화하기 위한 도구와 방법론을 함께 고민합니다.
      </p>
    </div>

    <div className="skill-grid">
      {skillGroups.map((group) => (
        <article key={group.title} className="skill-card">
          <h3>{group.title}</h3>
          <ul>
            {group.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </section>
);

export default Skills;
