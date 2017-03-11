/*globals detectPage*/
"use strict";

document.addEventListener("DOMContentLoaded", () => {
	const classList = document.documentElement.classList;

	if (detectPage.isNewsList()) {
		classList.add("is-newslist");
	}
});
