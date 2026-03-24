import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import '../../../styles/willem-loader.css';

interface WillemLoaderProps {
  onComplete?: () => void;
}

const WillemLoader: React.FC<WillemLoaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const loadingLettersRef = useRef<HTMLSpanElement[]>([]);
  const boxRef = useRef<HTMLDivElement>(null);
  const growingImageRef = useRef<HTMLDivElement>(null);
  const headingStartRef = useRef<HTMLDivElement>(null);
  const headingEndRef = useRef<HTMLDivElement>(null);
  const coverExtrasRef = useRef<HTMLImageElement[]>([]);
  const headerLettersRef = useRef<HTMLSpanElement[]>([]);
  const navLinksRef = useRef<HTMLAnchorElement[]>([]);

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "expo.inOut" },
      onComplete: () => {
        setIsVisible(false);
        if (onComplete) onComplete();
      }
    });

    if (loadingLettersRef.current.length) {
      tl.fromTo(loadingLettersRef.current,
        { yPercent: 100 },
        { yPercent: 0, stagger: 0.025, duration: 1.25 }
      );
    }

    if (boxRef.current) {
      tl.fromTo(boxRef.current,
        { width: "0em" },
        { width: "1em", duration: 1.25 },
        "< 1.25"
      );
    }

    if (growingImageRef.current) {
      tl.fromTo(growingImageRef.current,
        { width: "0%" },
        { width: "100%", duration: 1.25 },
        "<"
      );
    }

    if (headingStartRef.current) {
      tl.fromTo(headingStartRef.current, { x: "0em" }, { x: "-0.05em", duration: 1.25 }, "<");
    }
    if (headingEndRef.current) {
      tl.fromTo(headingEndRef.current, { x: "0em" }, { x: "0.05em", duration: 1.25 }, "<");
    }

    if (coverExtrasRef.current.length) {
      tl.fromTo(coverExtrasRef.current,
        { opacity: 1 },
        { opacity: 0, duration: 0.05, ease: "none", stagger: 0.5 },
        "-=0.05"
      );
    }

    if (growingImageRef.current) {
      tl.to(growingImageRef.current, {
        width: "100vw",
        height: "100vh",
        duration: 2
      }, "< 1.25");
    }
    if (boxRef.current) {
      tl.to(boxRef.current, { width: "110vw", duration: 2 }, "<");
    }

    if (headerLettersRef.current.length) {
      tl.fromTo(headerLettersRef.current,
        { yPercent: 100 },
        { yPercent: 0, duration: 1.25, ease: "expo.out", stagger: 0.025 },
        "< 1.2"
      );
    }
    if (navLinksRef.current.length) {
      tl.fromTo(navLinksRef.current,
        { yPercent: 100 },
        { yPercent: 0, duration: 1.25, ease: "expo.out", stagger: 0.1 },
        "<"
      );
    }

    tl.to(containerRef.current, {
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
      pointerEvents: 'none'
    });

  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <section ref={containerRef} className="willem-header is--active">
      <div className="willem-loader">
        <div className="willem__h1">
          <div ref={headingStartRef} className="willem__h1-start">
            {['W', 'i', 'l'].map((l, i) => (
              <span key={i} ref={el => { if (el) loadingLettersRef.current[i] = el; }} className="willem__letter">{l}</span>
            ))}
          </div>
          <div ref={boxRef} className="willem-loader__box">
            <div className="willem-loader__box-inner">
              <div ref={growingImageRef} className="willem__growing-image">
                <div className="willem__growing-image-wrap">
                  <img className="willem__cover-image-extra is--1"
                    ref={el => { if (el) coverExtrasRef.current[0] = el; }}
                    src="https://sttb.ac.id/storage/2024/03/Russel-1080x675.png"
                    alt="Arch 1" />
                  <img className="willem__cover-image-extra is--2"
                    ref={el => { if (el) coverExtrasRef.current[1] = el; }}
                    src="https://sttb.ac.id/storage/2022/08/fasilitas-12.png"
                    alt="Arch 2" />
                  <img className="willem__cover-image-extra is--3"
                    ref={el => { if (el) coverExtrasRef.current[2] = el; }}
                    src="https://sttb.ac.id/storage/2025/12/Natal-2025-scaled.jpg"
                    alt="Arch 3" />
                  <img className="willem__cover-image"
                    src="https://assets.nsd.co.id/images/kampus/logo/NzQzNUMxQkQtRjU4Ny00NUE5LUI1NzItQjQ1QzQxN0M4MTZF.jpg"
                    alt="Main" />
                </div>
              </div>
            </div>
          </div>
          <div ref={headingEndRef} className="willem__h1-end">
            {['l', 'e', 'm'].map((l, i) => (
              <span key={i} ref={el => { if (el) loadingLettersRef.current[i + 3] = el; }} className="willem__letter">{l}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="willem-header__content">
        <div className="willem-header__top">
          <nav className="willen-nav">
            <div className="willem-nav__start">
              <a href="#" className="willem-nav__link" ref={el => { if (el) navLinksRef.current[0] = el; }}></a>
            </div>
            <div className="willem-nav__end">
              <div className="willem-nav__links">
                <a href="#" className="willem-nav__link" ref={el => { if (el) navLinksRef.current[1] = el; }}>About,</a>
                <a href="#" className="willem-nav__link" ref={el => { if (el) navLinksRef.current[2] = el; }}>Academic,</a>
                <a href="#" className="willem-nav__link" ref={el => { if (el) navLinksRef.current[3] = el; }}>News</a>
              </div>
              <div className="willem-nav__cta">
                <a href="#" className="willem-nav__link" ref={el => { if (el) navLinksRef.current[4] = el; }}>Contact</a>
              </div>
            </div>
          </nav>
        </div>
        <div className="willem-header__bottom">
          <div className="willem__h1">
            {['W', 'i', 'l', 'l', 'e', 'm', '©'].map((l, i) => (
              <span key={i} ref={el => { if (el) headerLettersRef.current[i] = el; }} className={`willem__letter-white ${l === '©' ? 'is--space' : ''}`}>{l}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WillemLoader;