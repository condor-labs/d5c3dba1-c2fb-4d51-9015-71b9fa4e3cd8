const {
  SELECTORS: {
    MAIN_WIDGET,
    MAIN_WIDGET_HEADQUARTER,
    MAIN_WIDGET_ICON,
    MAIN_WIDGET_TEMPERATURE,
    MAIN_WIDGET_HUMIDITY,
    MAIN_WIDGET_WIND,
    CAROUSEL_WIDGET,
    CAROUSEL_WIDGET_ITEM,
    FAVORITES_WIDGET,
    FAVORITES_WIDGET_CARD,
    FAVORITES_WIDGET_CARD_NAME,
    SUGGESTS_WIDGET,
    SUGGESTS_WIDGET_NAME,
    SUGGESTS_WIDGET_ICON,
    SUGGESTS_WIDGET_TEMPERATURE,
    SUGGESTS_WIDGET_HUMIDITY,
    SUGGESTS_WIDGET_WIND,
    SUGGESTS_WIDGET_DAY,
    CITIES_WIDGET,
    CITIES_WIDGET_CARD
  }
} = require('../constants');

const validateMainWidget = async ({ page }) => {
  try {
    await page.waitForSelector(MAIN_WIDGET);
    await page.waitFor(1500);
    return true;
  } catch (error) {
    console.log('Error', error);
    return false;
  }
};

const validateHeadquarterOnMainWidget = async ({ page }) => {
  await page.waitForSelector(MAIN_WIDGET_HEADQUARTER);
  await page.waitFor(1500);
  const widget = await page.$eval(
    MAIN_WIDGET_HEADQUARTER,
    (el) => el.innerText
  );

  return widget;
};

const validateIconOnMainWidget = async ({ page }) => {
  try {
    await page.waitForSelector(MAIN_WIDGET_ICON);
    await page.waitFor(1500);
    return true;
  } catch (error) {
    console.log('Error', error);
    return false;
  }
};

const validateTemperatureOnMainWidget = async ({ page }) => {
  await page.waitForSelector(MAIN_WIDGET_TEMPERATURE);
  await page.waitFor(1500);

  const widget = await page.$eval(
    MAIN_WIDGET_TEMPERATURE,
    (el) => el.innerText
  );

  return widget;
};

const validateHumidityOnMainWidget = async ({ page }) => {
  await page.waitForSelector(MAIN_WIDGET_HUMIDITY);
  await page.waitFor(1500);

  const widget = await page.$eval(MAIN_WIDGET_HUMIDITY, (el) => el.innerText);

  return widget;
};

const validateWindOnMainWidget = async ({ page }) => {
  await page.waitForSelector(MAIN_WIDGET_WIND);
  await page.waitFor(1500);

  const widget = await page.$eval(MAIN_WIDGET_WIND, (el) => el.innerText);

  return widget;
};

const validateCarouselWidget = async ({ page }) => {
  await page.waitForSelector(CAROUSEL_WIDGET);
  await page.waitFor(1500);

  const widget = await page.$eval(CAROUSEL_WIDGET, (el) => el.textContent);

  return widget;
};

const validateItemsOnWidgetCarousel = async ({ page }) => {
  await page.waitForSelector(CAROUSEL_WIDGET_ITEM);
  await page.waitFor(1500);

  const widget = await page.$eval(CAROUSEL_WIDGET_ITEM, () =>
    Array.from(
      document.querySelectorAll('#widget-carousel .widget-carousel-item'),
      (el) => el.textContent
    )
  );

  return widget;
};

const validateTempItemOnWidgetCarousel = async ({ page }) => {
  await page.waitForSelector(CAROUSEL_WIDGET_ITEM);
  await page.waitFor(1500);

  const widget = await page.$eval(CAROUSEL_WIDGET_ITEM, () =>
    Array.from(
      document.querySelectorAll(
        '#widget-carousel .widget-carousel-item .widget-temperature'
      ),
      (el) => el.textContent
    )
  );

  return widget;
};

const validateHumidityItemOnWidgetCarousel = async ({ page }) => {
  await page.waitForSelector(CAROUSEL_WIDGET_ITEM);
  await page.waitFor(1500);

  const widget = await page.$eval(CAROUSEL_WIDGET_ITEM, () =>
    Array.from(
      document.querySelectorAll(
        '#widget-carousel .widget-carousel-item .widget-humidity'
      ),
      (el) => el.textContent
    )
  );

  return widget;
};

const validateWindItemOnWidgetCarousel = async ({ page }) => {
  await page.waitForSelector(CAROUSEL_WIDGET_ITEM);
  await page.waitFor(1500);

  const widget = await page.$eval(CAROUSEL_WIDGET_ITEM, () =>
    Array.from(
      document.querySelectorAll(
        '#widget-carousel .widget-carousel-item .widget-wind'
      ),
      (el) => el.textContent
    )
  );

  return widget;
};

const validateFavoritesWidget = async ({ page }) => {
  try {
    await page.waitForSelector(FAVORITES_WIDGET);
    await page.waitFor(1500);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const validateItemsOnFavoritesWidget = async ({ page }) => {
  await page.waitForSelector(FAVORITES_WIDGET_CARD);
  await page.waitFor(1500);

  const widget = await page.$eval(FAVORITES_WIDGET_CARD, () =>
    Array.from(
      document.querySelectorAll('#widget-favorite .widget-card'),
      (el) => el.textContent
    )
  );

  return widget;
};

const validateItemsByNameOnFavoritesWidget = async ({ page }) => {
  await page.waitForSelector(FAVORITES_WIDGET_CARD_NAME);
  await page.waitFor(1500);

  const widget = await page.$eval(FAVORITES_WIDGET_CARD_NAME, () =>
    Array.from(
      document.querySelectorAll(
        '#widget-favorite .widget-card .widget-headquarter-name'
      ),
      (el) => el.textContent
    )
  );

  return widget;
};

const validateItemsByTempOnFavoritesWidget = async ({ page }) => {
  await page.waitForSelector(FAVORITES_WIDGET_CARD);
  await page.waitFor(1500);

  const widget = await page.$eval(FAVORITES_WIDGET_CARD, () =>
    Array.from(
      document.querySelectorAll(
        '#widget-favorite .widget-card .widget-temperature'
      ),
      (el) => el.textContent
    )
  );

  return widget;
};

const validateItemsByHumidityOnFavoritesWidget = async ({ page }) => {
  await page.waitForSelector(FAVORITES_WIDGET_CARD);
  await page.waitFor(1500);

  const widget = await page.$eval(FAVORITES_WIDGET_CARD, () =>
    Array.from(
      document.querySelectorAll(
        '#widget-favorite .widget-card .widget-humidity'
      ),
      (el) => el.textContent
    )
  );

  return widget;
};

const validateItemsByWindOnFavoritesWidget = async ({ page }) => {
  await page.waitForSelector(FAVORITES_WIDGET_CARD);
  await page.waitFor(1500);

  const widget = await page.$eval(FAVORITES_WIDGET_CARD, () =>
    Array.from(
      document.querySelectorAll('#widget-favorite .widget-card .widget-wind'),
      (el) => el.textContent
    )
  );

  return widget;
};

const validateItemsByIconOnFavoritesWidget = async ({ page }) => {
  await page.waitForSelector(FAVORITES_WIDGET_CARD);
  await page.waitFor(1500);

  const widget = await page.$eval(FAVORITES_WIDGET_CARD, () =>
    Array.from(
      document.querySelectorAll('#widget-favorite .widget-card i.widget-icon'),
      () => true
    )
  );

  return widget;
};

const validateSuggestsWidget = async ({ page }) => {
  try {
    await page.waitForSelector(SUGGESTS_WIDGET);
    await page.waitFor(1500);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const validateIconOnSuggestsWidget = async ({ page }) => {
  try {
    await page.waitForSelector(SUGGESTS_WIDGET_ICON);
    await page.waitFor(1500);

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const validateHeadquarterOnSuggestsWidget = async ({ page }) => {
  await page.waitForSelector(SUGGESTS_WIDGET_NAME);
  await page.waitFor(1500);

  const widget = await page.$eval(SUGGESTS_WIDGET_NAME, (el) => el.innerText);

  return widget;
};

const validateTemperatureOnSuggestsWidget = async ({ page }) => {
  await page.waitForSelector(SUGGESTS_WIDGET_TEMPERATURE);
  await page.waitFor(1500);

  const widget = await page.$eval(
    SUGGESTS_WIDGET_TEMPERATURE,
    (el) => el.innerText
  );

  return widget;
};

const validateHumidityOnSuggestsWidget = async ({ page }) => {
  await page.waitForSelector(SUGGESTS_WIDGET_HUMIDITY);
  await page.waitFor(1500);

  const widget = await page.$eval(
    SUGGESTS_WIDGET_HUMIDITY,
    (el) => el.innerText
  );

  return widget;
};

const validateWindOnSuggestsWidget = async ({ page }) => {
  await page.waitForSelector(SUGGESTS_WIDGET_WIND);
  await page.waitFor(1500);

  const widget = await page.$eval(SUGGESTS_WIDGET_WIND, (el) => el.innerText);

  return widget;
};

const validateDayOnSuggestsWidget = async ({ page }) => {
  await page.waitForSelector(SUGGESTS_WIDGET_DAY);
  await page.waitFor(1500);

  const widget = await page.$eval(SUGGESTS_WIDGET_DAY, (el) => el.innerText);

  return widget;
};

const validateCitiesWidget = async ({ page }) => {
  await page.waitForSelector(CITIES_WIDGET);
  await page.waitFor(1500);

  const widget = await page.$eval(CITIES_WIDGET, (el) => el.textContent);

  return widget;
};

const validateListCitiesWidget = async ({ page }) => {
  await page.waitForSelector(CITIES_WIDGET_CARD);
  await page.waitFor(1500);

  const widget = await page.$eval(CITIES_WIDGET_CARD, () =>
    Array.from(
      document.querySelectorAll('#widget-cities .widget-card'),
      (el) => el.textContent
    )
  );

  return widget;
};

const validateListByNameCitiesWidget = async ({ page }) => {
  await page.waitForSelector(CITIES_WIDGET_CARD);
  await page.waitFor(1500);

  const widget = await page.$eval(CITIES_WIDGET_CARD, () =>
    Array.from(
      document.querySelectorAll(
        '#widget-cities .widget-card .widget-city-name'
      ),
      (el) => el.textContent
    )
  );

  return widget;
};

const validateListByAnchorWidgetCity = async ({ page }) => {
  await page.waitForSelector(CITIES_WIDGET_CARD);
  await page.waitFor(1500);

  const widget = await page.$eval(CITIES_WIDGET_CARD, () =>
    Array.from(
      document.querySelectorAll('#widget-cities .widget-card a'),
      (el) => el.textContent
    )
  );

  return widget;
};

module.exports = {
  validateMainWidget,
  validateHeadquarterOnMainWidget,
  validateIconOnMainWidget,
  validateTemperatureOnMainWidget,
  validateHumidityOnMainWidget,
  validateWindOnMainWidget,
  validateCarouselWidget,
  validateItemsOnWidgetCarousel,
  validateTempItemOnWidgetCarousel,
  validateHumidityItemOnWidgetCarousel,
  validateItemsByIconOnFavoritesWidget,
  validateWindItemOnWidgetCarousel,
  validateFavoritesWidget,
  validateItemsOnFavoritesWidget,
  validateItemsByNameOnFavoritesWidget,
  validateItemsByTempOnFavoritesWidget,
  validateItemsByHumidityOnFavoritesWidget,
  validateItemsByWindOnFavoritesWidget,
  validateSuggestsWidget,
  validateIconOnSuggestsWidget,
  validateHeadquarterOnSuggestsWidget,
  validateTemperatureOnSuggestsWidget,
  validateHumidityOnSuggestsWidget,
  validateWindOnSuggestsWidget,
  validateDayOnSuggestsWidget,
  validateCitiesWidget,
  validateListCitiesWidget,
  validateListByNameCitiesWidget,
  validateListByAnchorWidgetCity
};
