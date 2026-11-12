export default class NumberSchema {
  isValid(value) {
    return typeof value === 'number'
  }
}
