  export const ValidateEmail = (email: string) =>  {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(re.test(email));
    if (email.length) {
      if (re.test(email)) {
        return false
      }
      else {
        return true
      }
    }
    return false
  };

  export const ValidateName = (name:string) => {
    if (name.length) {
      if (name.length > 5) {
        return false
      } else {
        return true
      }
    }
    return false
  }