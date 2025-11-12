import './style.css'

const intro = {
  name: 'Eduwa',
  role: '프론트엔드 개발자 · 크리에이티브 메이커',
  greeting: '감각적인 인터랙션과 따뜻한 사용자 경험을 사랑해요.',
  bio: '사용자의 하루를 더 부드럽고 기분 좋게 만들어 주는 디지털 경험을 만들고 있습니다. 데이터 기반의 인사이트와 감성적인 디자인을 잇는 작업을 즐깁니다.',
  focus: ['누구나 반할 인터페이스 설계', '감성적인 마이크로 인터랙션', '지속 가능한 코드 아키텍처']
}

const socialLinks = [
  { label: '이메일', href: 'mailto:hello@eduwa.dev' },
  { label: '포트폴리오', href: 'https://eduwa.dev', external: true },
  { label: '인스타그램', href: 'https://instagram.com/eduwa.create', external: true }
]

document.querySelector('#app').innerHTML = `
  <main class="intro">
    <div class="bg-orbs" aria-hidden="true"></div>

    <section class="profile-card">
      <span class="eyebrow">반가워요!</span>
      <h1>${intro.name}<span class="accent">✨</span></h1>
      <p class="role">${intro.role}</p>
      <p class="hero-text">${intro.greeting}</p>

      <div class="chips">
        ${intro.focus
          .map((item) => `<span class="chip">${item}</span>`)
          .join('')}
      </div>

      <p class="bio">${intro.bio}</p>

      <div class="cta-group">
        ${socialLinks
          .map(
            (link) => `
          <a class="cta ${link.label === '이메일' ? 'primary' : 'secondary'}" href="${link.href}" ${
              link.external ? 'target="_blank" rel="noreferrer"' : ''
            }>
            ${link.label}
          </a>
        `
          )
          .join('')}
      </div>
    </section>

    <section class="glow-cards">
      <article class="glow-card">
        <h2>01. Vivid Vision</h2>
        <p>파스텔 감성 위에 미묘한 조도를 더해 살아있는 UI를 만들어요.</p>
      </article>
      <article class="glow-card">
        <h2>02. Empathy First</h2>
        <p>사용자의 마음과 시선을 섬세하게 읽어내는 경험 설계를 추구합니다.</p>
      </article>
      <article class="glow-card">
        <h2>03. Playful Tech</h2>
        <p>모던 웹 기술에 감각적인 인터랙션을 향기로 더해요.</p>
      </article>
    </section>
  </main>
`

const pastelPalette = [
  '#ffd6ff',
  '#c8b6ff',
  '#b8c0ff',
  '#bbf7d0',
  '#fef9c3',
  '#fbcfe8',
  '#bae6fd'
]

const orbContainer = document.querySelector('.bg-orbs')
const orbCount = 18

if (orbContainer) {
  let seed = 0
  const random = () => {
    const x = Math.sin(seed++) * 10000
    return x - Math.floor(x)
  }

  for (let i = 0; i < orbCount; i += 1) {
    const orb = document.createElement('span')
    const size = 12 + random() * 24
    orb.className = 'orb'
    orb.style.setProperty('--orb-size', `${size}rem`)
    orb.style.setProperty('--orb-x', `${random() * 100}%`)
    orb.style.setProperty('--orb-y', `${random() * 100}%`)
    orb.style.setProperty('--orb-delay', `${random() * 8}s`)
    orb.style.background = pastelPalette[i % pastelPalette.length]
    orbContainer.appendChild(orb)
  }
}
