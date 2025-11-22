```markdown
# Lyric Spell Checker (Starter)

This is a starter Next.js + Tailwind project built as a Lyric Spell Checker tailored for songwriters and worship leaders.

Features:
- Korean + English support.
- "Vibe" rule: preserve poetic/stylized expressions; only correct fatal typos that change meaning.
- Legacy protection: if input matches known hymns, preserve original verbatim.
- UI: clean text editor and side-by-side original vs corrected annotated view.
- Bilingual analysis output: Korean first, English second.

How to run:
1. npm install
2. npm run dev
3. Open http://localhost:3000

Notes & next steps:
- The built-in wordlist is intentionally tiny for clarity. Replace EN_WORDS with a comprehensive dictionary or connect to an external spellcheck engine (e.g., nspell with dictionaries or a lightweight spellcheck API) for production.
- For Korean grammar/spelling checks, integrate a proper Korean morphological/spellcheck engine (like the kakao/kiwi or open-source Korean spellcheck resources).
- Consider optionally allowing "aggressive correctness" mode vs "songwriter safe" mode in the UI.
- Add keyboard shortcuts, autosave drafts, and an export (copy corrected text / export with annotations).
```