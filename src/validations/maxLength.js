function maxLength(n, value) {
  return value && value.length > n ? `Не более ${n} символов` : undefined;
}

export const maxLength30 = (value) => maxLength(30, value);
export const maxLength150 = (value) => maxLength(150, value);
export const maxLength128 = (value) => maxLength(128, value);
