const menu = document.querySelector("#menu");
const nav = document.querySelector("#nav");

menu.addEventListener("click", () => {
	menu.classList.toggle("fa-times");
	nav.classList.toggle("toggle");
});

window.addEventListener("scroll", () => {
	menu.classList.remove("fa-times");
	nav.classList.remove("toggle");
});
