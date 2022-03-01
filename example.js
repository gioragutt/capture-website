import captureWebsite from "./index.js";

// Run this file with `$ node example.js`

(async () => {
	// await captureWebsite.file('https://sindresorhus.com', 'example.png');
	const mhtml = await captureWebsite.buffer("http://127.0.0.1:4211", {
		clickElement: 'button[data-cy="selectAllButton"]',
		waitForElement: "#graph-container",
		element: "#graph-container",
	});
	console.log(mhtml);
})();
