export interface res {
  access: boolean;
  token: string;
}
export interface query {
  email: string;
  password: string;
}
export interface IUser {
  name: string;
  nickame: string;
  id: number;
  description: string;
  followers: number;
  following: number;
  avatar_url: string;
  back_url: string;
  email: string;
}

export interface IRefreshUser {
  user: IUser;
  token: string;
  signature: string;
  policy: string;
}

export interface Error {}
export interface query1 extends query {
  nickname: string;
}
export interface IsearchRes {
  nickname: string;
  avatar_url: string;
  id: number;
}

export interface IUpdateProfile {
  body: FormData;
}
