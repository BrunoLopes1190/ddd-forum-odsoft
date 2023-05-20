import { AxiosResponse } from "axios";

import { AEndpoint } from "./abstracts/AEndpoint";
 
export default class Posts extends AEndpoint {
  constructor() {
    super("/posts", "posts");
  }

  public async getPopularPosts(): Promise<AxiosResponse> {
    return this.restClient.sendGet({ route: "/popular" });
  }
}
