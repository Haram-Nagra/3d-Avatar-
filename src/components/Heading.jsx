import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import "./HeadingAnimation.css"; // Include CSS for custom styling

export const AnimatedHeading = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    const letters = headingRef.current.querySelectorAll(".letter");

    // GSAP Animation: Letters bump into each other
    gsap
      .timeline()
      .from(letters, {
        x: (index) => (index % 2 === 0 ? -100 : 100), // Alternate direction
        opacity:0,
        duration: 0.5,
        stagger: 0.1, // Stagger each letter for the bumping effect
        ease: "elastic.out(1, 0.75)", // Elastic bounce effect
      })
      .to(letters, {
        x: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.05,
        ease: "power2.out",
      });
  }, []);

  return (
    <h1 ref={headingRef} className="animated-heading">
      <span className="letter large">H</span>
      <span className="letter large">a</span>
      <span className="letter large">r</span>
      <span className="letter large">a</span>
      <span className="letter large">m</span>&nbsp;
      <span className="letter large">I</span>
      <span className="letter large">q</span>
      <span className="letter large">b</span>
      <span className="letter large">a</span>
      <span className="letter large">l</span>&nbsp;
      <span className="letter large">N</span>
      <span className="letter large">a</span>
      <span className="letter large">g</span>
      <span className="letter large">r</span>
      <span className="letter large">a</span>
    </h1>
  );
};
