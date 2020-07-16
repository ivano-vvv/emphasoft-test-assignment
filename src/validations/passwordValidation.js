export function hasCapLetter(value) {
  return value && !/^(?=.*[A-Z]).*$/.test(value)
    ? "Мин. 1 заглавная"
    : undefined;
}

export function hasDigit(value) {
  return value && !/^(?=.*\d).*$/.test(value) ? "Мин. 1 цифра" : undefined;
}
