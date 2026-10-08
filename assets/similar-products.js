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
    { file: "nattokinase200", category: "targeted", tag: "Targeted support", name: "Nattokinase Plus 200 mg", blurb: "200 mg / 4,000 FU · 30 vegan capsules · High-strength circulation support · <strong>Best for: experienced users</strong>", main: "../products/Nattokinase Carton.webp", hover: "../products/all images/p2.png", icon: "fa-heart-pulse" },
    { file: "magnesium-complex-5-in-1", category: "daily", tag: "Daily essentials", name: "Magnesium Complex 5-in-1", blurb: "350 mg per 2 capsules · 60 vegan capsules · Sleep and muscle support · <strong>Best for: evening routines</strong>", main: "../products/Magnesium Complex.webp", hover: "../products/all images/magnesium2.png", icon: "fa-atom" },
    { file: "dailyvitals", category: "daily", tag: "Daily essentials", name: "Daily Vitals for Adults 18+", blurb: "1 capsule daily · 60 vegan capsules · Everyday energy and immune support · <strong>Best for: adults 18+</strong>", main: "../products/reefit forte c new size.webp", hover: "../products/all images/multivitamin2.png", icon: "fa-sun" },
    { file: "nattokinase100", category: "targeted", tag: "Targeted support", name: "Nattokinase 100 mg", blurb: "100 mg / 2,000 FU · 60 vegan capsules · Circulation support · <strong>Best for: first-time users</strong>", main: "../products/Nattokinase Carton  final 3d.webp", hover: "../products/all images/1.webp", icon: "fa-heart-pulse" },
    { file: "vitamind3", category: "daily", tag: "Daily essentials", name: "Vitamin D3 60,000 IU", blurb: "60,000 IU · 60 vegetarian capsules · Bone and immunity support · <strong>Best for: vitamin D3 routines</strong>", main: "../products/all images/vitamind3-1.png", hover: "../products/all images/vitamind3-2.png", icon: "fa-sun" },
    { file: "dailyvitalsmen", category: "daily", tag: "Daily essentials", name: "Daily Vitals for Men 40+", blurb: "1 capsule daily · 60 capsules · Energy and vitality support · Gelatin capsule · <strong>Best for: men 40+</strong>", main: "../products/all images/men-1.png", hover: "../products/all images/men-2.png", icon: "fa-person" },
    { file: "dailyvitalswomen", category: "daily", tag: "Daily essentials", name: "Daily Vitals for Women 40+", blurb: "1 vegan capsule daily · 60 vegan capsules · Women's vitality support · <strong>Best for: women 40+</strong>", main: "../products/all images/women-1.png", hover: "../products/all images/women-2.png", icon: "fa-person-dress" },
    { file: "wheyprotein", category: "performance", tag: "Performance nutrition", name: "Whey Protein", blurb: "As directed on pack · 2 kg powder · Recovery and strength support · Whey-based · <strong>Best for: active lifestyles</strong>", main: "../images/protein/whey%20protein.png", hover: "../images/protein/protein.png", icon: "fa-dumbbell" },
    { file: "plantprotein", category: "performance", tag: "Plant-based nutrition", name: "Plant Protein", blurb: "As directed on pack · 1 kg powder · Recovery and strength support · Plant-based · <strong>Best for: plant-powered routines</strong>", main: "../images/protein/protein.png", hover: "../images/protein/whey1.png", icon: "fa-leaf" },
    { file: "yeastprotein", category: "performance", tag: "Next-gen nutrition", name: "Yeast Protein", blurb: "As directed on pack · 1 kg powder · Recovery and strength support · Yeast-based · <strong>Best for: everyday performance</strong>", main: "../images/protein/whey1.png", hover: "../images/protein/protein.png", icon: "fa-seedling" },
    { file: "omega3fishoil", category: "targeted", tag: "Targeted support", name: "Omega-3 Fish Oil", blurb: "1,000 mg fish oil · 60 softgels · EPA + DHA support · Fish-based · <strong>Best for: heart and joint wellness</strong>", main: "../products/all images/omega-1.png", hover: "../products/all images/omega-2.png", icon: "fa-fish" }
  ];
  const categories = [
    { id: "all", label: "All products" },
    { id: "performance", label: "Protein & performance" },
    { id: "daily", label: "Daily essentials" },
    { id: "targeted", label: "Targeted support" },
  ];

  const currentFile = window.location.pathname.split("/").pop().toLowerCase().replace(/\.html$/, "");
  const currentSection = document.querySelector(".similar-section");
  const existingRail = document.querySelector("#more .rail");
  if (!currentSection && !existingRail) return;

  const cardMarkup = (product) => `
        <article class="pcard" data-category="${product.category}">
          <div class="pcard-media"><img src="${product.main}" alt="Aiva Wellness ${product.name}" loading="lazy" onerror="this.parentNode.classList.add('no-img');this.remove()" /><img class="img-hover" src="${product.hover}" alt="" aria-hidden="true" loading="lazy" onerror="this.remove()" /><i class="fa-solid ${product.icon}" aria-hidden="true"></i></div>
          <div class="pcard-body"><span class="tag">${product.tag}</span><h3>${product.name}</h3><p>${product.blurb}</p><a class="pcard-link" href="/products/${product.file}">View product <i class="fa-solid fa-arrow-right"></i></a></div>
        </article>`;

  if (!currentSection) {
    const missingProducts = products.filter((product) =>
      ["plantprotein", "yeastprotein"].includes(product.file) &&
      product.file !== currentFile &&
      !existingRail.querySelector(`a[href="/products/${product.file}"]`),
    );
    existingRail.insertAdjacentHTML("beforeend", missingProducts.map(cardMarkup).join(""));
    return;
  }

  const railProducts = products.filter((product) => product.file !== currentFile);
  const section = document.createElement("section");
  section.className = "section rail-section";
  section.id = "more";
  section.setAttribute("aria-labelledby", "more-h");
  section.innerHTML = `
    <div class="rail-head">
      <div class="rail-intro">
        <span class="rail-eyebrow"><i class="fa-solid fa-sparkles" aria-hidden="true"></i> The Aiva Wellness collection</span>
        <h2 id="more-h">Find your next<br />daily essential</h2>
        <p>Explore thoughtfully developed nutrition across everyday essentials, targeted formulas and performance support.</p>
      </div>
      <div class="rail-controls"><button class="rail-btn" type="button" data-direction="-1" aria-label="Scroll products left"><i class="fa-solid fa-arrow-left"></i></button><button class="rail-btn" type="button" data-direction="1" aria-label="Scroll products right"><i class="fa-solid fa-arrow-right"></i></button></div>
    </div>
    <div class="rail-categories" role="group" aria-label="Filter products by category">
        ${categories.map((category, index) => `
          <button class="rail-category${index === 0 ? " is-active" : ""}" type="button" data-category="${category.id}" aria-pressed="${index === 0}">
            ${category.label}<span>${category.id === "all" ? railProducts.length : railProducts.filter((product) => product.category === category.id).length}</span>
          </button>`).join("")}
    </div>
    <div class="rail" tabindex="0" aria-label="Similar products">
        ${railProducts.map(cardMarkup).join("")}
    </div>
    <div class="rail-foot">
      <p>Good routines start with choices that fit you.</p>
      <a class="btn-ghost" href="/shop">Explore the full collection <i class="fa-solid fa-arrow-right"></i></a>
    </div>`;

  currentSection.replaceWith(section);
  const rail = section.querySelector(".rail");
  const buttons = section.querySelectorAll(".rail-btn");
  const categoryButtons = section.querySelectorAll(".rail-category");
  const cards = rail.querySelectorAll(".pcard");
  const updateButtons = () => {
    buttons[0].disabled = rail.scrollLeft <= 1;
    buttons[1].disabled = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 1;
  };
  categoryButtons.forEach((button) => button.addEventListener("click", () => {
    const category = button.dataset.category;
    categoryButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
    cards.forEach((card) => {
      card.hidden = category !== "all" && card.dataset.category !== category;
    });
    rail.scrollTo({ left: 0, behavior: "smooth" });
    requestAnimationFrame(updateButtons);
  }));
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
