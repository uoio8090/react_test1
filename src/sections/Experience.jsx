import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'HyperGrowth',
    period: '2022.03 - 현재',
    role: '시니어 프론트엔드 개발자',
    achievements: [
      '리브랜딩 프로젝트에서 신규 디자인 시스템 구축 및 컴포넌트 40% 재사용률 확보',
      '전환 퍼널 최적화를 통해 결제 전환율 24% 상승',
      '프론트엔드 성능 대시보드 구축으로 LCP 38% 개선'
    ],
  },
  {
    company: 'Nextbase',
    period: '2019.07 - 2022.02',
    role: '프론트엔드 개발자',
    achievements: [
      '사내 CI/CD 파이프라인 구축으로 배포 리드타임 2시간 → 15분 단축',
      '서드파티 결제 모듈 교체 및 튜닝으로 결제 오류율 3% → 0.7% 감소',
      '신입 온보딩 가이드 및 페어 프로그래밍 문화 도입'
    ],
  },
  {
    company: 'Studio Flow',
    period: '2017.03 - 2019.06',
    role: 'UI 개발자',
    achievements: [
      '디자인팀과 협업하여 반응형 UI 컴포넌트 라이브러리 제작',
      'GSAP, Three.js 기반 인터랙티브 랜딩 페이지 제작',
      '크로스브라우징 테스트 자동화 스크립트 도입'
    ],
  },
];

const Experience = () => (
  <section className="section" id="experience">
    <div className="section__header">
      <span className="eyebrow">Experience</span>
      <h2>사용자 중심의 제품을 만드는 과정에서 성장했습니다</h2>
      <p>
        복잡한 요구사항을 사용자 친화적인 경험으로 재해석하는 과정에서 기술적인 깊이뿐 아니라 커뮤니케이션, 협업 역량까지 함께 성장시켰습니다.
      </p>
    </div>

    <div className="timeline">
      {experiences.map((item, index) => (
        <motion.article
          key={item.company}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="timeline__item"
        >
          <div className="timeline__meta">
            <h3>{item.company}</h3>
            <span>{item.role}</span>
            <time>{item.period}</time>
          </div>
          <ul>
            {item.achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  </section>
);

export default Experience;
