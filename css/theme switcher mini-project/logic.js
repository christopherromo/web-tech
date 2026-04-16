/**
 * logic.js
 *
 * handles theme switcher logic.
 *
 * author: christopher romo
 * created: 2026-04-15
 */

function changeTheme(theme) {
  const themes = ["dark", "tropical"];
  const validThemes = ["light", ...themes];

  if (!validThemes.includes(theme)) {
    console.error(`${theme} is not a valid theme.`);
    return;
  }

  document.body.classList.remove(...themes);

  if (theme !== "light") {
    document.body.classList.add(theme);
  }
}
