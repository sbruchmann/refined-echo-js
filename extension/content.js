/*globals detectPage*/
"use strict";

const wrapChildren = ($node, className) => {
	$node.innerHTML = `<div class="${className}">${$node.innerHTML}</div>`;
};

const improveNewslistItem = ($item) => {
	const $address = $item.querySelector("address");
	$address.textContent = $address.textContent.slice(3);
};

document.addEventListener("DOMContentLoaded", () => {
	const classList = document.documentElement.classList;

	wrapChildren(document.querySelector(".container > header"), "rejs-wrapper");

	if (detectPage.isNewsList()) {
		classList.add("is-newslist");
		document
				.querySelectorAll("#newslist article")
				.forEach(improveNewslistItem);
	}
});
