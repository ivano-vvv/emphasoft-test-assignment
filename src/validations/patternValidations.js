export function usernamePatternValidate(value) {
  return value && !/^[\w.@+-]+$/.test(value)
    ? "Недопустимые символы"
    : undefined;
}

export function passwordPatternValidate(value) {
  return value && !/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(value)
    ? "Мин. 8 знаков, первый — заглавная, посл. — цифра"
    : undefined;
}
