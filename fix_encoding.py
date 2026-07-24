#!/usr/bin/env python
# -*- coding: utf-8 -*-
import os

file_path = 'contact.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace corrupted characters
content = content.replace('â€"', '–')  # corrupted dash to proper dash
content = content.replace('â€"', '–')  # another variant
content = content.replace('âœ¨', '✨')  # corrupted star emoji

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print('✅ Fixed encoding issues in contact.html')
