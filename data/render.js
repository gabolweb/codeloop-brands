/* Shared brand-page scaffolding. Each brand page imports data/brands.js + this file,
   mounts <brand-page data-slug="..."> and the component reads tokens at runtime. */

window.renderBrandPage = function renderBrandPage(slug) {
  const b = window.BRANDS[slug];
  if (!b) {
    document.body.innerHTML = `<pre style="padding:40px;font-family:monospace">Unknown brand: ${slug}</pre>`;
    return;
  }

  // Inject Google Fonts
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `https://fonts.googleapis.com/css2?${b.fontGoogle}&display=swap`;
  document.head.appendChild(link);

  // Inject CSS variables
  const varCss = `
    :root {
      --brand-primary: ${b.colors.primary};
      --brand-primary-ink: ${b.colors.primaryInk};
      --brand-accent: ${b.colors.accent};
      --bg: ${b.colors.bg};
      --bg-alt: ${b.colors.bgAlt};
      --surface: ${b.colors.surface};
      --border: ${b.colors.border};
      --text: ${b.colors.text};
      --text-muted: ${b.colors.textMuted};
      --success: ${b.semantics.success};
      --warning: ${b.semantics.warning};
      --danger: ${b.semantics.danger};
      --info: ${b.semantics.info};
      --r-sm: ${b.radii.sm}px;
      --r-md: ${b.radii.md}px;
      --r-lg: ${b.radii.lg}px;
      --r-xl: ${b.radii.xl}px;
      --font-display: "${b.fonts.display}", serif;
      --font-text: "${b.fonts.text}", sans-serif;
    }
    body { background: var(--bg); color: var(--text); font-family: var(--font-text); }
  `;
  const style = document.createElement("style");
  style.textContent = varCss;
  document.head.appendChild(style);

  document.title = `${b.name} — Brand System`;
};
