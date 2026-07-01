/**
 * theme.js
 *
 * handles shared page color logic.
 *
 * author: christopher romo
 * created: 2026-07-01
 */

const pageColors = [
  "blueviolet",
  "#303030",
  "midnightblue",
  "dodgerblue",
  "skyblue",
  "lightgreen",
  "pink",
  "orange",
];

let pageColor = Number(localStorage.getItem("pageColor"));

if (
  !Number.isInteger(pageColor) ||
  pageColor < 0 ||
  pageColor >= pageColors.length
) {
  pageColor = 0;
}

function applySavedPageColor() {
  document.body.style.backgroundColor = pageColors[pageColor];
}

function handleServerHeaderClick() {
  pageColor++;
  if (pageColor >= pageColors.length) {
    pageColor = 0;
  }

  document.body.style.backgroundColor = pageColors[pageColor];
  localStorage.setItem("pageColor", pageColor);
}
