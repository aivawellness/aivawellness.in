from pathlib import Path

root = Path(r'd:\Bussiness Data\coding ground\aivawellness.in')
snippet = '''    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-7JEHMZBFMB"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-7JEHMZBFMB");
    </script>'''

added = []
already = []

for path in sorted(root.rglob('*.html')):
    text = path.read_text(encoding='utf-8')
    if 'googletagmanager.com/gtag/js?id=G-7JEHMZBFMB' in text and 'gtag("config", "G-7JEHMZBFMB")' in text:
        already.append(path.relative_to(root).as_posix())
    elif '</head>' in text:
        text = text.replace('</head>', snippet + '\n    </head>', 1)
        path.write_text(text, encoding='utf-8')
        added.append(path.relative_to(root).as_posix())

print('ADDED:')
for item in added:
    print(item)
print('---')
print('ALREADY_PRESENT:')
for item in already:
    print(item)
