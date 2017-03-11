/*globals detectPage*/
"use strict";

const wrapChildren = ($node, className) => {
	$node.innerHTML = `<div class="${className}">${$node.innerHTML}</div>`;
};

const improveNewslistItem = ($item) => {
	const $meta = document.createElement("div");
	$meta.classList.add("meta");

	const $address = $item.querySelector("address");
	$address.textContent = $address.textContent.slice(3);

	const upvotes = $item.querySelector(".upvotes").textContent;
	const downvotes = $item.querySelector(".downvotes").textContent;
	const score = parseInt(upvotes, 10) - parseInt(downvotes, 10);
	const $score = document.createElement("span");
	const suffix = (score !== -1 && score !== 1) ? "s" : "";
	$score.classList.add("score");
	$score.textContent = `${score} point${suffix}`;
	$score.title = `${upvotes} up, ${downvotes} down`;
	$meta.appendChild($score);

	const authorName = $item.querySelector("username").textContent;
	const $author = document.createElement("a");
	$author.classList.add("author");
	$author.href = `/user/${authorName}`;
	$author.textContent = authorName;
	$meta.appendChild($author);

	const timeAgo = $item.textContent.match(/\d+ (second|minute|hour|day)s? ago/)[0];
	if (timeAgo) {
		const $timeAgo = document.createElement("span");
		$timeAgo.classList.add("timeAgo");
		$timeAgo.textContent = timeAgo;
		$meta.appendChild($timeAgo);
	}

	const $comments = $item.querySelector("p > a").cloneNode(true);
	$comments.classList.add("comments");
	$meta.appendChild($comments);

	const $originalMeta = $item.querySelector("p");
	$item.replaceChild($meta, $originalMeta);
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
