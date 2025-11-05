import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

const contactLinks = [
  {
    label: '이메일',
    value: 'dohyun.dev@gmail.com',
    href: 'mailto:dohyun.dev@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/dohyunlee',
    href: 'https://linkedin.com/in/dohyunlee',
  },
  {
    label: 'GitHub',
    value: 'github.com/dohyun-dev',
    href: 'https://github.com/dohyun-dev',
  },
];

const Contact = () => (
  <section className="section section--contact" id="contact">
    <div className="section__header">
      <span className="eyebrow">Contact</span>
      <h2>함께 성장할 팀을 찾고 있습니다</h2>
      <p>
        새로운 문제를 즐기고, 데이터와 사용자 피드백을 바탕으로 제품을 발전시킬 팀과의 협업을 기다립니다.
      </p>
    </div>

    <div className="contact-card">
      <div>
        <h3>대화가 필요하신가요?</h3>
        <p>
          프로젝트 제안, 협업 문의, 커피챗까지 언제든 편하게 연락 주세요. 24시간 내에 답변드릴게요.
        </p>
      </div>
      <a className="button" href="mailto:dohyun.dev@gmail.com">
        <PaperAirplaneIcon />
        메일 보내기
      </a>
    </div>

    <ul className="contact-links">
      {contactLinks.map((item) => (
        <li key={item.label}>
          <span>{item.label}</span>
          <a href={item.href} target="_blank" rel="noreferrer">
            {item.value}
          </a>
        </li>
      ))}
    </ul>
  </section>
);

export default Contact;
