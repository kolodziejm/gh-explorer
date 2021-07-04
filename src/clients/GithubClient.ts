import axios, { AxiosInstance } from 'axios';
import qs from 'querystring';
import { Repository, User } from './types';

const GITHUB_API_URL = 'https://api.github.com';

class GithubClient {
  client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: GITHUB_API_URL,
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    });
  }

  async getUsers(username: string): Promise<User[]> {
    const MAX_USER_COUNT = 5;

    const params = qs.stringify({
      q: username,
      per_page: MAX_USER_COUNT,
    });

    const { data } = await this.client.get(`/search/users?${params}`);
    return data.items;
  }

  async getUserRepositories(username: string): Promise<Repository[]> {
    const { data } = await this.client.get(`/users/${username}/repos`);
    return data;
  }
}

export default GithubClient;
