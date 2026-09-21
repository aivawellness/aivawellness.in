(() => {
  const setupGalleryZoom = () => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    document.querySelectorAll(".main-img-container").forEach((container) => {
      container.addEventListener("mouseenter", () => container.classList.add("zooming"));
      container.addEventListener("mouseleave", () => {
        container.classList.remove("zooming");
        container.style.removeProperty("--zoom-x");
        container.style.removeProperty("--zoom-y");
      });
      container.addEventListener("mousemove", (event) => {
        const bounds = container.getBoundingClientRect();
        container.style.setProperty("--zoom-x", `${((event.clientX - bounds.left) / bounds.width) * 100}%`);
        container.style.setProperty("--zoom-y", `${((event.clientY - bounds.top) / bounds.height) * 100}%`);
      });
    });
  };

  setupGalleryZoom();

  const products = [
    { file: "wheyprotein.html", tag: "Performance nutrition", name: "Whey Protein", blurb: "Clean protein support for recovery and everyday strength.", main: "../images/protein/whey%20protein.png", hover: "../images/protein/protein.png", icon: "fa-dumbbell" },
    { file: "plantprotein.html", tag: "Plant-based nutrition", name: "Plant Protein", blurb: "Balanced plant-powered nutrition for active, conscious routines.", main: "../images/protein/protein.png", hover: "../images/protein/protein2.png", icon: "fa-leaf" },
    { file: "yeastprotein.html", tag: "Next-gen nutrition", name: "Yeast Protein", blurb: "Modern protein support thoughtfully made for everyday wellness.", main: "../images/protein/protein2.png", hover: "../images/protein/protein.png", icon: "fa-seedling" },
    { file: "omega3fishoil.html", tag: "Daily essentials", name: "Omega-3 Fish Oil", blurb: "A simple daily addition to your wellness routine.", main: "../products/all images/omega-1.png", hover: "../products/all images/omega-2.png", icon: "fa-fish" },
    { file: "nattokinase200.html", tag: "Wellness", name: "Nattokinase Plus 200 mg", blurb: "Focused support, made with the same quality thinking.", main: "../products/Nattokinase Carton.webp", hover: "../products/all images/p2.png", icon: "fa-heart-pulse" },
    { file: "magnesium-complex-5-in-1.html", tag: "Minerals", name: "Magnesium Complex 5-in-1", blurb: "Five forms of magnesium combined in one formula.", main: "../products/Magnesium Complex.webp", hover: "../products/all images/magnesium2.png", icon: "fa-atom" },
    { file: "dailyvitals.html", tag: "Everyday nutrition", name: "Daily Vitals for Adults 18+", blurb: "An easy everyday habit to keep your nutrition on track.", main: "../products/reefit forte c new size.webp", hover: "../products/all images/multivitamin2.png", icon: "fa-sun" },
    { file: "nattokinase100.html", tag: "Heart health", name: "Nattokinase 100 mg", blurb: "Everyday cardiovascular support in a focused formula.", main: "../products/Nattokinase Carton  final 3d.webp", hover: "../products/all images/1.webp", icon: "fa-heart-pulse" },
    { file: "vitamind3.html", tag: "Vitamins", name: "Vitamin D3 60,000 IU", blurb: "Daily bone, immunity and energy metabolism support.", main: "../products/all images/vitamind3-1.png", hover: "../products/all images/vitamind3-2.png", icon: "fa-sun" },
    { file: "dailyvitalsmen.html", tag: "Men's wellness", name: "Daily Vitals for Men 40+", blurb: "Complete daily nutrition tailored for men's wellness.", main: "../products/all images/men-1.png", hover: "../products/all images/men-2.png", icon: "fa-person" },
    { file: "dailyvitalswomen.html", tag: "Women's wellness", name: "Daily Vitals for Women 40+", blurb: "Complete daily nutrition tailored for women's wellness.", main: "../products/all images/women-1.png", hover: "../products/all images/women-2.png", icon: "fa-person-dress" }
  ];

  const currentFile = window.location.pathname.split("/").pop().toLowerCase();
  const currentSection = document.querySelector(".similar-section");
  if (!currentSection || document.querySelector(".rail-section")) return;

  const railProducts = products.filter((product) => product.file !== currentFile);
  const section = document.createElement("section");
  section.className = "section rail-section";
  section.id = "more";
  section.setAttribute("aria-labelledby", "more-h");
  section.innerHTML = `
    <div class="rail-head">
      <div><h2 id="more-h">More from<br />Aiva Wellness</h2><p>Explore other formulas from the range to round out your daily routine.</p></div>
      <div class="rail-controls"><button class="rail-btn" type="button" data-direction="-1" aria-label="Scroll products left"><i class="fa-solid fa-arrow-left"></i></button><button class="rail-btn" type="button" data-direction="1" aria-label="Scroll products right"><i class="fa-solid fa-arrow-right"></i></button></div>
    </div>
    <div class="rail" tabindex="0" aria-label="Similar products">
      ${railProducts.map((product) => `
        <article class="pcard">
          <div class="pcard-media"><span class="tag">${product.tag}</span><img src="${product.main}" alt="Aiva Wellness ${product.name}" loading="lazy" onerror="this.parentNode.classList.add('no-img');this.remove()" /><img class="img-hover" src="${product.hover}" alt="" aria-hidden="true" loading="lazy" onerror="this.remove()" /><i class="fa-solid ${product.icon}" aria-hidden="true"></i></div>
          <div class="pcard-body"><h3>${product.name}</h3><p>${product.blurb}</p><a class="pcard-link" href="${product.file}">View product <i class="fa-solid fa-arrow-right"></i></a></div>
        </article>`).join("")}
    </div>
    <div class="rail-foot"><a class="btn-ghost" href="../shop.html">Browse the full shop <i class="fa-solid fa-arrow-right"></i></a></div>`;

  currentSection.replaceWith(section);
  const rail = section.querySelector(".rail");
  const buttons = section.querySelectorAll(".rail-btn");
  const updateButtons = () => {
    buttons[0].disabled = rail.scrollLeft <= 1;
    buttons[1].disabled = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 1;
  };
  buttons.forEach((button) => button.addEventListener("click", () => {
    const card = rail.querySelector(".pcard");
    const direction = Number(button.dataset.direction) || 1;
    const distance = (card ? card.getBoundingClientRect().width : rail.clientWidth) + 18 * (card ? 1 : 0);
    rail.scrollBy({ left: distance * direction, behavior: "smooth" });
  }));
  rail.addEventListener("scroll", updateButtons, { passive: true });
  window.addEventListener("resize", updateButtons);
  updateButtons();
})();
