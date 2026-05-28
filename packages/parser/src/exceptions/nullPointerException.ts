export default class NullPointerException extends Error {
  constructor(errorMessage: string) {
    const errorName = "NullPointerException";
    errorMessage = errorName + ": " + errorMessage;
    super(errorMessage);
    this.name = errorName;
    this.message = errorMessage;
  }
}
