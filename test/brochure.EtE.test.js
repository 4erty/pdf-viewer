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

  test('load 10 pages', async () => {
    await page.waitForSelector('[data-pagenum="9"] > canvas');
  }, timeout);

  test('after pagination right click - display 2 pages with className === "brochure-page"', async () => {
    await page.click('.pagination-right');
    const pages = await page.$$eval('.brochure-page', pageNodes => {
      return pageNodes.filter(page => page.style.display === 'flex').map(page => page.className);
    });
    console.log(pages[1]);
    expect(pages).toHaveLength(2);
    expect(pages[0]).toBe('brochure-page');
    expect(pages[1]).toBe('brochure-page');
  }, timeout);
});
