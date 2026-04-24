# Beautify Overlay

Ein reines **Overlay-Stylesheet** — es modifiziert keine bestehenden Dateien, sondern wird zusätzlich geladen und überschreibt selektiv Styles von Angular Material + Elemental UI.

## Was es tut

- Weichere Schatten, größere Radien, modernere Kanten
- Gradient auf Primary-Buttons (orange → rot, passend zur `$corbin-orange-palette`)
- Glas-Effekt (backdrop-filter) auf Cards, Toolbars, Sidenavs
- Schönere Scrollbars
- Hover-/Focus-/Active-Mikroanimationen
- Runde Chips, Pills, Progress-Bars
- A11y: `:focus-visible`-Ring, `prefers-reduced-motion` respektiert
- Dark-Theme-Tokens (`.eui-dark-theme`, `[data-theme='dark']`)

## Einbinden — Variante A: als eigenes Theme (empfohlen)

1. `beautify-overlay.css` in ein ZIP `Html_BeautifyOverlay.zip` packen.
2. `imx-theme-config.json` anlegen, das das bestehende Theme **und** das Overlay listet:

```json
{
  "Themes": [
    {
      "Name": "BeautifiedDefault",
      "DisplayName": "Default (Beautified)",
      "Class": "eui-light-theme",
      "Urls": [
        "../custom-theme/custom-theme.css",
        "../beautify-overlay/beautify-overlay.css"
      ]
    }
  ]
}
```

Reihenfolge ist wichtig: Overlay **nach** dem Basis-Theme laden.

## Einbinden — Variante B: lokal zum Testen

In `imxweb/projects/<app>/src/index.html` (oder über ein Browser-DevTools-Snippet):

```html
<link rel="stylesheet" href="assets/beautify-overlay.css">
```

## Anpassen

Alle Design-Tokens stehen als CSS-Custom-Properties am Anfang der Datei unter `:root` — Radien, Schatten, Gradients, Durations. Einfach dort tweaken, kein Rebuild nötig.
