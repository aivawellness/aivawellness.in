(() => {
  const cards = {
    dailyvitals: ["../blogs/images/daily-vitals-cover.png", "5 Signs You Need a Daily Multivitamin", "Learn how everyday energy, immunity and nutrition gaps can show up in your routine.", "../blogs/daily-vitals.html"],
    dailyvitalsmen: ["../blogs/images/dailyvitalsmen40.png", "Essential Nutrients for Men Over 40", "A practical look at the nutrients that matter for energy, strength and everyday men's wellness.", "../blogs/essential-nutrients-men-over-40.html"],
    dailyvitalswomen: ["../blogs/images/dailyvitalswomen40.png", "Essential Nutrients for Women Over 40", "Explore the everyday nutrients that support energy, resilience and women's wellness after 40.", "../blogs/essential-nutrients-women-over-40.html"],
    "magnesium-complex-5-in-1": ["../blogs/images/5typesmagnesiumexplained.png", "5 Types of Magnesium Explained", "Understand how different magnesium forms fit into a balanced daily wellness routine.", "../blogs/magnesium-5-types-explained.html"],
    nattokinase100: ["../blogs/images/100vs200.png", "Nattokinase 100mg vs 200mg Compared", "Understand the practical difference between two planned strengths before choosing a routine.", "../blogs/nattokinase-100mg-vs-200mg.html"],
    nattokinase200: ["../blogs/images/NattokinasePlus200mg.png", "Nattokinase Plus 200mg: What 4000 FU Means", "Get a clearer view of enzyme activity, serving strength and informed supplement choices.", "../blogs/nattokinase-plus-200mg-4000fu.html"],
    omega3fishoil: ["../blogs/images/OMEGA3FISHOIL.png", "Omega-3 Fish Oil Benefits", "Explore why EPA and DHA matter and what to consider in an everyday Omega-3 routine.", "../blogs/omega-3-fish-oil.html"],
    vitamind3: ["../blogs/images/VITAMINd3EXPLAINED.png", "Vitamin D3 Explained: Why It Matters", "Learn the role of Vitamin D3 in bone health, immunity and a carefully guided routine.", "../blogs/vitamin-d3-explained.html"]
  };
  const key = location.pathname.split("/").pop();
  const data = cards[key];
  const cta = document.querySelector(".followup-cta");
  if (!data || !cta) return;
  const card = document.createElement("article");
  card.className = "product-blog-card";
  card.innerHTML = `<img src="${data[0]}" alt="${data[1]}" loading="lazy"><div><span class="blog-kicker">From the Aiva Wellness blog</span><h3>${data[1]}</h3><p>${data[2]}</p><a href="${data[3]}">Read the article <i class="fa-solid fa-arrow-right"></i></a></div>`;
  cta.parentNode.insertBefore(card, cta);
})();
