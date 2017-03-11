import test from "ava";
import Window from "./fixtures/window";

global.window = new Window();
global.location = window.location;

require("../extension/detect-page");

const { detectPage } = window;

function urlMatcherMacro(t, detectFn, shouldMatch = [], shouldNotMatch = []) {
	for (const url of shouldMatch) {
		location.href = url;
		t.true(detectFn(url));
	}

	for (const url of shouldNotMatch) {
		location.href = url;
		t.false(detectFn(url));
	}
}

test("isNewsList", urlMatcherMacro, detectPage.isNewsList, [
	"http://www.echojs.com/",
	"http://www.echojs.com/latest/0",
	"http://www.echojs.com/latest/30",
	"http://www.echojs.com/usernews/sbruchmann/0"
], [
	"http://www.echojs.com/news/22168",
	"http://www.echojs.com/replies"
]);
