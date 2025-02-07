export type User = {
  id: string;
  email: string;
  name: string;
};

export type UserSignIn = {
  email: User["email"];
  password: string;
};

export type UserSignUp = {
  email: User["email"];
  password: string;
  name: User["name"];
};
