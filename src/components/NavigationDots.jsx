import React, { useState, useEffect, useRef } from "react";

function NavigationDots() {
  const [activeSection, setActiveSection] = useState("home");
  const sectionRefs = useRef({});

  const sections = [
    "home",
    "about",
    "work",
    "skills",
    "testimonial",
    "contact",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.7 } // Adjust this value to your liking
    );

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        sectionRefs.current[section] = sectionElement;
        observer.observe(sectionElement);
      }
    });

    return () => {
      if (sectionRefs.current) {
        sections.forEach((section) => {
          const sectionElement = sectionRefs.current[section];
          if (sectionElement) {
            observer.unobserve(sectionElement);
          }
        });
      }
    };
  }, [sections]);

  return (
    <div className="app__navigation">
      {sections.map((item, index) => (
        <a
          href={`#${item}`}
          className={`app__navigation-dot`}
          style={activeSection === item ? { backgroundColor: "#313BAC" } : {}}
          key={item + index}
        />
      ))}
    </div>
  );
}

export default NavigationDots;
