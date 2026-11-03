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
    {
      file: "nattokinase200",
      category: "targeted",
      tag: "Nattokinase supplement",
      name: "Nattokinase Plus 200 mg",
      facts: ["200 mg nattokinase per capsule", "4,000 FU enzyme activity", "30 vegan capsules"],
      main: "../products/Nattokinase Carton.webp",
      hover: "../products/all images/p2.webp",
      icon: "fa-heart-pulse",
    },
    {
      file: "magnesium-complex-5-in-1",
      category: "daily",
      tag: "Magnesium supplement",
      name: "Magnesium Complex 5-in-1",
      facts: ["350 mg elemental magnesium per 2-capsule serving", "Five magnesium forms", "60 vegan capsules"],
      main: "../products/Magnesium Complex.webp",
      hover: "../products/all images/magnesium2.webp",
      icon: "fa-atom",
    },
    {
      file: "dailyvitals",
      category: "daily",
      tag: "Daily multivitamin",
      name: "Daily Vitals for Adults 18+",
      facts: ["Multivitamin, multimineral and Zinc", "Includes Omega-3 and Vitamin E", "60 capsules"],
      main: "../products/reefit forte c new size.webp",
      hover: "../products/all images/multivitamin2.webp",
      icon: "fa-sun",
    },
    {
      file: "nattokinase100",
      category: "targeted",
      tag: "Nattokinase supplement",
      name: "Nattokinase 100 mg",
      facts: ["100 mg nattokinase per capsule", "2,000 FU enzyme activity", "60 vegan capsules"],
      main: "../products/Nattokinase Carton  final 3d.webp",
      hover: "../products/all images/1.webp",
      icon: "fa-heart-pulse",
    },
    {
      file: "vitamind3",
      category: "targeted",
      tag: "Vitamin D3 tablets",
      name: "Vitamin D3 60,000 IU",
      facts: ["60,000 IU Vitamin D3 (Cholecalciferol IP) per tablet", "60 film-coated tablets", "Use only as directed by a Registered Medical Practitioner"],
      main: "../products/all images/vitamind3-1.webp",
      hover: "../products/all images/vitamind3-2.webp",
      icon: "fa-sun",
    },
    {
      file: "dailyvitalsmen",
      category: "daily",
      tag: "Men's multivitamin",
      name: "Daily Vitals for Men 40+",
      facts: ["Multivitamin, multimineral and amino acids", "Formulated for men aged 40+", "60 capsules"],
      main: "../products/all images/men-1.webp",
      hover: "../products/all images/men-2.webp",
      icon: "fa-person",
    },
    {
      file: "dailyvitalswomen",
      category: "daily",
      tag: "Women's multivitamin",
      name: "Daily Vitals for Women 40+",
      facts: ["Multivitamin, multimineral, amino acids and Ginseng", "Formulated for women aged 40+", "60 vegan capsules"],
      main: "../products/all images/women-1.webp",
      hover: "../products/all images/women-2.webp",
      icon: "fa-person-dress",
    },
    {
      file: "wheyprotein",
      category: "performance",
      tag: "Whey protein powder",
      name: "Whey Protein",
      facts: ["500 g and 1 kg packs", "Chocolate and Vanilla flavours", "Contains milk and milk products"],
      main: "../images/protein/whey%20protein.webp",
      hover: "../images/protein/protein.webp",
      icon: "fa-dumbbell",
    },
    {
      file: "plantprotein",
      category: "performance",
      tag: "Plant protein powder",
      name: "Plant Protein",
      facts: ["500 g and 1 kg packs", "Coffee and Mango flavours", "Check pack for protein and ingredient details"],
      main: "../images/protein/protein.webp",
      hover: "../images/protein/whey1.webp",
      icon: "fa-leaf",
    },
    {
      file: "yeastprotein",
      category: "performance",
      tag: "Yeast protein powder",
      name: "Yeast Protein",
      facts: ["500 g and 1 kg packs", "Strawberry and Kesar Pista flavours", "Check pack for protein and ingredient details"],
      main: "../images/protein/whey1.webp",
      hover: "../images/protein/protein.webp",
      icon: "fa-seedling",
    },
    {
      file: "omega3fishoil",
      category: "targeted",
      tag: "Omega-3 fish oil",
      name: "Omega-3 Fish Oil",
      facts: ["1,000 mg Omega-3 per softgel", "180 mg EPA and 120 mg DHA", "60 softgels; contains fish oil"],
      main: "../products/all images/omega-1.webp",
      hover: "../products/all images/omega-2.webp",
      icon: "fa-fish",
    },
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
  const sectionToReplace = currentSection || existingRail?.closest("#more");
  if (!sectionToReplace) return;

  const cardMarkup = (product) => `
        <article class="pcard" data-category="${product.category}">
          <div class="pcard-media"><img src="${product.main}" alt="Aiva Wellness ${product.name}" loading="lazy" decoding="async" onerror="this.parentNode.classList.add('no-img');this.remove()" /><img class="img-hover" src="${product.hover}" alt="" aria-hidden="true" loading="lazy" decoding="async" onerror="this.remove()" /><i class="fa-solid ${product.icon}" aria-hidden="true"></i></div>
          <div class="pcard-body"><span class="tag">${product.tag}</span><h3>${product.name}</h3><ul class="pcard-facts">${product.facts.map((fact) => `<li>${fact}</li>`).join("")}</ul><a class="pcard-link" href="/products/${product.file}" aria-label="View ${product.name} product details">View ${product.name} <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a></div>
        </article>`;

  const railProducts = products.filter((product) => product.file !== currentFile);
  const section = document.createElement("section");
  section.className = "section rail-section";
  section.id = "more";
  section.setAttribute("aria-labelledby", "more-h");
  section.innerHTML = `
    <div class="rail-head">
      <div class="rail-intro">
        <span class="rail-eyebrow"><i class="fa-solid fa-sparkles" aria-hidden="true"></i> The Aiva Wellness collection</span>
        <h2 id="more-h">Explore more Aiva Wellness supplements</h2>
        <p>Browse Aiva Wellness daily multivitamins, Vitamin D3 60,000 IU tablets, magnesium supplements, nattokinase capsules, Omega-3 fish oil and protein powders. Compare pack sizes, ingredients and serving details on each product page.</p>
      </div>
      <div class="rail-controls"><button class="rail-btn" type="button" data-direction="-1" aria-label="Show previous products"><i class="fa-solid fa-arrow-left" aria-hidden="true"></i></button><button class="rail-btn" type="button" data-direction="1" aria-label="Show next products"><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></button></div>
    </div>
    <div class="rail-categories" role="group" aria-label="Filter related supplements by category">
        ${categories.map((category, index) => `
          <button class="rail-category${index === 0 ? " is-active" : ""}" type="button" data-category="${category.id}" aria-pressed="${index === 0}">
            ${category.label}<span>${category.id === "all" ? railProducts.length : railProducts.filter((product) => product.category === category.id).length}</span>
          </button>`).join("")}
    </div>
    <p class="rail-instructions" id="rail-instructions">Use the category filters or arrows to browse. On touchscreens, swipe through the products. Open a product page for its ingredients, directions and full details.</p>
    <div class="rail" tabindex="0" aria-label="Related Aiva Wellness products" aria-describedby="rail-instructions">
        ${railProducts.map(cardMarkup).join("")}
    </div>
    <p class="rail-status" aria-live="polite" aria-atomic="true">${railProducts.length} related products</p>
    <div class="rail-foot">
      <p>Check each product label for full ingredients, serving information and precautions.</p>
      <a class="btn-ghost" href="/shop" aria-label="Browse all Aiva Wellness supplements">Browse all supplements <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
    </div>`;

  sectionToReplace.replaceWith(section);
  const rail = section.querySelector(".rail");
  const buttons = section.querySelectorAll(".rail-btn");
  const categoryButtons = section.querySelectorAll(".rail-category");
  const cards = rail.querySelectorAll(".pcard");
  const status = section.querySelector(".rail-status");
  const scrollBehavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
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
    const visibleCount = [...cards].filter((card) => !card.hidden).length;
    const categoryName = categories.find((item) => item.id === category)?.label;
    status.textContent = category === "all"
      ? `${visibleCount} related products`
      : `${visibleCount} ${categoryName.toLowerCase()} ${visibleCount === 1 ? "product" : "products"}`;
    rail.scrollTo({ left: 0, behavior: scrollBehavior });
    requestAnimationFrame(updateButtons);
  }));
  buttons.forEach((button) => button.addEventListener("click", () => {
    const card = rail.querySelector(".pcard:not([hidden])");
    const direction = Number(button.dataset.direction) || 1;
    const gap = Number.parseFloat(getComputedStyle(rail).columnGap) || 0;
    const distance = card ? card.getBoundingClientRect().width + gap : rail.clientWidth;
    rail.scrollBy({ left: distance * direction, behavior: scrollBehavior });
  }));
  rail.addEventListener("scroll", updateButtons, { passive: true });
  window.addEventListener("resize", updateButtons);
  updateButtons();
})();
