const {webkit, chromium, firefox} = require('playwright');
(async () => {
	for (const browserType of [webkit, firefox, chromium]) {
	
		const browser = await browserType.launch();
		const page = await browser.newPage();
		await page.goto('https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging');
		await page.screenshot({
			path: `screenshot-${browserType.name()}.png`,
		});
		await browser.close();
		console.log('success: ' + browserType.name());
	}
})();
