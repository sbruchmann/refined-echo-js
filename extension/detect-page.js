window.detectPage = (() => {
	const isNewsList = () => {
		const { pathname } = location;
		return pathname === "/"
				|| /latest\/\d+/.test(pathname)
				|| /usernews/.test(pathname);
	};

	return {
		isNewsList
	};
})();
