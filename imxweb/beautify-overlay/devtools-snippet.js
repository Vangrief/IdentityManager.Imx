/* ====================================================================
   DevTools-Snippet: Beautify Overlay einschalten / ausschalten
   --------------------------------------------------------------------
   So benutzen:
     1. App im Browser öffnen (z. B. http://localhost:4200 oder IIS)
     2. F12  →  Tab "Sources"  →  links "Snippets"  →  "+ New snippet"
     3. Den KOMPLETTEN Inhalt dieser Datei in das Snippet kopieren
     4. Strg+Enter (oder Rechtsklick → Run)
     5. Nochmal ausführen = schaltet das Overlay wieder aus (Toggle)
   ==================================================================== */

(() => {
  const ID = 'beautify-overlay-style';
  const existing = document.getElementById(ID);
  if (existing) {
    existing.remove();
    console.log('%c[beautify-overlay] OFF', 'color:#ef4e3a;font-weight:bold');
    return;
  }

  const css = String.raw`
:root {
  --bo-radius-sm: 8px;
  --bo-radius-md: 12px;
  --bo-radius-lg: 18px;
  --bo-radius-pill: 999px;
  --bo-shadow-xs: 0 1px 2px rgba(15, 23, 42, 0.06);
  --bo-shadow-sm: 0 2px 6px rgba(15, 23, 42, 0.08), 0 1px 2px rgba(15, 23, 42, 0.04);
  --bo-shadow-md: 0 8px 24px rgba(15, 23, 42, 0.10), 0 2px 6px rgba(15, 23, 42, 0.05);
  --bo-shadow-lg: 0 20px 48px rgba(15, 23, 42, 0.14), 0 6px 16px rgba(15, 23, 42, 0.06);
  --bo-shadow-ring: 0 0 0 3px rgba(99, 102, 241, 0.18);
  --bo-grad-primary: linear-gradient(135deg, #ff7a18 0%, #ef4e3a 100%);
  --bo-grad-accent:  linear-gradient(135deg, #6366f1 0%, #8b5cf6 55%, #ec4899 100%);
  --bo-grad-surface: linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.65) 100%);
  --bo-grad-backdrop: radial-gradient(1200px 600px at 0% -10%, rgba(99,102,241,0.10), transparent 60%),
                     radial-gradient(900px 500px at 100% 0%, rgba(236,72,153,0.08), transparent 55%);
  --bo-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --bo-dur-fast: 140ms;
  --bo-dur: 220ms;
  --bo-dur-slow: 420ms;
  --bo-border: rgba(15, 23, 42, 0.08);
  --bo-border-strong: rgba(15, 23, 42, 0.14);
  --bo-surface: #ffffff;
  --bo-surface-muted: #f7f8fb;
  --bo-text: #0f172a;
  --bo-text-muted: #64748b;
}
.eui-dark-theme, .dark-theme, [data-theme='dark'] {
  --bo-surface: #171a21;
  --bo-surface-muted: #1f232c;
  --bo-text: #e6e8ee;
  --bo-text-muted: #9aa3b2;
  --bo-border: rgba(255, 255, 255, 0.08);
  --bo-border-strong: rgba(255, 255, 255, 0.16);
  --bo-grad-surface: linear-gradient(180deg, rgba(30,33,42,0.9) 0%, rgba(23,26,33,0.75) 100%);
  --bo-shadow-md: 0 8px 24px rgba(0,0,0,0.45), 0 2px 6px rgba(0,0,0,0.35);
  --bo-shadow-lg: 0 20px 48px rgba(0,0,0,0.55), 0 6px 16px rgba(0,0,0,0.35);
}
html, body {
  font-feature-settings: "cv02", "cv03", "cv04", "ss01";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  letter-spacing: 0.005em;
}
body { background-image: var(--bo-grad-backdrop); background-attachment: fixed; }
h1, h2, h3, .mat-headline-1, .mat-headline-2, .mat-headline-3,
.mat-h1, .mat-h2, .mat-h3 { letter-spacing: -0.015em; font-weight: 600; }
a { transition: color var(--bo-dur) var(--bo-ease); }
* { scrollbar-width: thin; scrollbar-color: rgba(100, 116, 139, 0.45) transparent; }
*::-webkit-scrollbar { width: 10px; height: 10px; }
*::-webkit-scrollbar-track { background: transparent; }
*::-webkit-scrollbar-thumb {
  background: rgba(100, 116, 139, 0.35);
  border-radius: var(--bo-radius-pill);
  border: 2px solid transparent;
  background-clip: padding-box;
  transition: background var(--bo-dur) var(--bo-ease);
}
*::-webkit-scrollbar-thumb:hover { background: rgba(100, 116, 139, 0.6); background-clip: padding-box; }
.mat-mdc-button, .mat-mdc-raised-button, .mat-mdc-outlined-button,
.mat-mdc-unelevated-button, .mat-mdc-flat-button, button.mat-button-base,
.eui-button, button.eui-button {
  border-radius: var(--bo-radius-pill) !important;
  letter-spacing: 0.02em !important;
  font-weight: 600 !important;
  transition: transform var(--bo-dur) var(--bo-ease),
              box-shadow var(--bo-dur) var(--bo-ease),
              background var(--bo-dur) var(--bo-ease) !important;
  will-change: transform;
}
.mat-mdc-raised-button, .mat-mdc-unelevated-button, .mat-mdc-flat-button {
  box-shadow: var(--bo-shadow-sm) !important;
}
.mat-mdc-raised-button:hover, .mat-mdc-unelevated-button:hover,
.mat-mdc-flat-button:hover, .eui-button:not([disabled]):hover {
  transform: translateY(-1px); box-shadow: var(--bo-shadow-md) !important;
}
.mat-mdc-raised-button:active, .mat-mdc-unelevated-button:active,
.mat-mdc-flat-button:active, .eui-button:not([disabled]):active {
  transform: translateY(0); box-shadow: var(--bo-shadow-xs) !important;
}
.mat-mdc-raised-button.mat-primary, .mat-mdc-unelevated-button.mat-primary,
.mat-mdc-flat-button.mat-primary, .eui-button--primary {
  background-image: var(--bo-grad-primary) !important;
  color: #fff !important; border: none !important;
}
.mat-mdc-icon-button {
  border-radius: var(--bo-radius-pill) !important;
  transition: background var(--bo-dur) var(--bo-ease), transform var(--bo-dur) var(--bo-ease) !important;
}
.mat-mdc-icon-button:hover { transform: scale(1.06); }
.mat-mdc-card, .eui-card, mat-card {
  border-radius: var(--bo-radius-lg) !important;
  border: 1px solid var(--bo-border) !important;
  box-shadow: var(--bo-shadow-sm) !important;
  background: var(--bo-grad-surface) !important;
  backdrop-filter: saturate(140%) blur(6px);
  -webkit-backdrop-filter: saturate(140%) blur(6px);
  transition: box-shadow var(--bo-dur) var(--bo-ease),
              transform var(--bo-dur) var(--bo-ease),
              border-color var(--bo-dur) var(--bo-ease) !important;
}
.mat-mdc-card:hover, .eui-card:hover, mat-card:hover {
  box-shadow: var(--bo-shadow-md) !important;
  border-color: var(--bo-border-strong) !important;
}
.eui-tile, .eui-billboard {
  border-radius: var(--bo-radius-lg) !important; overflow: hidden;
  transition: transform var(--bo-dur) var(--bo-ease), box-shadow var(--bo-dur) var(--bo-ease) !important;
}
.eui-tile:hover, .eui-billboard:hover {
  transform: translateY(-2px); box-shadow: var(--bo-shadow-lg) !important;
}
.mat-mdc-form-field {
  --mdc-outlined-text-field-container-shape: 10px;
  --mdc-filled-text-field-container-shape: 10px 10px 0 0;
}
.mat-mdc-text-field-wrapper {
  border-radius: var(--bo-radius-md) !important;
  transition: background var(--bo-dur) var(--bo-ease), box-shadow var(--bo-dur) var(--bo-ease) !important;
}
.mat-mdc-form-field.mat-focused .mat-mdc-text-field-wrapper { box-shadow: var(--bo-shadow-ring) !important; }
input, textarea, select {
  transition: box-shadow var(--bo-dur) var(--bo-ease),
              border-color var(--bo-dur) var(--bo-ease) !important;
}
.eui-input, .eui-select, input.eui-input { border-radius: var(--bo-radius-md) !important; }
.mat-mdc-checkbox .mdc-checkbox__background, .mdc-checkbox__background {
  border-radius: 6px !important;
  transition: background var(--bo-dur) var(--bo-ease), border-color var(--bo-dur) var(--bo-ease) !important;
}
.mat-mdc-tab-header, .mat-mdc-tab-nav-bar { border-bottom: 1px solid var(--bo-border) !important; }
.mat-mdc-tab .mdc-tab-indicator__content--underline, .mdc-tab-indicator__content--underline {
  border-radius: 3px 3px 0 0 !important; border-top-width: 3px !important;
}
.mat-toolbar, .mat-mdc-toolbar, .eui-top-navigation, .eui-page-header {
  box-shadow: var(--bo-shadow-sm) !important;
  border-bottom: 1px solid var(--bo-border) !important;
  backdrop-filter: saturate(160%) blur(8px);
  -webkit-backdrop-filter: saturate(160%) blur(8px);
}
.mat-drawer, .mat-sidenav, .eui-sidesheet {
  border-right: 1px solid var(--bo-border) !important;
  box-shadow: var(--bo-shadow-md) !important;
}
.eui-sidesheet a, .eui-sidesheet .nav-item, .mat-mdc-list-item {
  border-radius: var(--bo-radius-md) !important;
  transition: background var(--bo-dur) var(--bo-ease), color var(--bo-dur) var(--bo-ease) !important;
}
.mat-mdc-list-item:hover { background: color-mix(in srgb, currentColor 6%, transparent) !important; }
.mat-mdc-dialog-surface, .cdk-dialog-container, .eui-dialog {
  border-radius: var(--bo-radius-lg) !important;
  box-shadow: var(--bo-shadow-lg) !important; overflow: hidden;
}
.mat-mdc-menu-panel, .mat-mdc-autocomplete-panel, .mat-mdc-select-panel {
  border-radius: var(--bo-radius-md) !important;
  box-shadow: var(--bo-shadow-md) !important;
  border: 1px solid var(--bo-border) !important; overflow: hidden;
}
.mat-mdc-menu-item, .mat-mdc-option {
  transition: background var(--bo-dur-fast) var(--bo-ease) !important;
}
.mat-mdc-tooltip .mdc-tooltip__surface, .mdc-tooltip__surface {
  border-radius: var(--bo-radius-sm) !important;
  padding: 6px 10px !important; font-size: 12px !important;
  box-shadow: var(--bo-shadow-sm) !important;
}
.cdk-overlay-dark-backdrop {
  background: rgba(15, 23, 42, 0.45) !important;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
}
.mat-mdc-table, table.mat-mdc-table {
  border-radius: var(--bo-radius-md) !important; overflow: hidden;
  box-shadow: var(--bo-shadow-xs) !important;
  border: 1px solid var(--bo-border) !important;
}
.mat-mdc-header-row, .mat-mdc-header-cell {
  background: var(--bo-surface-muted) !important;
  font-weight: 600 !important;
  letter-spacing: 0.03em; text-transform: uppercase; font-size: 12px !important;
}
.mat-mdc-row { transition: background var(--bo-dur-fast) var(--bo-ease) !important; }
.mat-mdc-row:hover { background: color-mix(in srgb, currentColor 4%, transparent) !important; }
.mat-mdc-chip, .eui-badge {
  border-radius: var(--bo-radius-pill) !important;
  font-weight: 500 !important; letter-spacing: 0.01em;
  transition: transform var(--bo-dur-fast) var(--bo-ease), box-shadow var(--bo-dur-fast) var(--bo-ease) !important;
}
.mat-mdc-chip:hover { transform: translateY(-1px); box-shadow: var(--bo-shadow-xs) !important; }
.mat-mdc-progress-bar, .mdc-linear-progress {
  border-radius: var(--bo-radius-pill) !important; overflow: hidden; height: 6px !important;
}
.mdc-linear-progress__bar-inner { border-radius: var(--bo-radius-pill) !important; }
.mat-mdc-progress-spinner circle, .mdc-circular-progress__indeterminate-circle-graphic {
  stroke-linecap: round !important;
}
.mat-mdc-snack-bar-container .mdc-snackbar__surface {
  border-radius: var(--bo-radius-md) !important;
  box-shadow: var(--bo-shadow-lg) !important;
}
:focus-visible {
  outline: none;
  box-shadow: var(--bo-shadow-ring) !important;
  border-radius: var(--bo-radius-sm);
}
@keyframes bo-fade-in {
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
}
.mat-mdc-dialog-surface, .mat-mdc-menu-panel, .mat-mdc-autocomplete-panel,
.mat-mdc-select-panel, .mat-mdc-snack-bar-container, .eui-dialog {
  animation: bo-fade-in var(--bo-dur-slow) var(--bo-ease);
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
}
img, svg { -webkit-user-drag: none; user-select: none; }
hr, .mat-divider { border-color: var(--bo-border) !important; opacity: 0.8; }
code, kbd, samp, pre {
  font-feature-settings: "ss01", "ss02", "cv05", "cv11";
  background: var(--bo-surface-muted);
  padding: 0.1em 0.35em;
  border-radius: 6px;
}
`;

  const style = document.createElement('style');
  style.id = ID;
  style.textContent = css;
  document.head.appendChild(style);

  console.log(
    '%c[beautify-overlay] ON %c — Snippet nochmal laufen lassen zum Ausschalten',
    'color:#fff;background:linear-gradient(135deg,#ff7a18,#ef4e3a);padding:2px 8px;border-radius:4px;font-weight:bold',
    'color:#64748b'
  );
})();
