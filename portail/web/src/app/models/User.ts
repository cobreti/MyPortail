export class User {
  protected _username: string;
  protected _id: string;

  constructor(
    id: string,
    username: string
  ) {
    this._username = username;
    this._id = id;
  }

  public get username() : string {
    return this._username;
  }

  public get id() : string {
    return this._id;
  }
}

