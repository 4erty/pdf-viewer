/**
 * End to end tests to brochure
 */
'use strict';
const path = require('path');
const puppeteer = require('puppeteer');
const express = require('express');
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const config = require(path.resolve('./webpack.config.js'));

const app = express();
const compiler = webpack(config);
const timeout = 50000;
let browser;
let page;

// const for brochure options in index.html;
const paginationMax = 10;

app.use(middleware(compiler, { publicPath: config.output.publicPath }));
app.use('/brochure', express.static(path.join(__dirname, '../brochure')));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!\n');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

describe('on Brochure loaded', () => {
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 80,
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    page.setViewport({ width: 800, height: 600 });
  });

  afterAll(() => {
    browser.close();
  });

  test(`load ${paginationMax} pages`, async () => {
    await page.waitForSelector(`[data-pagenum="${paginationMax - 1}"] > canvas`);
  }, timeout);

  test('after pagination right click - display 2 pages with className === "brochure-page"', async () => {
    await page.click('.pagination-right');
    const pages = await page.$$eval('.brochure-page', pageNodes => {
      return pageNodes.filter(page => page.style.display === 'flex').map(page => page.className);
    });
    expect(pages).toHaveLength(2);
    expect(pages[0]).toBe('brochure-page');
    expect(pages[1]).toBe('brochure-page');
  }, timeout);


  test('after click on last pagination number and then left - correct displaying pagination', async () => {
    const max = paginationMax - 2;
    let buttons = await page.$$eval('.pagination', pageNodes => {
      return pageNodes.map(page => page.getAttribute('data-page'));
    });
    buttons = buttons.filter(index => index === '1' || index > buttons.length - max);
    const lastButton = await page.$$eval('.pagination-display', pageNodes => pageNodes[pageNodes.length - 1].getAttribute('data-page'));
    await page.click(`[data-page="${lastButton}"]`);
    const lastPage = await page.$$eval('.brochure-page', pageNodes => {
      return pageNodes.filter(page => page.style.display === 'flex').map(page => page.className)[0];
    });

    expect(lastPage).toContain('brochure-lastpage');
    await page.click('.pagination-left');
    const newButtons = await page.$$eval('.pagination-display', pageNodes => pageNodes.map(page => page.getAttribute('data-page')));
    expect(newButtons).toEqual(buttons);
  }, timeout);

  test('flip pages', async () => {
    await page.mouse.move(100, 100);
    await page.mouse.down();
    await page.mouse.move(126, 19);
    await page.mouse.up();
  });
});
