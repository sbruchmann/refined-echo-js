window.detectPage = (() => {
	const isNewsList = () => {
		const { pathname } = location;
		return pathname === "/"
				|| /latest\/\d+/.test(pathname)
				|| /usernews/.test(pathname)
				|| /saved\/\d+/.test(pathname);
	};

	return {
		isNewsList
	};
})();
