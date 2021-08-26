import axios, { AxiosResponse } from "axios";

import { config } from "../constants";

export const getData = async (): Promise<AxiosResponse> =>
    await axios.get(`${config.url.API_URL}/days`);
