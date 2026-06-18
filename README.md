# Enigma — an interactive cipher tutorial

A self-contained, scroll-driven tutorial that builds the WWII Enigma machine one cipher at a
time — Caesar → substitution → frequency analysis → Vigenère → one rotor → three rotors →
reflector → plugboard → the key-space → a full working Enigma → and how it was broken.

It's a single HTML file. **Nothing to install.**

**▶ Live demo: https://nickcrawleyau.github.io/enigma-cipher-tutorial/**

## How to open it (the easy way)

1. Download/unzip the files.
2. **Double-click `index.html`.** It opens in your web browser. That's it.

> Tip: be connected to the internet the first time so the fonts load and it looks its best.
> Offline still works — it just falls back to standard system fonts.

## Put it online so anyone can use it (free, no install)

GitHub Pages turns this repo into a public web page with a shareable link:

1. Push this folder to a GitHub repository.
2. On GitHub: **Settings → Pages → Build and deployment → Source: "Deploy from a branch"**,
   pick branch `main` and folder `/ (root)`, then **Save**.
3. After a minute your site is live at
   `https://<your-username>.github.io/<repo-name>/` — send that link to anyone.

## What's inside

| File | What it is |
|------|------------|
| `index.html` | The entire app — HTML, CSS and JavaScript in one file. This is all you need. |
| `_preview_server.js` | Optional. A tiny local web server (`node _preview_server.js`, then open `http://localhost:8131`). Not required — double-clicking `index.html` is enough. |

## The interactive sections

Caesar wheel · substitution scrambler · frequency analysis · Vigenère · a single rotor · three
rotors stepping · the reflector signal path · the plugboard · the full key count · **a complete
working Enigma** (choose rotors, set positions, patch the plugboard, type) · and the
WETTERBERICHT "crib" that helped break it.

The cipher engine is historically accurate — real rotor wirings, correct stepping including the
middle-rotor double-step quirk — verified against the canonical test vector `AAAAA → BDZGO` and
against reciprocity (the same settings decrypt their own output).

## Credit

This is an independent re-implementation, built to learn from the wonderful original
[**enigma.rory.codes**](https://enigma.rory.codes/) by **Rory Flint**. The original tutorial,
its prose and its visual design are his work; the explanatory text here is rewritten, and the
code is an independent build.
