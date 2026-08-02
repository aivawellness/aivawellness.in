from pathlib import Path
import re

root = Path(r'd:\Bussiness Data\coding ground\aivawellness.in')
files = sorted(root.rglob('*.html'))

# Remove any GA4 placeholder/example block using G-XXXXXXXXXX.
placeholder_block_re = re.compile(
    r'''(?is)<!--\s*Google Analytics 4 \(GA4\).*?--><?\s*<script async src="https://www\.googletagmanager\.com/gtag/js\?id=G-XXXXXXXXXX"></script>\s*<script>\s*window\.dataLayer = window\.dataLayer \|\| \[\];\s*function gtag\(\) \{\s*dataLayer\.push\(arguments\);\s*\}\s*gtag\("js", new Date\(\)\);\s*gtag\("config", "G-XXXXXXXXXX"\);\s*</script>''',
    re.I | re.S,
)

# Remove any existing GA4 block using G-7JEHMZBFMB as well so we can reinsert a single canonical block.
ga4_block_re = re.compile(
    r'''(?is)<!--\s*Google tag \(gtag\.js\)\s*-->\s*<script async src="https://www\.googletagmanager\.com/gtag/js\?id=G-[^\"]+"></script>\s*<script>\s*window\.dataLayer = window\.dataLayer \|\| \[\];\s*function gtag\(\) \{\s*dataLayer\.push\(arguments\);\s*\}\s*gtag\("js", new Date\(\)\);\s*gtag\("config", "G-[^\"]+"\);\s*</script>''',
    re.I | re.S,
)

canonical_snippet = '''    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-7JEHMZBFMB"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-7JEHMZBFMB");
    </script>'''

for path in files:
    text = path.read_text(encoding='utf-8')
    text = placeholder_block_re.sub('', text)
    text = ga4_block_re.sub('', text)
    text = text.replace('G-XXXXXXXXXX', '')

    if '</head>' in text:
        if 'googletagmanager.com/gtag/js?id=G-7JEHMZBFMB' not in text and 'gtag("config", "G-7JEHMZBFMB")' not in text:
            text = text.replace('</head>', canonical_snippet + '\n</head>', 1)
        else:
            # If there is a GA4 implementation already, ensure one canonical block exists before closing head.
            text = ga4_block_re.sub('', text)
            text = text.replace('</head>', canonical_snippet + '\n</head>', 1)

    path.write_text(text, encoding='utf-8')
