from pathlib import Path
from html import escape

root = Path(r"D:\RISHAV\aivawellness.in")
out_dir = root / "product-details-pages"
out_dir.mkdir(exist_ok=True)

products = [
    {
        "name": "Magnesium Complex 5-in-1",
        "slug": "magnesium-complex-5-in-1.html",
        "price": 1299,
        "old_price": 1499,
        "rating": 4.8,
        "reviews": 128,
        "image": "../products/Magnesium Complex.webp",
        "description": "A science-backed magnesium blend designed to support bone strength, muscle recovery, and everyday vitality.",
        "short_desc": "Supports bone strength, muscle recovery, calmness, and daily energy with a balanced magnesium formula.",
        "features": [
            "Supports bone strength and healthy nerve function",
            "Aids muscle recovery and reduces cramps",
            "Promotes cardiac wellness and better sleep",
            "Boosts daily energy and overall vitality",
        ],
        "benefits": [
            "Strong bones and healthy mineral balance",
            "Comfortable muscles and smoother recovery",
            "Steady energy and calmer routines",
        ],
        "usage": "Take 1 capsule daily with water or as directed by your healthcare professional.",
        "faq": [
            ("Who is this good for?", "Adults looking for daily support for bone strength, recovery, and calm energy."),
            ("How long before I notice results?", "Most people use it consistently for 3–6 weeks to experience the full benefit."),
        ],
    },
    {
        "name": "Bone Health Support (CCM + Mg + Zc + D3)",
        "slug": "bone-health-support.html",
        "price": 899,
        "old_price": 999,
        "rating": 4.6,
        "reviews": 84,
        "image": "../products/CCM, Mg, Zc, D3.webp",
        "description": "A complete bone-support formula that brings together calcium, magnesium, zinc, and vitamin D3.",
        "short_desc": "Daily mineral support for stronger bones, healthy movement, and better overall wellness.",
        "features": [
            "Supports bone strength and mineral balance",
            "Helps maintain healthy movement and recovery",
            "Supports immunity and everyday vitality",
            "Convenient daily support for busy lifestyles",
        ],
        "benefits": [
            "Strengthens bones with essential minerals",
            "Supports comfortable movement and recovery",
            "Easy daily routine for long-term wellness",
        ],
        "usage": "Take 1 serving daily with a meal or as advised by your healthcare professional.",
        "faq": [
            ("Is it suitable for daily use?", "Yes, it is designed for everyday use as part of a balanced wellness routine."),
            ("Can it be taken with other supplements?", "It can usually be paired with other basics, but we suggest checking your total nutrient intake."),
        ],
    },
    {
        "name": "Heart, Skin, Eye & Joint Health Pack",
        "slug": "heart-skin-eye-joint-health-pack.html",
        "price": 2499,
        "old_price": 2899,
        "rating": 4.7,
        "reviews": 112,
        "image": "../products/Q Fit-300.webp",
        "description": "A premium wellness bundle created to support heart, skin, eye, and joint health in one simple routine.",
        "short_desc": "A curated combo pack for cardiovascular wellness, skin health, visual comfort, and joint mobility.",
        "features": [
            "Supports heart and circulation wellness",
            "Helps maintain healthy skin and glow",
            "Aids visual comfort and eye support",
            "Promotes joint flexibility and comfort",
        ],
        "benefits": [
            "All-round wellness support in one bundle",
            "Great for people who want simplicity and consistency",
            "Designed for modern daily wellness routines",
        ],
        "usage": "Follow the pack directions daily with meals for consistent wellness support.",
        "faq": [
            ("Is this a single daily formula?", "It is a curated pack meant to be used as part of a daily routine."),
            ("Is it convenient for travel?", "Yes, the compact format makes it easy to carry and use on the go."),
        ],
    },
    {
        "name": "Heart, Health & Immunity Booster",
        "slug": "heart-health-immunity-booster.html",
        "price": 1599,
        "old_price": 1899,
        "rating": 4.8,
        "reviews": 95,
        "image": "../products/reefit forte c new size.webp",
        "description": "A daily wellness formula focused on heart health, immune resilience, and total vitality.",
        "short_desc": "Supports cardiovascular wellness, immunity, and everyday strength in one formula.",
        "features": [
            "Supports heart and circulatory wellness",
            "Helps maintain immune resilience",
            "Promotes daily vitality and energy",
            "Fits easily into an active lifestyle",
        ],
        "benefits": [
            "Boosts everyday resilience and strength",
            "Supports a healthy, active daily routine",
            "A dependable choice for daily wellness care",
        ],
        "usage": "Take 1 serving daily with water, preferably with a meal.",
        "faq": [
            ("Who should use this?", "Adults seeking daily support for heart health and immunity."),
            ("Can it be taken every day?", "Yes, it is designed for everyday support when used consistently."),
        ],
    },
    {
        "name": "Energy & Immunity Support",
        "slug": "energy-immunity-support.html",
        "price": 799,
        "old_price": 899,
        "rating": 4.5,
        "reviews": 67,
        "image": "../products/VITAMIN D3.webp",
        "description": "A simple daily support blend created to help maintain energy, resilience, and immune wellness.",
        "short_desc": "Helps support daily energy, recovery, and immunity in a simple everyday formula.",
        "features": [
            "Supports daily energy and vitality",
            "Encourages immune resilience",
            "Helps keep recovery and wellness on track",
            "A convenient option for busy routines",
        ],
        "benefits": [
            "Better daily stamina and vitality",
            "Reliable support for busy lifestyles",
            "Easy to use as part of your morning routine",
        ],
        "usage": "Take 1 serving with food and water daily for best results.",
        "faq": [
            ("Is this a morning supplement?", "Yes, many customers prefer it in the morning for a steady daytime routine."),
            ("Does it help with tiredness?", "It is designed to support daily energy and overall wellness."),
        ],
    },
    {
        "name": "Vitamin D3 Supplement",
        "slug": "vitamin-d3-supplement.html",
        "price": 499,
        "old_price": 599,
        "rating": 4.6,
        "reviews": 142,
        "image": "../products/VITAMIN D3.webp",
        "description": "A daily vitamin D3 supplement supporting stronger bones, immunity, and everyday wellness.",
        "short_desc": "A simple vitamin D3 supplement for stronger bones, immune wellness, and daily resilience.",
        "features": [
            "Supports strong bones and mineral balance",
            "Helps maintain immune function",
            "Aids daily energy and general wellness",
            "Convenient once-daily format",
        ],
        "benefits": [
            "Strong bone support and absorption",
            "Balanced immune support all year round",
            "Easy daily routine for healthier living",
        ],
        "usage": "Take 1 capsule daily with food or as directed by your healthcare professional.",
        "faq": [
            ("Is it good for people with limited sunlight?", "Yes, it is especially useful for those with lesser sun exposure."),
            ("Can it be taken with meals?", "Yes, taking it with food can make it easier to follow daily."),
        ],
    },
    {
        "name": "Vitamins & Minerals with Amino Acids (Men)",
        "slug": "vitamins-minerals-amino-acids-men.html",
        "price": 1199,
        "old_price": 1399,
        "rating": 4.7,
        "reviews": 88,
        "image": "../products/vitamins minerals with amino acid (man).webp",
        "description": "A performance-focused wellness formula for men supporting energy, recovery, and daily nutrition.",
        "short_desc": "A daily men’s formula for strength, recovery, energy, and balanced nutrition.",
        "features": [
            "Supports daily energy and endurance",
            "Helps with recovery and muscle maintenance",
            "Fills nutrient gaps in active routines",
            "Encourages overall vitality and performance",
        ],
        "benefits": [
            "Stronger daily performance",
            "Better recovery and muscle support",
            "Practical nutrition support for demanding routines",
        ],
        "usage": "Take 1 serving daily with a meal for consistent support.",
        "faq": [
            ("Is this suitable for active men?", "Yes, it is designed for men with demanding routines and active lifestyles."),
            ("How soon can I expect support?", "Regular use over a few weeks helps build consistency and results."),
        ],
    },
    {
        "name": "Vitamins & Minerals with Amino Acids (Women)",
        "slug": "vitamins-minerals-amino-acids-women.html",
        "price": 1199,
        "old_price": 1399,
        "rating": 4.8,
        "reviews": 101,
        "image": "../products/vitamins minerals with amino acid (Woman).webp",
        "description": "A women’s wellness formula created to support energy, balance, and everyday vitality.",
        "short_desc": "A daily women’s formula for balanced nutrition, energy, and wellness support.",
        "features": [
            "Supports daily energy and wellness",
            "Helps maintain balance during busy routines",
            "Aids recovery and healthy vitality",
            "Supports nutrient intake for active lifestyles",
        ],
        "benefits": [
            "More balance and steadiness through the day",
            "Support for recovery and active living",
            "Helpful everyday nutrition support",
        ],
        "usage": "Take 1 serving daily with a meal and plenty of water.",
        "faq": [
            ("Is this suitable for everyday use?", "Yes, it is designed for daily support and long-term wellness routines."),
            ("Can it be taken with other vitamins?", "It can be used alongside other basics, but overall intake should be reviewed carefully."),
        ],
    },
    {
        "name": "ZMA + Vitamin B6 (90 Capsules)",
        "slug": "zma-vitamin-b6.html",
        "price": 1499,
        "old_price": 1699,
        "rating": 4.7,
        "reviews": 62,
        "image": "../products/ZMA.webp",
        "description": "A nighttime wellness formula designed to support recovery, muscle function, and restful sleep.",
        "short_desc": "A nighttime wellness formula with zinc, magnesium, and vitamin B6 for recovery and better rest.",
        "features": [
            "Supports muscle recovery and nighttime restoration",
            "Helps maintain healthy magnesium and zinc intake",
            "Supports restful sleep and relaxation",
            "Aids general recovery and everyday vitality",
        ],
        "benefits": [
            "Better overnight recovery",
            "More restful sleep and relaxation",
            "A smooth evening wellness routine",
        ],
        "usage": "Take 1 serving before bedtime with water or as directed by your healthcare professional.",
        "faq": [
            ("When should I take it?", "It is best taken in the evening or before bedtime."),
            ("Is it meant for athletes?", "It is suitable for adults looking for recovery and nighttime support."),
        ],
    },
    {
        "name": "L-Glutathione 500mg",
        "slug": "l-glutathione-500mg.html",
        "price": 2299,
        "old_price": 2599,
        "rating": 4.6,
        "reviews": 49,
        "image": "../products/CCM, Mg, Zc, D3.webp",
        "description": "A premium antioxidant support formula designed to promote cellular wellness and everyday vitality.",
        "short_desc": "A premium antioxidant support formula for cellular health, vitality, and overall wellness.",
        "features": [
            "Supports antioxidant protection",
            "Helps maintain healthy cellular resilience",
            "Promotes a brighter, healthier appearance",
            "Aids daily vitality and wellness",
        ],
        "benefits": [
            "Powerful antioxidant support",
            "Everyday vitality and wellness confidence",
            "A modern addition to wellness routines",
        ],
        "usage": "Take 1 capsule daily with food or as directed by your healthcare professional.",
        "faq": [
            ("Who is it for?", "Adults seeking premium antioxidant wellness support."),
            ("How should it be used?", "Use it consistently as part of your daily wellness routine."),
        ],
    },
    {
        "name": "Whey Protein — 2kg",
        "slug": "whey-protein-2kg.html",
        "price": 3499,
        "old_price": 3999,
        "rating": 4.8,
        "reviews": 213,
        "image": "../products/Q Fit-300.webp",
        "description": "A clean, protein-rich supplement designed to support muscle recovery, growth, and daily nutrition.",
        "short_desc": "A high-protein whey supplement to support muscle recovery, strength, and daily nutrition goals.",
        "features": [
            "Supports muscle growth and recovery",
            "Helps meet daily protein needs",
            "Convenient for post-workout routines",
            "Supports strength and active lifestyles",
        ],
        "benefits": [
            "More support for muscle recovery",
            "Helps meet daily protein goals",
            "Fits easily into workout routines",
        ],
        "usage": "Mix 1 scoop with water or milk post-workout or as part of your daily nutrition routine.",
        "faq": [
            ("Is it good for gym users?", "Yes, it is ideal for recovery and fitness routines."),
            ("Can it be taken at any time?", "Yes, it works well post-workout or as part of your daily nutrition plan."),
        ],
    },
    {
        "name": "Plant Protein Blend",
        "slug": "plant-protein-blend.html",
        "price": 1799,
        "old_price": 2099,
        "rating": 4.5,
        "reviews": 78,
        "image": "../products/omega 3, Vitamin E.webp",
        "description": "A plant-based protein blend supporting muscle recovery, satiety, and balanced nutrition.",
        "short_desc": "A plant-based protein blend for muscle support, recovery, and everyday nutrition.",
        "features": [
            "Supports muscle recovery and sustained energy",
            "Plant-based protein for everyday nutrition",
            "Helps satisfy protein goals in a balanced routine",
            "Great for smoothies and active lifestyles",
        ],
        "benefits": [
            "Plant-powered nutrition with versatility",
            "Supports recovery and active routines",
            "Easy to mix into smoothies and shakes",
        ],
        "usage": "Mix 1 serving with water, plant milk, or a smoothie after workouts or as part of your routine.",
        "faq": [
            ("Is it suitable for vegan diets?", "Yes, it is a plant-based option for daily recovery and nutrition support."),
            ("Can it replace a meal?", "It is best used as a supplement to support protein intake rather than a full meal replacement."),
        ],
    },
    {
        "name": "Multivitamins & Minerals",
        "slug": "multivitamins-minerals.html",
        "price": 999,
        "old_price": 1199,
        "rating": 4.6,
        "reviews": 134,
        "image": "../products/Magnesium Complex.webp",
        "description": "A daily multivitamin blend created to support nutrition gaps, recovery, and everyday energy.",
        "short_desc": "A daily multivitamin blend designed to support immunity, energy, and overall everyday wellness.",
        "features": [
            "Supports daily nutrient coverage",
            "Helps maintain energy and immune function",
            "Aids general wellness and resilience",
            "Easy daily capsule format",
        ],
        "benefits": [
            "Daily nutrition support for busy routines",
            "Helps keep energy and resilience consistent",
            "Simple way to cover common nutrient gaps",
        ],
        "usage": "Take 1 serving daily with a meal for best absorption and consistent support.",
        "faq": [
            ("Who should use it?", "Adults looking for a simple daily formula for essential nutrients."),
            ("How often should it be used?", "Daily use is recommended for steady support and consistency."),
        ],
    },
]

for product in products:
    feature_items = "".join(
        f"<li><span class=\"check\">✓</span> {escape(item)}</li>" for item in product["features"]
    )
    benefit_items = "".join(
        f"<div class=\"benefit-card\"><h3>{escape(title)}</h3><p>{escape(desc)}</p></div>"
        for title, desc in zip(product["benefits"], product["benefits"])
    )
    faq_items = "".join(
        f"<div class=\"faq-item\"><h4>{escape(q)}</h4><p>{escape(a)}</p></div>"
        for q, a in product["faq"]
    )

    html = f'''<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{escape(product['name'])} | Aiva Wellness</title>
    <meta name="description" content="{escape(product['description'])}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://aivawellness.in/product-details-pages/{product['slug']}" />
    <style>
      :root {{ color-scheme: light; }}
      body {{ font-family: Arial, sans-serif; margin: 0; background: #f6f8fc; color: #14213d; }}
      a {{ color: inherit; text-decoration: none; }}
      .page {{ max-width: 1120px; margin: 0 auto; padding: 24px 18px 56px; }}
      .hero {{ background: linear-gradient(135deg, #ffffff 0%, #eef6ff 100%); border: 1px solid #dce7f7; border-radius: 24px; padding: 28px; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 24px; box-shadow: 0 20px 50px rgba(15, 23, 42, 0.08); }}
      .eyebrow {{ display: inline-block; background: #e8f2ff; color: #1d4ed8; font-size: 0.82rem; font-weight: 700; padding: 7px 10px; border-radius: 999px; margin-bottom: 12px; }}
      h1 {{ margin: 0 0 10px; font-size: clamp(1.8rem, 3vw, 2.6rem); }}
      .sub {{ font-size: 1.02rem; line-height: 1.7; color: #42516b; }}
      .price-row {{ display: flex; flex-wrap: wrap; align-items: center; gap: 12px; margin: 16px 0 18px; }}
      .price-main {{ font-size: 1.7rem; font-weight: 800; color: #0f172a; }}
      .price-old {{ color: #8a94a6; text-decoration: line-through; }}
      .rating {{ color: #f59e0b; font-weight: 700; }}
      .card {{ background: white; border-radius: 18px; border: 1px solid #e5ebf5; padding: 20px; }}
      .image {{ width: 100%; border-radius: 16px; background: #eef4ff; display: block; }}
      .btn-row {{ display: flex; flex-wrap: wrap; gap: 12px; margin-top: 18px; }}
      .btn {{ display: inline-block; padding: 12px 16px; border-radius: 999px; font-weight: 700; }}
      .btn-primary {{ background: #1d4ed8; color: white; }}
      .btn-secondary {{ background: #eef4ff; color: #1d4ed8; }}
      .grid {{ display: grid; gap: 20px; margin-top: 24px; grid-template-columns: 1fr 1fr; }}
      .section {{ background: white; border: 1px solid #e5ebf5; border-radius: 20px; padding: 22px; }}
      .section h2 {{ margin-top: 0; font-size: 1.24rem; }}
      ul {{ padding-left: 18px; line-height: 1.8; color: #304357; }}
      .benefits {{ display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 14px; }}
      .benefit-card {{ background: #f8fbff; border: 1px solid #e5ebf5; border-radius: 14px; padding: 14px; }}
      .benefit-card h3 {{ margin: 0 0 8px; font-size: 1rem; }}
      .benefit-card p {{ margin: 0; color: #5b6b80; line-height: 1.6; }}
      .faq-item {{ border-top: 1px solid #e5ebf5; padding: 12px 0; }}
      .faq-item:first-child {{ border-top: 0; padding-top: 0; }}
      footer {{ margin-top: 24px; color: #64748b; font-size: 0.94rem; text-align: center; }}
      @media (max-width: 880px) {{ .hero, .grid, .benefits {{ grid-template-columns: 1fr; }} }}
    </style>
  </head>
  <body>
    <div class="page">
      <section class="hero">
        <div>
          <div class="eyebrow">Aiva Wellness · Premium Formula</div>
          <h1>{escape(product['name'])}</h1>
          <p class="sub">{escape(product['short_desc'])}</p>
          <div class="price-row">
            <span class="price-main">₹{product['price']:,}</span>
            <span class="price-old">₹{product['old_price']:,}</span>
            <span class="rating">★★★★★ {product['rating']} ({product['reviews']} reviews)</span>
          </div>
          <div class="btn-row">
            <a class="btn btn-primary" href="/shop.html">Buy Now</a>
            <a class="btn btn-secondary" href="/contact.html">Talk to us</a>
          </div>
        </div>
        <div class="card">
          <img class="image" src="{product['image']}" alt="{escape(product['name'])}" />
        </div>
      </section>

      <div class="grid">
        <section class="section">
          <h2>Why choose this product</h2>
          <p class="sub">{escape(product['description'])}</p>
          <ul>{feature_items}</ul>
        </section>
        <section class="section">
          <h2>How to use</h2>
          <p class="sub">{escape(product['usage'])}</p>
          <p class="sub">For best results, pair it with a balanced diet, hydration, and a consistent daily routine.</p>
        </section>
      </div>

      <section class="section" style="margin-top: 24px;">
        <h2>Key benefits</h2>
        <div class="benefits">{benefit_items}</div>
      </section>

      <section class="section" style="margin-top: 24px;">
        <h2>Frequently asked questions</h2>
        {faq_items}
      </section>

      <footer>
        Aiva Wellness · Solan, Himachal Pradesh · info@aivawellness.in · +91 78077 51710
      </footer>
    </div>
  </body>
</html>
'''
    (out_dir / product['slug']).write_text(html, encoding='utf-8')

print(f"Created {len(products)} product pages")
