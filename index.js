console.log(
  "%c".concat("Built By: Nesaku | https://github.com/nesaku"),
  "color:green"
);

  document.addEventListener("DOMContentLoaded", () => {
    const img = document.getElementById("glow-img");
    if (!img) return;

    img.addEventListener("mousemove", (e) => {
      const rect = img.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      img.style.setProperty("--x", `${x}%`);
      img.style.setProperty("--y", `${y}%`);
    });
  });