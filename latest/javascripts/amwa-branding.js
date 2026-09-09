(() => {
  const header = document.querySelector('.md-header__inner') || document.querySelector('header');
  if (!header || header.querySelector('.amwa-header-branding')) return;

  const scriptUrl = document.currentScript && document.currentScript.src;
  const assetUrl = (file) => new URL(`../images/${file}`, scriptUrl || window.location.href).href;
  const branding = document.createElement('div');
  branding.className = 'amwa-header-branding';
  branding.setAttribute('aria-label', 'AMWA branding');

  for (const logo of [{"file": "AMWA-logo.png", "alt": "AMWA logo", "href": "https://www.amwa.tv"}]) {
    const link = document.createElement('a');
    link.href = logo.href;
    link.setAttribute('aria-label', logo.alt);
    const image = document.createElement('img');
    image.src = assetUrl(logo.file);
    image.alt = logo.alt;
    link.appendChild(image);
    branding.appendChild(link);
  }

  header.insertBefore(branding, header.firstChild);
})();
