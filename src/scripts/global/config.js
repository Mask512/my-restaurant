const DAY_IN_SECONDS = 24 * 60 * 60;

const CONFIG = {
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  BASE_IMAGE_URL: 'https://restaurant-api.dicoding.dev/images/',
  DATABASE_NAME: 'my-restaurant',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurant',
  CACHE_EXPIRATION_TIME: 7 * DAY_IN_SECONDS,
  CACHE_MAX_ENTRIES: 40,
};

export default CONFIG;
