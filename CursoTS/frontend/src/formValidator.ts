import validator from "validator";

type Requisition = {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
};
type BodyReq = {
  username: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
  passwordConfirm: FormDataEntryValue | null;
};
type User = {
  username: string;
  email: string;
  password: string;
};
type FormErrors = {
  origin: string;
  message: string;
};

export default class FormValidator {
  req: Requisition | null;
  errors: FormErrors[];
  user: User | null;
  errorClass: string;
  errorDisplay: string;
  form: HTMLFormElement;

  constructor(formClass: string, errorClass: string, errorDisplay: string) {
    (this.req = null),
      (this.errors = []),
      (this.user = null),
      (this.errorClass = errorClass),
      (this.errorDisplay = errorDisplay),
      (this.form = document.querySelector(formClass) as HTMLFormElement);
  }

  public init(): void {
    this.form?.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(this.form);
      const data = this.validate({
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
        passwordConfirm: formData.get("passwordConfirm"),
      });

      if (data) {
        this.req = data;
        this.send();
        return;
      }

      this.cleanErrors();
      this.spreadErrors();
      this.errors = [];
    });
    return;
  }

  public validate(bodyReq: BodyReq): Requisition | null {
    if (
      !bodyReq.username ||
      typeof bodyReq.username !== "string" ||
      50 < bodyReq.username.length ||
      bodyReq.username.length < 3
    ) {
      this.errors.push({
        origin: "name",
        message: "Username must be between 3 and 50 characters.",
      });
    }

    if (
      !bodyReq.email ||
      typeof bodyReq.email !== "string" ||
      !validator.isEmail(bodyReq.email)
    ) {
      this.errors.push({
        origin: "email",
        message: "Invalid email.",
      });
    }

    if (bodyReq.passwordConfirm !== bodyReq.password) {
      this.errors.push({
        origin: "password-confirm",
        message: "Password's fields must be identic.",
      });
    }

    if (
      !bodyReq.password ||
      typeof bodyReq.password !== "string" ||
      validator.isAlphanumeric(bodyReq.password) ||
      30 < bodyReq.password.length ||
      bodyReq.password.length < 8
    ) {
      this.errors.push({
        origin: "password",
        message:
          "Password needs to contain special symbols and must be between 8 and 30 characters.",
      });
    }
    if (this.errors.length > 0) return null;
    return {
      username: bodyReq.username as string,
      email: bodyReq.email as string,
      password: bodyReq.password as string,
      passwordConfirm: bodyReq.passwordConfirm as string,
    };
  }

  public showErrors(query: string, msg: string): void {
    const div = this.form.querySelector(query)?.parentNode as HTMLDivElement;
    div.classList.toggle(this.errorClass, true);

    const errorDisplay = div.querySelector(this.errorDisplay);
    if (errorDisplay) errorDisplay.innerHTML += `${msg}`;
  }

  public cleanErrors(): void {
    this.form
      .querySelectorAll(`.${this.errorClass}`)
      .forEach((element) => element.classList.toggle(this.errorClass, false));

    this.form.querySelectorAll(this.errorDisplay).forEach((element) => {
      element.innerHTML = "";
    });
  }

  private spreadErrors(): void {
    try {
      this.errors.forEach((err) => {
        switch (true) {
          case err.origin === "name":
            this.showErrors("input[name='username']", err.message);
            break;

          case err.origin === "email":
            this.showErrors("input[name='email']", err.message);
            break;

          case err.origin === "password":
            this.showErrors("input[name='password']", err.message);
            break;

          case err.origin === "password-confirm":
            this.showErrors("input[name='password']", err.message);
            this.showErrors("input[name='passwordConfirm']", err.message);
            break;
          default:
            break;
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  public send(): void {
    console.log("form send successfully");
    console.log(this.req);
  }
}
