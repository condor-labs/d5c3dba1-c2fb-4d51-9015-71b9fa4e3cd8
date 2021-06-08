const puppeteer = require('puppeteer');
const weatherApp = require('../app/app-functions');
const { config } = require('../config');

let browser, page;

beforeAll(async () => {
  browser = await puppeteer.launch({ headless: true });
});

describe('Weather App', () => {
  it('Page has been deployed on Server', async () => {
    page = await browser.newPage();
    await page.goto(config.url);
  });

  it('Widget-cities has been defined as Widget #5', async () => {
    const dataFound = await weatherApp.validateCitiesWidget({ page });
    expect(dataFound).toBeTruthy();
  });

  it('Widget-card has been defined and exist 3 cities with temperature between 24°C y 30°C on Widget #5', async () => {
    const dataFound = await weatherApp.validateListCitiesWidget({ page });
    expect(dataFound.length).toEqual(3);
  });

  it('Should get 3 cities (Paris, Milan, Washington) with temperature between 24°C y 30°C on Widget #5', async () => {
    const dataFound = await weatherApp.validateListByNameCitiesWidget({ page });
    expect(dataFound[0]).toContain('Paris');
    expect(dataFound[1]).toContain('Milan');
    expect(dataFound[2]).toContain('Washington');
  });

  it('Should get 3 anchor on Widget #5', async () => {
    const dataFound = await weatherApp.validateListByAnchorWidgetCity({ page });
    expect(dataFound.length).toEqual(3);
  });
});
