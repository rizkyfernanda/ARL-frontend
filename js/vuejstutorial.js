import { required, minLength, between }

export default {
  // Omitted
  data() {
    return {
      email: "",
      password: "",
      repeatPassword: "",
      firstName: "",
      lastName: ""
    };
  },
  validations: {
    email: {
      required,
      email
    },
    firstName: {
      required
    },
    lastName: {
      required
    },
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      required,
      minLength: minLength(6),
      sameAsPassword: sameAs("password")
    }
  }
};