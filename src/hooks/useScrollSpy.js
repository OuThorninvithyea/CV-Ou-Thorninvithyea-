import { useEffect, useState } from "react";

export const useScrollSpy = (ids, options = {}) => {
  const { offset = 120, rootMargin = "0px 0px -80% 0px" } = options;
  const [activeId, setActiveId] = useState(ids[0] || "");

  useEffect(() => {
    if (!ids.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin,
        threshold: 0,
      },
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [ids, rootMargin]);

  // Fallback scroll listener for the top of the page when no section is intersecting
  useEffect(() => {
    if (!ids.length) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (let i = ids.length - 1; i >= 0; i--) {
        const element = document.getElementById(ids[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(ids[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ids, offset]);

  return activeId;
};

export default useScrollSpy;
