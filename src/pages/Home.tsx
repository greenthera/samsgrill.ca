import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../App.css'
import '../spacing.css'
import '../responsive.css'
import '../sections.css'

gsap.registerPlugin(ScrollTrigger)
const Arrow = () => <span aria-hidden="true">↗︎</span>
const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`
const nav = [
  ['Menu', '/menu'],
  ['Our Story', '/our-story'],
  ['Locations', '/locations'],
  ['Partners', '/franchising'],
  ['Contact', '/contact-us'],
]
const brandItems = [
  'HAND-PRESSED BURGERS',
  'FRESH-CUT FRIES',
  'REAL QUÉBEC CURDS',
  'PROUDLY CANADIAN',
]
const products = [
  {
    name: 'Super Burger',
    sub: '(Triple)',
    image: 'super-burger-cutout.webp',
    description: 'Three patties. For appetites with a reputation to maintain.',
  },
  {
    name: 'The Barnyard Burger',
    sub: '',
    image: 'barnyard-cutout.webp',
    description:
      'Our signature since day one: hand-pressed beef, slow-cooked pulled pork, crispy onion rings, BBQ sauce.',
  },
  {
    name: 'Donair Pita',
    sub: '(Halal)',
    image: 'donair-cutout.webp',
    description:
      'The Halifax classic with the authentic sweet sauce. East Coast, done right.',
  },
  {
    name: 'Pulled Pork Poutine',
    sub: '',
    image: 'pulled-pork-cutout.webp',
    description: 'Pork slow-cooked since morning, over squeaky curds.',
  },
  {
    name: 'Hot Dog',
    sub: '',
    image: 'hot-dog-cutout.webp',
    description: "Nathan's 100% beef, grilled, dressed your way.",
  },
]
const towns = [
  'Guelph',
  'Cambridge',
  'Waterloo',
  'Burlington',
  'Iroquois Falls',
  'Port Elgin',
  'Swift Current',
  'Oakville',
  'Brockville',
  'Kirkland Lake',
  'South Porcupine',
  'Hearst',
  'Cochrane',
]
const reviews = [
  {
    text: 'Amazing food and great value. The burgers are juicy and satisfying, and the poutine is loaded and delicious. Sam’s Grill Guelph is easily one of my go to spots when I want comfort food done right.',
    name: 'Emeka Enuoyibo',
    town: 'Guelph',
  },
  {
    text: "The burgers are amazing! They're just like your own backyard burgers, homemade patties, fresh lettuce, tomatoes and onions. The poutine is delicious, but the portions are huge, so if you order both, you'll need a friend to share it with.",
    name: 'Kim ODell',
    town: 'Swift Current',
  },
  {
    text: 'Good food and service. Best burger and milkshake I had in a long time from a restaurant in Hearst. I will be going back a lot 😊❤️',
    name: 'Vicky Vachon',
    town: 'Hearst',
  },
]
function FoodCutout({
  fries = false,
  className = '',
}: {
  fries?: boolean
  className?: string
}) {
  return (
    <img
      className={className}
      src={
        fries
          ? asset('images/poutine-cutout.webp')
          : asset('images/hero-burger-cutout.webp')
      }
      alt={
        fries ? "Sam's Grill classic poutine" : "Sam's Grill bacon cheeseburger"
      }
      decoding="async"
    />
  )
}
function Navbar() {
  const [open, setOpen] = useState(false)
  useLayoutEffect(() => {
    if (!open) return
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', close)
    return () => document.removeEventListener('keydown', close)
  }, [open])
  return (
    <header className="navbar">
      <a href="/" className="brand" aria-label="Sam's Grill home">
        <img src={asset('images/logo.png')} alt="Sam's Grill" />
        <span>BURGERS & POUTINE</span>
      </a>
      <nav aria-label="Main navigation" className="desktop-nav">
        {nav.map(([name]) => (
          <a key={name} href="#">
            {name}
          </a>
        ))}
      </nav>
      <div className="nav-actions">
        <a className="language" href="#" aria-label="View French website">
          EN <span>/ FR</span>
        </a>
        <a href="#" className="button small">
          Order now <Arrow />
        </a>
        <button
          className="menu-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? '✕︎' : '☰'}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Mobile navigation"
          onClick={(event) => {
            if ((event.target as HTMLElement).closest('a')) setOpen(false)
          }}
        >
          {nav.map(([name]) => (
            <a key={name} href="#" onClick={() => setOpen(false)}>
              {name}
              <Arrow />
            </a>
          ))}
          <a href="#">
            Stories <Arrow />
          </a>
          <a href="#">
            Careers <Arrow />
          </a>
        </nav>
      )}
    </header>
  )
}
function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-topline">
        <span>
          <i /> FAMILY-RUN SINCE 2011
        </span>
        <span>
          PROUDLY CANADIAN <span className="maple">✦︎</span>
        </span>
      </div>
      <h1 id="hero-title">
        <span>FRESH.</span>
        <span>HOMEMADE.</span>
        <span className="last-line">
          DELICIOUS<span className="period">.</span>
        </span>
      </h1>
      <div className="hero-orbit" aria-hidden="true" />
      <div className="hero-food">
        <div className="fries-float">
          <FoodCutout fries className="hero-fries" />
        </div>
        <div className="burger-float">
          <FoodCutout className="hero-burger" />
        </div>
      </div>
      <div className="fresh-seal">
        <span>ALWAYS</span>
        <strong>100%</strong>
        <span>FRESH</span>
      </div>
      <div className="hero-copy">
        <p>
          Hand-pressed burgers, real Québec-curd poutine and golden fresh-cut
          fries — fresh, homemade, extraordinarily delicious.
        </p>
        <a href="#" className="button small">
          Order now <Arrow />
        </a>
        <a href="#" className="text-link">
          Explore the menu <span>→︎</span>
        </a>
      </div>
      <div className="hero-note">
        <span className="drawn-arrow" aria-hidden="true">
          ⤴︎
        </span>
        Fresh, homemade,
        <br />
        extraordinarily delicious.
      </div>
      <div className="hero-bottom">
        <span>WELCOME TO SAM’S GRILL</span>
        <a href="#">
          GOOD FOOD AHEAD <span>↓︎</span>
        </a>
      </div>
    </section>
  )
}
function AboutSams() {
  return (
    <section
      id="about"
      className="about-section section-pad"
      aria-labelledby="about-title"
    >
      <div className="about-art" aria-hidden="true">
        <span className="about-year">2011</span>
        <img src={asset('images/barnyard-cutout.webp')} alt="" loading="lazy" />
        <span className="about-stamp">
          FAMILY-RUN
          <br />
          SINCE 2011
        </span>
      </div>
      <div className="about-copy reveal">
        <span className="eyebrow">ABOUT SAM’S GRILL</span>
        <h2 id="about-title">
          Fresh, homemade,
          <br />
          <span className="red">
            extraordinarily
            <br />
            delicious.
          </span>
        </h2>
        <p>
          Sam's Grill has been family-run since 2011 — one family lit a grill in
          Guelph and never changed the recipe. Patties pressed by hand every
          morning. Fries cut from Canadian-grown potatoes. A vegetarian gravy
          the whole table can share, and a room where a kid's birthday and a
          farmer's lunch break happen side by side.
        </p>
        <div className="about-stats">
          <div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path
                strokeWidth="1.6"
                d="M12 21s-7-6.3-7-11.5A7 7 0 0 1 19 9.5C19 14.7 12 21 12 21z"
              />
              <circle cx="12" cy="9.5" r="2.4" strokeWidth="1.6" />
            </svg>
            <strong>{towns.length}</strong>
            <span>towns open</span>
          </div>
          <div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path
                strokeWidth="1.6"
                strokeLinecap="round"
                d="M4 6h16M4 12h16M4 18h10"
              />
            </svg>
            <strong>41+</strong>
            <span>menu items built on Canadian originals</span>
          </div>
          <div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path
                strokeWidth="1.6"
                strokeLinejoin="round"
                d="M12 2.5l2.9 6.2 6.6.7-4.9 4.6 1.3 6.6L12 17.5l-5.9 3.1 1.3-6.6-4.9-4.6 6.6-.7z"
              />
            </svg>
            <strong>
              4.4<i aria-hidden="true">★︎</i>
            </strong>
            <span>live Google ratings, store by store, unedited</span>
          </div>
        </div>
        <a href="#" className="text-link">
          Our story <Arrow />
        </a>
      </div>
    </section>
  )
}
function VideoSection() {
  const [playing, setPlaying] = useState(false)
  return (
    <section
      className="video-section section-pad"
      aria-labelledby="video-title"
    >
      <div className="video-editorial">
        <div className="video-intro">
          <span className="eyebrow">WATCH SAM’S GRILL</span>
          <h2 id="video-title">
            Tastes like <br />
            home.
            <br />
            <span className="red">
              Grows like <br />
              Canada.
            </span>
          </h2>
          <p>
            Family-run since 2011.
            <br />
            Proudly Canadian.
          </p>
          <span className="video-intro-arrow" aria-hidden="true">
            ↗︎
          </span>
        </div>
        <div className="video-player-area">
          <div className="video-frame">
            {playing ? (
              <iframe
                key="sams-video"
                src="https://www.youtube-nocookie.com/embed/EheSP1HM4M8?autoplay=1&mute=1&controls=1&playsinline=1&rel=0"
                title="Watch Sam’s Grill — video player"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            ) : (
              <button
                className="video-poster"
                onClick={() => setPlaying(true)}
                aria-label="Play the Sam’s Grill video"
              >
                <img
                  src={asset('images/video-cover.webp')}
                  alt="Sam’s Grill bacon cheeseburger and poutine on a wooden board"
                  loading="lazy"
                />
                <span className="video-play" aria-hidden="true">
                  ▶︎
                </span>
              </button>
            )}
          </div>
          <div className="video-toolbar">
            <span>
              {playing
                ? 'Starts muted · Use the player controls for sound and fullscreen'
                : 'SAM’S GRILL — THE FILM'}
            </span>
            {playing ? (
              <button
                className="video-stop text-link"
                onClick={() => setPlaying(false)}
              >
                Close video <span aria-hidden="true">×</span>
              </button>
            ) : (
              <button
                className="video-watch text-link"
                onClick={() => setPlaying(true)}
              >
                Watch now <span aria-hidden="true">▶︎</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
function ContactSection() {
  return (
    <section
      id="contact"
      className="contact-section section-pad"
      aria-labelledby="contact-title"
    >
      <div className="contact-copy reveal">
        <span className="eyebrow">REACH OUT, WE’LL GET BACK TO YOU.</span>
        <h2 id="contact-title">
          Contact us<span className="red">.</span>
        </h2>
        <p>
          Whether you need to get catered or just want to give us feedback, we'd
          love to hear from you.
        </p>
        <div className="contact-details">
          <div>
            <span className="eyebrow">EMAIL</span>
            <a href="#">
              contact@samsgrill.ca <Arrow />
            </a>
          </div>
          <div>
            <span className="eyebrow">REACH US</span>
            <address>
              55 Pinebush Rd, Cambridge,
              <br />
              ON N1R 8K5
            </address>
          </div>
        </div>
        <a href="#" className="button">
          Contact us <Arrow />
        </a>
      </div>
      <div className="contact-visual-wrap">
        <div className="contact-visual-bg" aria-hidden="true" />
        <div className="contact-visual-ring" aria-hidden="true" />
        <div className="contact-visual">
          <img
            src={asset('images/contact.webp')}
            alt="A phone reading Let’s Talk in a red Sam’s Grill apron pocket"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
function ProductShowcase() {
  return (
    <section id="products" className="products section-pad">
      <div className="section-heading reveal">
        <div>
          <span className="eyebrow">THE SAM’S LINEUP</span>
          <h2>
            The ones people
            <br />
            drive back for<span className="red">.</span>
          </h2>
        </div>
        <a className="button small" href="#">
          See the full menu <Arrow />
        </a>
      </div>
      <div className="product-editorial">
        {products.map((p, i) => (
          <article className={`food-feature food-feature-${i}`} key={p.name}>
            <div className="food-stage">
              <span className="food-backtype" aria-hidden="true">
                {i === 0
                  ? 'SUPER'
                  : i === 1
                    ? 'BARNYARD'
                    : i === 2
                      ? 'DONAIR'
                      : i === 3
                        ? 'POUTINE'
                        : 'HOT DOG'}
              </span>
              <a href="#" className="food-art" aria-label={`Order ${p.name}`}>
                <img
                  src={asset(`images/${p.image}`)}
                  alt={`${p.name} ${p.sub}`}
                  loading="lazy"
                />
              </a>
              <span className="food-index">0{i + 1} / SAM’S GRILL</span>
            </div>
            <div className="food-copy reveal">
              <span className="eyebrow">{p.sub || 'THE SAM’S LINEUP'}</span>
              <h3>
                {p.name}
                <span className="red">.</span>
              </h3>
              <p>{p.description}</p>
              <a href="#" className="button small">
                Order now <Arrow />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
function WhySams() {
  return (
    <section className="why section-pad" id="our-story">
      <div className="why-intro">
        <span className="eyebrow">WHY PEOPLE KEEP COMING BACK</span>
        <h2>
          Why people
          <br />
          keep coming back<span className="red">.</span>
        </h2>
        <p>Not because we say so — because of how it's made.</p>
        <div className="poutine-photo">
          <img
            src={asset('images/poutine-cutout.webp')}
            alt="Classic poutine with fresh-cut fries, real cheese curds and hot gravy"
            loading="lazy"
          />
          <span className="photo-label">REAL QUÉBEC CHEESE CURDS ↗︎</span>
        </div>
      </div>
      <div className="why-details">
        {[
          [
            '01',
            'Fresh-cut fries.',
            'Fries cut fresh from locally grown potatoes. You can taste the difference; that’s the point.',
          ],
          [
            '02',
            'Real Québec cheese curds.',
            'Real Québec cheese curds and a vegetarian gravy — so every poutine is for everyone.',
          ],
          [
            '03',
            'Halal taken seriously.',
            'Halal taken seriously. Chicken and donair lines — never a footnote.',
          ],
          [
            '04',
            'Made by families.',
            'Made by families, in stores owned by families, in towns we intend to stay in.',
          ],
        ].map(([n, title, body]) => (
          <div className="reason reveal" key={n}>
            <span>{n}</span>
            <div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
            <span aria-hidden="true">↗︎</span>
          </div>
        ))}
        <a href="#" className="text-link">
          Our story <Arrow />
        </a>
      </div>
    </section>
  )
}
function Testimonials() {
  const [active, setActive] = useState(0)
  const review = reviews[active]
  return (
    <section className="reviews section-pad" id="reviews">
      <div className="review-top reveal">
        <span className="eyebrow">STRAIGHT FROM THE TABLE</span>
        <a href="#" className="text-link">
          Read the reviews <Arrow />
        </a>
      </div>
      <div className="review-layout">
        <div className="review-heading reveal">
          <h2>
            Our towns,
            <br />
            in their <br />
            own words<span className="red">.</span>
          </h2>
          <p className="review-google">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Google reviews
            <strong>
              4.4<i aria-hidden="true">★︎</i>
            </strong>
          </p>
          <span className="review-mark" aria-hidden="true">
            “
          </span>
        </div>
        <div className="review-content" aria-live="polite" aria-atomic="true">
          <blockquote key={active}>“{review.text}”</blockquote>
          <div className="review-author">
            <span className="avatar">
              {review.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </span>
            <div>
              <strong>{review.name}</strong>
              <span>Sam’s Grill {review.town}</span>
            </div>
          </div>
          <div className="review-controls">
            <span>
              0{active + 1} <span className="divider">/ 03</span>
            </span>
            <div className="review-nav">
              <button
                className="circle-button circle-button-prev"
                aria-label="Previous review"
                onClick={() => setActive((active + 2) % 3)}
              >
                ←︎
              </button>
              <button
                className="circle-button circle-button-next"
                aria-label="Next review"
                onClick={() => setActive((active + 1) % 3)}
              >
                →︎
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
function Locations() {
  return (
    <section id="locations" className="locations section-pad">
      <div className="section-heading reveal">
        <div>
          <span className="eyebrow">PROUDLY CANADIAN. LOCALLY YOURS.</span>
          <h2>
            Find your Sam’s<span>.</span>
          </h2>
        </div>
        <a href="#" className="button white">
          All locations <Arrow />
        </a>
      </div>
      <div className="town-grid">
        {towns.map((town) => (
          <a href="#" className="town reveal" key={town}>
            <span className="town-no" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  strokeWidth="1.6"
                  d="M12 21s-7-6.3-7-11.5A7 7 0 0 1 19 9.5C19 14.7 12 21 12 21z"
                />
                <circle cx="12" cy="9.5" r="2.4" strokeWidth="1.6" />
              </svg>
            </span>
            <span>
              {town}
              {town === 'Hearst' && <small>Coming soon</small>}
            </span>
            <Arrow />
          </a>
        ))}
      </div>
      <div className="locations-bottom">
        <span>Tastes like home. Grows like Canada.</span>
        <a href="#">
          Your town next? <Arrow />
        </a>
      </div>
    </section>
  )
}
function Extras() {
  return (
    <section className="extras section-pad">
      <a className="catering" href="#">
        <img
          src={asset('images/donair-cutout.webp')}
          alt="Sam’s Grill Donair Pita"
          loading="lazy"
        />
        <div>
          <span className="eyebrow">STAY CALM, GET CATERED.</span>
          <h2>
            Stay calm,
            <br />
            get catered.
          </h2>
          <p>
            Game day, grad, the whole office. Individually bagged or on
            platters, with 24 hours' notice.
          </p>
          <span className="text-link">
            Plan your order <Arrow />
          </span>
        </div>
      </a>
      <div className="local-news">
        <span className="eyebrow">SAM’S GRILL LOCAL</span>
        <h3>
          Welcome to
          <br />
          Sam’s Grill Local.
        </h3>
        <p>Every Sam's Grill town now has its own notice board.</p>
        <a href="#" className="text-link">
          See the notice board <Arrow />
        </a>
        <div className="newsletter">
          <h3>
            A free poutine
            <br />
            says hello.
          </h3>
          <p>
            Join the Sam's Grill family list — openings, seasonal poutines, and
            a classic poutine on us to start.
          </p>
          <a href="#" className="text-link">
            Count me in <Arrow />
          </a>
          <small>
            One email a month. One classic poutine per new subscriber, any
            store, redeemable within 60 days. Unsubscribe anytime.
          </small>
        </div>
      </div>
    </section>
  )
}
function Footer() {
  return (
    <>
      <section className="final-cta section-pad">
        <span className="eyebrow">FIRST WE EAT.</span>
        <h2>
          Then we do
          <br />
          everything else<span className="red">.</span>
        </h2>
        <a href="#" className="button small">
          Order now <Arrow />
        </a>
        <FoodCutout className="final-burger" />
      </section>
      <footer className="section-pad">
        <div className="footer-main">
          <div className="footer-brand">
            <img src={asset('images/logo.png')} alt="Sam's Grill" />
            <p>
              Family-run since 2011.
              <br />
              Proudly Canadian.
            </p>
          </div>
          {[
            [
              'Visit',
              ['Menu', '/menu'],
              ['Locations', '/locations'],
              ['Order Now', '/order-online'],
              ['Notice Board', '/noticeboard'],
            ],
            [
              'Know us',
              ['Our Story', '/our-story'],
              ['Stories', '/stories'],
              ['Reviews', '/reviews'],
              ['FAQs', '/faqs'],
            ],
            [
              'Join us',
              ['Careers', '/careers'],
              ['Become a Partner', '/franchising'],
              ['Open Jobs', '/careers/jobs'],
              ['Catering', '/catering'],
              ['Global Partners', '/global'],
            ],
          ].map(([heading, ...items]) => (
            <div className="footer-links" key={heading as string}>
              <h3>{heading}</h3>
              {(items as string[][]).map(([name]) => (
                <a href="#" key={name}>
                  {name}
                </a>
              ))}
            </div>
          ))}
          <div className="footer-links">
            <h3>Reach us</h3>
            <a href="#">
              Contact Us <Arrow />
            </a>
            <a href="#">contact@samsgrill.ca</a>
            <p>
              55 Pinebush Rd, Cambridge,
              <br />
              ON N1R 8K5
            </p>
            <div className="flex gap-4">
              <a href="#">Instagram ↗︎</a>
              <a href="#">Facebook ↗︎</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            Sam’s Grill © {new Date().getFullYear()}.<br />
            Developed by{' '}
            <a
              href="https://www.shivantra.com/?utm_source=samsgrill.ca&utm_medium=referral&utm_campaign=client_footer"
              target="_blank"
              rel="noopener noreferrer"
              className="red"
            >
              Shivantra
            </a>
          </span>
          <div className="flex flex-wrap gap-5">
            {[
              ['Privacy Policy', '/privacy-policy'],
              ['Terms', '/terms'],
              ['Accessibility', '/accessibility'],
            ].map(([name]) => (
              <a key={name} href="#">
                {name}
              </a>
            ))}
          </div>
          <span>TASTES LIKE HOME. GROWS LIKE CANADA.</span>
        </div>
      </footer>
    </>
  )
}
function Home() {
  const root = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    const mm = gsap.matchMedia()
    const ctx = gsap.context(() => {
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap
          .timeline({ defaults: { ease: 'power3.out' } })
          .from('.hero h1 > span', {
            yPercent: 110,
            rotation: 3,
            duration: 1,
            stagger: 0.12,
          })
          .from('.hero-orbit', { scale: 0.4, rotation: -35, duration: 1 }, 0.2)
          .from(
            '.burger-float',
            { y: 150, scale: 0.7, rotation: 15, opacity: 0, duration: 1.3 },
            0.3,
          )
          .from(
            '.fries-float',
            { x: 120, y: -80, rotation: -20, opacity: 0, duration: 1.2 },
            0.5,
          )
          .from(
            '.hero-copy, .fresh-seal, .hero-note',
            { y: 25, opacity: 0, stagger: 0.12, duration: 0.7 },
            0.8,
          )
        gsap.to('.hero-burger', {
          y: -10,
          rotation: 1.5,
          duration: 3.4,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
        })
        gsap.to('.hero-orbit', {
          y: 65,
          rotation: 15,
          scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        })
        gsap.to('.navbar', {
          boxShadow: '0 5px 25px #0000000c',
          scrollTrigger: {
            trigger: '.hero',
            start: '40px top',
            toggleActions: 'play none none reverse',
          },
        })
        gsap.utils
          .toArray<HTMLElement>('.reveal')
          .forEach((el) =>
            gsap.from(el, {
              y: 40,
              clipPath: 'inset(0 0 20% 0)',
              opacity: 0,
              duration: 0.9,
              scrollTrigger: { trigger: el, start: 'top 92%', once: true },
            }),
          )
        gsap.utils
          .toArray<HTMLElement>('.food-art')
          .forEach((el, i) =>
            gsap.fromTo(
              el,
              { rotation: i % 2 ? 7 : -7, y: 45 },
              {
                rotation: i % 2 ? -3 : 3,
                y: -20,
                ease: 'none',
                scrollTrigger: {
                  trigger: el.closest('.food-feature'),
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: 1.3,
                },
              },
            ),
          )
        gsap.from('.final-burger', {
          x: 120,
          rotation: -15,
          scrollTrigger: {
            trigger: '.final-cta',
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: 1,
          },
        })
      })
      mm.add(
        '(prefers-reduced-motion: no-preference) and (pointer: fine)',
        () => {
          const hero = root.current?.querySelector<HTMLElement>('.hero')
          if (!hero) return
          const xTo = gsap.quickTo('.hero-food', 'x', {
            duration: 0.7,
            ease: 'power2.out',
          })
          const yTo = gsap.quickTo('.hero-food', 'y', {
            duration: 0.7,
            ease: 'power2.out',
          })
          const move = (e: PointerEvent) => {
            const rect = hero.getBoundingClientRect()
            xTo((e.clientX / rect.width - 0.5) * 16)
            yTo(((e.clientY - rect.top) / rect.height - 0.5) * 12)
          }
          const reset = () => {
            xTo(0)
            yTo(0)
          }
          hero.addEventListener('pointermove', move)
          hero.addEventListener('pointerleave', reset)
          return () => {
            hero.removeEventListener('pointermove', move)
            hero.removeEventListener('pointerleave', reset)
          }
        },
      )
    }, root)
    return () => {
      mm.revert()
      ctx.revert()
    }
  }, [])
  return (
    <div ref={root}>
      <a
        href="#"
        className="skip-link"
        onClick={(event) => {
          event.preventDefault()
          document.getElementById('main-content')?.focus()
        }}
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <div
          className="brand-strip"
          aria-label="Fresh, homemade, proudly Canadian"
        >
          <div className="brand-strip-track">
            {[0, 1, 2, 3].map((rep) => (
              <span
                className="brand-strip-group"
                key={rep}
                aria-hidden={rep > 0 || undefined}
              >
                {brandItems.map((item) => (
                  <span className="brand-strip-item" key={item}>
                    <span>{item}</span>
                    <b aria-hidden="true">✦︎</b>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
        <AboutSams />
        <ProductShowcase />
        <WhySams />
        <VideoSection />
        <Testimonials />
        <Locations />
        <Extras />
        <ContactSection />
        <Footer />
      </main>
    </div>
  )
}
export default Home
