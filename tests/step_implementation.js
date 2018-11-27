/* globals gauge*/
"use strict";
const { click, openBrowser, write, closeBrowser, goto, press,text, contains } = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() == 'true' ? true : false;

beforeSuite(async () => openBrowser({ headless: headless }));

afterSuite(async () => closeBrowser());

step("Goto Google's search page", async () => goto('http://google.com'));

step("Search for <query>", async (query) => {
    await write(query);
    await press('Enter');
})

step("Page contains <content>", async (content) => {
    assert.equal('Exists', (await text(contains(content)).exists()).description);
});


