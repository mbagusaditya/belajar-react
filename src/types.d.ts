export type User = {
  name: string;
  email: string;
  street: string;
  city: string;
  age?: number | undefined;
};

export type Post = {
  title: string;
  body: string;
};
