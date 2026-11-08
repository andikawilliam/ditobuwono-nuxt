import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// The site's reveal: each element fades up 30px once it reaches 85% of the viewport.
// Skipped entirely under reduced motion, so content is never left hidden.
export function fadeUp(targets: Element[]) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  targets.forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 30,
      duration: 0.9,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 85%", once: true },
    });
  });
}
