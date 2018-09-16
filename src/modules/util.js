'use strict';

export function tryNumber(value) {
  const result = Number(value);
  return isNaN(result) ? null : result;
}

export function nullOr(value, defaultValue) {
  return value !== null ? value : defaultValue;
}

export function unsetOr(value, defaultValue) {
  return value !== null && value !== undefined ? value : defaultValue;
}
