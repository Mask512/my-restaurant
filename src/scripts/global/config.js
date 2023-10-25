const DAY_IN_SECONDS = 24 * 60 * 60;

const CONFIG = {
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  BASE_IMAGE_URL: 'https://restaurant-api.dicoding.dev/images/',
  CACHE_EXPIRATION_TIME: 365 * DAY_IN_SECONDS,
  CACHE_MAX_ENTRIES: 100,
  DATABASE_NAME: 'my-restaurant',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurant',
};

export default CONFIG;
