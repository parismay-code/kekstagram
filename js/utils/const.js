export const COMMENT_TEMPLATE = () => document.querySelector('#comments'),
  PICTURE_TEMPLATE = () => document.querySelector('#picture'),
  UPLOAD_FORM_ELEMENT = () => document.querySelector('#upload-select-image'),
  UPLOAD_FORM_PREVIEW_ELEMENT = () => document.querySelector('.img-upload__preview'),
  UPLOAD_FORM_OVERLAY_ELEMENT = () => document.querySelector('.img-upload__overlay'),
  UPLOAD_FILE_ELEMENT = () => document.querySelector('#upload-file'),
  UPLOAD_CANCEL_ELEMENT = () => document.querySelector('#upload-cancel'),
  EFFECTS_PREVIEW_ELEMENTS = () => document.querySelectorAll('.effects__preview'),
  SCALE_VALUE_ELEMENT = () => document.querySelector('.scale__control--value'),
  HASHTAGS_ELEMENT = () => document.querySelector('.text__hashtags'),
  DESCRIPTION_ELEMENT = () => document.querySelector('.text__description'),
  EFFECT_LEVEL_ELEMENT = () => document.querySelector('.effect-level'),
  EFFECT_SLIDER_ELEMENT = () => document.querySelector('.effect-level__slider'),
  EFFECT_LEVEL_VALUE_ELEMENT = () => document.querySelector('.effect-level__value'),
  EFFECT_FILTER_RADIOS = () => document.querySelectorAll('.effects__radio'),
  EFFECT_SCALE_CONTROL_BIGGER_ELEMENT = () => document.querySelector('.scale__control--bigger'),
  EFFECT_SCALE_CONTROL_SMALLER_ELEMENT = () => document.querySelector('.scale__control--smaller'),
  IMAGE_FILTERS_ELEMENT = () => document.querySelector('.img-filters'),
  BIG_PICTURE_ELEMENT = () => document.querySelector('.big-picture'),
  BIG_PICTURE_IMG_ELEMENT = () => document.querySelector('.big-picture__img'),
  BIG_PICTURE_LIKES_COUNT_ELEMENT = () => document.querySelector('.likes-count'),
  BIG_PICTURE_COMMENTS_COUNT_ELEMENT = () => document.querySelector('.comments-count'),
  BIG_PICTURE_DESCRIPTION_ELEMENT = () => document.querySelector('.social__caption'),
  BIG_PICTURE_CANCEL_ELEMENT = () => document.querySelector('.big-picture__cancel'),
  COMMENTS_ELEMENT = () => document.querySelector('.social__comments'),
  COMMENTS_COUNT_ELEMENT = () => document.querySelector('.social__comment-count'),
  COMMENTS_LOADER_ELEMENT = () => document.querySelector('.comments-loader'),
  PICTURES_ELEMENT = () => document.querySelector('.pictures'),
  PICTURE_ELEMENTS = () => document.querySelectorAll('.picture'),
  ALERT_ELEMENT = () => document.querySelector('.alert'),
  ALERT_MESSAGE_ELEMENT = () => document.querySelector('.alert__message'),
  ALERT_TITLE_ELEMENT = () => document.querySelector('.alert__title'),
  IMG_SORT_TYPE_ELEMENTS = () => document.querySelectorAll('.img-filters__button'),
  IMG_SORT_TYPE_ACTIVE_ELEMENT = () => document.querySelector('.img-filters__button--active'),
  EFFECTS_FILTERS = {
    'chrome': {
      min: 0,
      max: 1,
      current: 1,
      step: 0.1,
      filter: (value) => `grayscale(${value})`,
    },
    'sepia': {
      min: 0,
      max: 1,
      current: 1,
      step: 0.1,
      filter: (value) => `sepia(${value})`,
    },
    'marvin': {
      min: 0,
      max: 100,
      current: 100,
      step: 1,
      filter: (value) => `invert(${value}%)`,
    },
    'phobos': {
      min: 0,
      max: 3,
      current: 3,
      step: 0.1,
      filter: (value) => `blur(${value}px)`,
    },
    'heat': {
      min: 0,
      max: 3,
      current: 3,
      step: 0.1,
      filter: (value) => `brightness(${value})`,
    },
  },
  IMAGE_SCALE_MIN = 25,
  IMAGE_SCALE_MAX = 100,
  IMAGE_SCALE_STEP = 25,
  HASHTAG_REGEX = /^#[a-zа-яё0-9]{1,19}$/i,
  API_URI = 'https://28.javascript.pages.academy/kekstagram',
  FILE_TYPES = ['jpg', 'jpeg', 'png'],
  RANDOM_POSTS_MAX = 10,
  TIMEOUT_DELAY = 500;
