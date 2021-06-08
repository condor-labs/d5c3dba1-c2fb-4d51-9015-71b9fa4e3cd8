'use strict';

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

  it('Widget-header has been defined as Widget #1', async () => {
    const dataFound = await weatherApp.validateMainWidget({ page });
    expect(dataFound).toBeTruthy();
  });

  it('Widget-headquarter has been defined and equal to CARTAGENA on Widget #1', async () => {
    const dataFound = await weatherApp.validateHeadquarterOnMainWidget({
      page
    });
    expect(dataFound).toContain('CARTAGENA');
  });

  it('Widget-icon has been defined on Widget #1', async () => {
    const dataFound = await weatherApp.validateIconOnMainWidget({ page });
    expect(dataFound).toBeTruthy();
  });

  it('Temperature has been defined and equal to 10° C on Widget #1', async () => {
    const dataFound = await weatherApp.validateTemperatureOnMainWidget({
      page
    });
    expect(dataFound).toContain('10° C');
  });

  it('Humidity has been defined and equal to 2 % on Widget #1', async () => {
    const dataFound = await weatherApp.validateHumidityOnMainWidget({ page });
    expect(dataFound).toContain('2 %');
  });

  it('Wind has been defined and equal to 29.3 m/s on Widget #1', async () => {
    const dataFound = await weatherApp.validateWindOnMainWidget({ page });
    expect(dataFound).toContain('29.3 m/s');
  });
});
