document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetID = this.getAttribute("href").substring(1);
    const section = document.getElementById(targetID);

    if (section && section.classList.contains("collapsible")) {
      section.classList.add("open");
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

document.querySelectorAll(".toggle-header").forEach(btn => {
  btn.addEventListener("click", () => {
    const section = btn.closest(".collapsible");
    section.classList.toggle("open");
  });
});