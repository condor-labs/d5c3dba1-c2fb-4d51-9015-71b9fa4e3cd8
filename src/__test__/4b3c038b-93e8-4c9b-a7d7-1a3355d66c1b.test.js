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

  it('Widget-carousel has been defined as Widget #2', async () => {
    const dataFound = await weatherApp.validateCarouselWidget({ page });
    expect(dataFound).toBeTruthy();
  });

  it('Widget-carousel-item has been defined and exist 6 items on Widget #2', async () => {
    const dataFound = await weatherApp.validateItemsOnWidgetCarousel({ page });
    expect(dataFound.length).toEqual(6);
  });

  it('Validate day transformed for each item (Thursday, Friday, Saturday, Sunday, Monday, Tuesday) on Widget #2', async () => {
    const dataFound = await weatherApp.validateItemsOnWidgetCarousel({ page });
    expect(dataFound[0]).toContain('Thursday');
    expect(dataFound[1]).toContain('Friday');
    expect(dataFound[2]).toContain('Saturday');
    expect(dataFound[3]).toContain('Sunday');
    expect(dataFound[4]).toContain('Monday');
    expect(dataFound[5]).toContain('Tuesday');
  });

  it('Widget-temperature has been defined in each item and the temperature are correct (27° C, 27° C, 27° C, 26° C, 26° C, 27° C) on Widget #2', async () => {
    const dataFound = await weatherApp.validateTempItemOnWidgetCarousel({
      page
    });
    expect(dataFound[0]).toContain('27° C');
    expect(dataFound[1]).toContain('27° C');
    expect(dataFound[2]).toContain('27° C');
    expect(dataFound[3]).toContain('26° C');
    expect(dataFound[4]).toContain('26° C');
    expect(dataFound[5]).toContain('27° C');
  });

  it('Widget-humidity has been defined in each item and the humidity are correct (86 %, 85 %, 82 %, 84 %, 84 %, 80 %) on Widget #2', async () => {
    const dataFound = await weatherApp.validateHumidityItemOnWidgetCarousel({
      page
    });
    expect(dataFound[0]).toContain('86 %');
    expect(dataFound[1]).toContain('85 %');
    expect(dataFound[2]).toContain('82 %');
    expect(dataFound[3]).toContain('84 %');
    expect(dataFound[4]).toContain('84 %');
    expect(dataFound[5]).toContain('80 %');
  });

  it('Widget-wind has been defined in each item and the wind are correct (2.68 m/s, 3.44 m/s, 4.86 m/s, 3.86 m/s, 2.48 m/s, 2 m/s on Widget #2', async () => {
    const dataFound = await weatherApp.validateWindItemOnWidgetCarousel({
      page
    });
    expect(dataFound[0]).toContain('2.68 m/s');
    expect(dataFound[1]).toContain('3.44 m/s');
    expect(dataFound[2]).toContain('4.86 m/s');
    expect(dataFound[3]).toContain('3.86 m/s');
    expect(dataFound[4]).toContain('2.48 m/s');
    expect(dataFound[5]).toContain('2 m/s');
  });
});
