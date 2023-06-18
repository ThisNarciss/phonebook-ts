export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  name: string;
  email: string;
  password: string;
}

export interface IRegisterFulfilledAction {
  token: null;
  user: {
    name: null;
    email: null;
  };
}

export interface ILoginFulfilledAction {
  token: null;
  user: {
    name: null;
    email: null;
  };
}
