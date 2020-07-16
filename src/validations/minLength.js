function minLength(n, value) {
    return value && value.length < n ? `Не менее ${n} символов` : undefined;
  }
  
  export const minLength8 = (value) => minLength(8, value);
  