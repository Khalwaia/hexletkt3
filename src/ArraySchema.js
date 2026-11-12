export default class ArraySchema {
  constructor() {
    this.needIntegers = false
    this.customCheck = null
  }

  integers() {
    this.needIntegers = true
    return this
  }

  custom(check) {
    this.customCheck = check
    return this
  }

  isValid(value) {
    if (!Array.isArray(value)) {
      return false
    }

    if (this.needIntegers) {
      if (value.length === 0) {
        return false
      }

      for (const item of value) {
        if (!Number.isInteger(item)) {
          return false
        }
      }
    }

    if (this.customCheck) {
      for (const item of value) {
        if (!this.customCheck(item)) {
          return false
        }
      }
    }

    return true
  }
}
