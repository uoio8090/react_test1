import { motion } from 'framer-motion';
import portrait from '../assets/portrait.svg';

const statVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.15 },
  }),
};

const Hero = () => (
  <section className="section section--hero">
    <div className="hero__grid">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="hero__content"
      >
        <p className="eyebrow">안녕하세요,</p>
        <h1>
          제품 가치에 집중하는 <span>프론트엔드 개발자</span>
        </h1>
        <p className="hero__subtitle">
          사용자 경험을 최우선으로 생각하며 서비스를 설계하고, 데이터를 기반으로 가설을 검증하는 것을 좋아합니다.
          비즈니스 임팩트와 팀의 문화를 함께 성장시키는 동료가 되겠습니다.
        </p>
        <div className="hero__stats">
          {[
            { value: '6년', label: '실무 경력' },
            { value: '24%', label: '전환율 개선' },
            { value: '12+', label: '런칭 프로젝트' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat"
              variants={statVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <span className="stat__value">{stat.value}</span>
              <span className="stat__label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.aside
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="hero__aside"
      >
        <div className="hero__card">
          <div className="hero__avatar">
            <img src={portrait} alt="프론트엔드 개발자 이도현" />
          </div>
          <h2>이도현</h2>
          <p>Frontend Engineer @ HyperGrowth</p>
          <ul>
            <li>데이터 기반 실험과 A/B 테스트 문화 주도</li>
            <li>디자인 시스템 & UI 플랫폼 구축</li>
            <li>팀 온보딩과 멘토링 경험 다수</li>
          </ul>
        </div>
      </motion.aside>
    </div>
  </section>
);

export default Hero;
