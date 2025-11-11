function showHamburgerMenu() {
  const hamburgerMenu = document.querySelector(".hamburger-menu-window");
  const hamburgerSVG = document.querySelector(".hamburger-icon");

  const isOpen = hamburgerMenu.classList.toggle(
    "hamburger-menu-window-visibility"
  );

  // tranzicija za dugme hamburger
  hamburgerSVG.classList.toggle("active", isOpen);

  if (isOpen) {
    hamburgerSVG.innerHTML = `
      <path d="M6 6L18 18" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
      <path d="M6 18L18 6" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
    `;
  } else {
    hamburgerSVG.innerHTML = `
      <path d="M20 7L4 7" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
      <path d="M20 12L4 12" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
      <path d="M20 17L4 17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
    `;
  }
}
