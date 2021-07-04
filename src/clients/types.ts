export type User = {
  id: number;
  login: string;
}

export type Repository = {
  id: number;
  owner: User;
  name: string;
  description: string;
  // eslint-disable-next-line camelcase
  stargazers_count: number;
}
