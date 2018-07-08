export namespace api {
  export class Login {
    public username : string;
    public password : string;

    constructor(name: string, password: string) {
      this.username = name;
      this.password = password;
    }
  }
}
