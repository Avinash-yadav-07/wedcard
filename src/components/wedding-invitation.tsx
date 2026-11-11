import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp, ArrowUpRight, CalendarDays, ChevronLeft, ChevronRight, Clock3, Heart, MapPin, Music2, Pause, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCountdownParts, wedding } from "@/lib/wedding-config";

const countdownLabels = [
  ["days", "Days"],
  ["hours", "Hours"],
  ["minutes", "Minutes"],
  ["seconds", "Seconds"],
] as const;

const dust = Array.from({ length: 22 }, (_, index) => index);

function playOpeningChime() {
  try {
    const AudioContextConstructor = window.AudioContext;
    if (!AudioContextConstructor) return;
    const context = new AudioContextConstructor();
    const gain = context.createGain();
    gain.gain.setValueAtTime(0.0001, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.035, context.currentTime + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.75);
    gain.connect(context.destination);
    for (const [frequency, offset] of [[659.25, 0], [987.77, 0.12]] as const) {
      const tone = context.createOscillator();
      tone.type = "sine";
      tone.frequency.value = frequency;
      tone.connect(gain);
      tone.start(context.currentTime + offset);
      tone.stop(context.currentTime + 0.78);
    }
    window.setTimeout(() => void context.close(), 1000);
  } catch {
    // The envelope animation remains available when audio is unavailable.
  }
}

export function WeddingInvitation() {
  const [opened, setOpened] = useState(false);
  const [opening, setOpening] = useState(false);
  const [activePhoto, setActivePhoto] = useState<number | null>(null);
  const [now, setNow] = useState(() => new Date());
  const [musicPlaying, setMusicPlaying] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem("richa-abhishek-invitation-opened") === "yes") {
      setOpened(true);
    }
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (activePhoto === null) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActivePhoto(null);
      if (event.key === "ArrowRight") setActivePhoto((current) => current === null ? null : (current + 1) % wedding.photos.length);
      if (event.key === "ArrowLeft") setActivePhoto((current) => current === null ? null : (current - 1 + wedding.photos.length) % wedding.photos.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activePhoto]);

  const countdown = getCountdownParts(now, new Date(wedding.dates.countdownTarget));

  const openInvitation = () => {
    if (opening || opened) return;
    playOpeningChime();
    setOpening(true);
    window.setTimeout(() => {
      window.localStorage.setItem("richa-abhishek-invitation-opened", "yes");
      setOpened(true);
      setOpening(false);
    }, 1350);
  };

  const skipIntro = () => {
    window.localStorage.setItem("richa-abhishek-invitation-opened", "yes");
    setOpened(true);
  };

  const cyclePhoto = (direction: number) => {
    setActivePhoto((current) => current === null ? null : (current + direction + wedding.photos.length) % wedding.photos.length);
  };

  return (
    <main className="wedding-page">
      {!opened && (
        <section className={`invitation-gate${opening ? " invitation-gate--opening" : ""}`} aria-label="Wedding invitation envelope">
          <div className="gate-ornament gate-ornament--top" aria-hidden="true">✧　❧　✧</div>
          <div className="envelope-wrap">
            <div className="envelope-paper">
              <div className="envelope-corners" aria-hidden="true"><span>❧</span><span>❧</span><span>❧</span><span>❧</span></div>
              <div className="envelope-flap" aria-hidden="true" />
              <div className="envelope-copy">
                <span className="eyebrow">A celebration of love</span>
                <span className="envelope-couple">R <i>&</i> A</span>
                <span className="gold-rule" aria-hidden="true" />
                <span className="envelope-subtitle">You are cordially invited</span>
                <span className="envelope-names">Richa <span>&</span> Abhishek</span>
                <span className="envelope-date">8 — 9 December 2026</span>
              </div>
              <div className="wax-seal" aria-hidden="true"><span>R<span>&</span>A</span></div>
            </div>
            <div className="revealed-card" aria-hidden="true">
              <span className="revealed-card-ornament">✧</span>
              <span className="revealed-card-title">A Royal Invitation</span>
              <span className="revealed-card-names">Richa & Abhishek</span>
              <span className="revealed-card-ornament">❧</span>
            </div>
          </div>
          <div className="gate-actions">
            <Button onClick={openInvitation} disabled={opening} className="open-invitation-button">
              <span>{opening ? "Opening your invitation" : "Open invitation"}</span>
              {!opening && <ArrowDown aria-hidden="true" />}
            </Button>
            <button className="skip-intro" type="button" onClick={skipIntro}>Skip intro</button>
          </div>
          <p className="gate-footer">Together with their families · Prayagraj, India</p>
          <div className="gate-ornament gate-ornament--bottom" aria-hidden="true">✧　❧　✧</div>
          {dust.map((particle) => <span className="gold-dust" key={particle} style={{ "--dust-index": particle } as React.CSSProperties} aria-hidden="true" />)}
        </section>
      )}

      <div className={`invitation-content${opened ? " invitation-content--visible" : ""}`} aria-hidden={!opened}>
        <header className="site-header">
          <a className="brand-mark" href="#home" aria-label="Richa and Abhishek, home">R <span>&</span> A</a>
          <nav className="site-nav" aria-label="Invitation sections">
            <a href="#celebration">Celebrations</a>
            <a href="#moments">Moments</a>
            <a href="#invitation">Invitation</a>
          </nav>
          <span className="header-date">08 — 09 · XII · MMXXVI</span>
        </header>

        <section className="hero-section" id="home" style={{ "--hero-image": `url("${wedding.photos[0].src}")` } as React.CSSProperties}>
          <div className="hero-image" role="img" aria-label="Richa and Abhishek together" />
          <div className="hero-vignette" />
          <div className="hero-frame" aria-hidden="true"><span>✧</span><span>❧</span><span>✧</span><span>❧</span></div>
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow">With the blessings of our families</p>
            <p className="family-line">Sample parents · edit before sharing<br />{wedding.parents.bride} <span>and</span> {wedding.parents.groom}</p>
            <div className="hero-title-block">
              <h1><span>Richa</span><span className="hero-surname">Chaurasia</span></h1>
              <div className="hero-ampersand" aria-hidden="true">&</div>
              <h1><span>Abhishek</span><span className="hero-surname">Chaurasia</span></h1>
            </div>
            <span className="gold-rule hero-rule" aria-hidden="true" />
            <p className="hero-description">Joyfully invite you to celebrate<br />the beginning of their forever.</p>
            <a href="#celebration" className="discover-link">Celebrate with us <ArrowDown aria-hidden="true" /></a>
          </div>
          <div className="hero-bottomline"><span>PRAYAGRAJ, INDIA</span><span>08 — 09 DECEMBER 2026</span></div>
          {dust.slice(0, 12).map((particle) => <span className="hero-dust" key={particle} style={{ "--dust-index": particle } as React.CSSProperties} aria-hidden="true" />)}
        </section>

        <section className="countdown-section" aria-label="Countdown to the wedding">
          <div className="section-kicker"><span>THE CELEBRATION BEGINS IN</span><span className="kicker-flourish">✧</span></div>
          <div className="countdown-grid">
            {countdownLabels.map(([key, label]) => (
              <div className="countdown-unit" key={key}>
                <span className="countdown-number">{String(countdown[key]).padStart(2, "0")}</span>
                <span className="countdown-label">{label}</span>
              </div>
            ))}
          </div>
          <p className="countdown-date">9 December 2026 <span>·</span> Prayagraj</p>
        </section>

        <section className="story-section" id="story">
          <div className="story-copy">
            <span className="section-index">01 <i>—</i> A NEW CHAPTER</span>
            <h2>Two souls,<br /><em>one beautiful journey.</em></h2>
            <span className="gold-rule" aria-hidden="true" />
            <p>Two families, one cherished celebration. With hearts full of gratitude, Richa and Abhishek begin a new chapter—surrounded by the love, laughter, and blessings of everyone who means the most.</p>
            <p className="story-signature">With love, <span>Richa & Abhishek</span></p>
          </div>
          <button className="story-photo photo-button" type="button" onClick={() => setActivePhoto(0)} aria-label="View featured photograph of Richa and Abhishek">
            <img src={wedding.photos[0].src} alt={wedding.photos[0].alt} loading="lazy" />
            <span className="photo-caption">A moment to remember <Heart aria-hidden="true" /></span>
          </button>
          <span className="story-ornament" aria-hidden="true">❧</span>
        </section>

        <section className="events-section" id="celebration">
          <div className="section-heading">
            <span className="section-index">02 <i>—</i> SAVE THE DATES</span>
            <h2>Our wedding <em>celebrations</em></h2>
            <p>Three gatherings, a lifetime of memories.</p>
          </div>
          <div className="event-list">
            {wedding.events.map((event, index) => (
              <article className={`event-row event-row--${event.kind}`} key={event.kind}>
                <div className="event-number">0{index + 1}</div>
                <div className="event-name-block">
                  <span className="event-type">{event.kind === "haldi" ? "THE HALDI" : event.kind === "mehndi" ? "THE MEHNDI" : "THE WEDDING"}</span>
                  <h3>{event.name}</h3>
                  <p>{event.detail}</p>
                </div>
                <div className="event-details">
                  <span><CalendarDays aria-hidden="true" />{event.date}</span>
                  <span><Clock3 aria-hidden="true" />{event.time}</span>
                  <span><MapPin aria-hidden="true" />{event.venue}</span>
                </div>
                {event.kind !== "wedding" ? (
                  <Button asChild variant="outline" className="location-button">
                    <a href={wedding.mapUrl} target="_blank" rel="noreferrer">View location <ArrowUpRight aria-hidden="true" /></a>
                  </Button>
                ) : <span className="venue-pending">DEMO VENUE<br />Replace before sharing</span>}
                <span className="event-flourish" aria-hidden="true">{event.kind === "haldi" ? "❋" : event.kind === "mehndi" ? "❧" : "✧"}</span>
              </article>
            ))}
          </div>
          <div className="venue-preview">
            <div><span className="event-type">HALDI & MEHNDI · PRAYAGRAJ</span><h3>Ganga Yamuna View</h3><p>Find your way to the celebrations.</p><a className="location-link" href={wedding.mapUrl} target="_blank" rel="noreferrer">Open directions <ArrowUpRight aria-hidden="true" /></a></div>
            <iframe title="Map showing Ganga Yamuna View in Prayagraj" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=Ganga%20Yamuna%20View%2C%20Prayagraj&t=&z=13&ie=UTF8&iwloc=&output=embed" />
          </div>
        </section>

        <section className="gallery-section" id="moments">
          <div className="section-heading gallery-heading">
            <span className="section-index">03 <i>—</i> OUR MOMENTS</span>
            <h2>In good <em>company</em></h2>
            <p>Little glimpses of a very special beginning.</p>
          </div>
          <div className="gallery-grid">
            {wedding.photos.map((photo, index) => (
              <button className={`gallery-photo gallery-photo--${photo.shape} photo-button`} type="button" key={photo.src} onClick={() => setActivePhoto(index)} aria-label={`View photograph ${index + 1}: ${photo.alt}`}>
                <img src={photo.src} alt={photo.alt} loading="lazy" />
                <span className="gallery-photo-number">0{index + 1}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="invitation-message-section" id="invitation">
          <div className="invitation-border">
            <span className="message-flourish" aria-hidden="true">❧</span>
            <span className="section-index">WITH JOY IN OUR HEARTS</span>
            <h2>A heartfelt <em>invitation</em></h2>
            <span className="gold-rule" aria-hidden="true" />
            <p>{wedding.invitation}</p>
            <span className="message-names">Richa <i>&</i> Abhishek</span>
            <span className="message-flourish message-flourish--bottom" aria-hidden="true">❧</span>
          </div>
        </section>

        <footer className="closing-section">
          <span className="section-index">UNTIL WE CELEBRATE TOGETHER</span>
          <div className="closing-ornament" aria-hidden="true">✧　❧　✧</div>
          <h2>Your presence is<br /><em>our greatest gift.</em></h2>
          <span className="closing-rule" aria-hidden="true" />
          <p>With love,</p>
          <span className="closing-names">Richa & Abhishek</span>
          <div className="closing-footer"><span>PRAYAGRAJ · INDIA</span><a href="#home">Back to top <ArrowUp aria-hidden="true" /></a><span>08 — 09 · XII · MMXXVI</span></div>
        </footer>
      </div>

      {opened && wedding.musicSrc && (
        <audio id="wedding-music" src={wedding.musicSrc} loop preload="none" />
      )}
      {opened && wedding.musicSrc && (
        <Button className="music-toggle" size="icon" variant="outline" aria-label={musicPlaying ? "Pause background music" : "Play background music"} onClick={() => {
          const audio = document.getElementById("wedding-music");
          if (!(audio instanceof HTMLAudioElement)) return;
          if (musicPlaying) audio.pause(); else void audio.play();
          setMusicPlaying(!musicPlaying);
        }}>{musicPlaying ? <Pause aria-hidden="true" /> : <Music2 aria-hidden="true" />}</Button>
      )}

      {activePhoto !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Wedding photograph">
          <Button className="lightbox-close" size="icon" variant="outline" aria-label="Close photo" onClick={() => setActivePhoto(null)}><X aria-hidden="true" /></Button>
          <Button className="lightbox-previous" size="icon" variant="outline" aria-label="Previous photo" onClick={() => cyclePhoto(-1)}><ChevronLeft aria-hidden="true" /></Button>
          <figure className="lightbox-figure">
            <img src={wedding.photos[activePhoto].src} alt={wedding.photos[activePhoto].alt} />
            <figcaption>{wedding.photos[activePhoto].alt} <span>0{activePhoto + 1} / 0{wedding.photos.length}</span></figcaption>
          </figure>
          <Button className="lightbox-next" size="icon" variant="outline" aria-label="Next photo" onClick={() => cyclePhoto(1)}><ChevronRight aria-hidden="true" /></Button>
        </div>
      )}
    </main>
  );
}
