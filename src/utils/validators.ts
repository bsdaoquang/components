export class Validator {
  static PhoneNumber = (num: string) => {
    var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (num.match(phoneno)) {
      return true;
    } else {
      return false;
    }
  };
}
