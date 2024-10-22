function resizeSVGPaths() {
  const svgPaths = document.querySelectorAll(".feature-arrow-svg path");
  const screenWidth = window.innerWidth;

  svgPaths.forEach((svgPath) => {
    if (screenWidth <= 398) {
      const newPath = `
        M 0 243.3125
        L 45 261.3125
        L 90 243.3125
        L 90 0
        L 45 18
        L 0 0 Z`;
      svgPath.setAttribute("d", newPath);
    } else if (screenWidth <= 468) {
      const newPath = `
        M 0 223.3125
        L 45 241.3125
        L 90 223.3125
        L 90 0
        L 45 18
        L 0 0 Z`;
      svgPath.setAttribute("d", newPath);
    } else if (screenWidth <= 768) {
      const newPath = `
        M 0 193.3125
        L 45 211.3125
        L 90 193.3125
        L 90 0
        L 45 18
        L 0 0 Z`;
      svgPath.setAttribute("d", newPath);
    } else if (screenWidth < 1200) {
      const decrement = (1200 - screenWidth) * 0.3;

      const originalM = 327;
      const originalL1 = 345;
      const originalL3 = 327;

      const newM = originalM - decrement;
      const newL1 = originalL1 - decrement;
      const newL3 = originalL3 - decrement;

      const newPath = `
        M ${newM.toFixed(2)} 0
        L ${newL1.toFixed(2)} 36
        L ${newL3.toFixed(2)} 72
        L 0 72
        L 18 36
        L 0 0 Z`;

      svgPath.setAttribute("d", newPath);
    } else {
      svgPath.setAttribute(
        "d",
        "M 327 0 L 345 36 L 327 72 L 0 72 L 18 36 L 0 0 Z"
      );
    }
  });
}

window.addEventListener("resize", resizeSVGPaths);
window.addEventListener("load", resizeSVGPaths);

AOS.init({
  once: true,
  duration: 600,
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".animate-bg-section");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-bg");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});
