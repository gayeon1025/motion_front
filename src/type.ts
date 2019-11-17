import { AxiosResponse } from "axios";

export type APIReturnType = Promise<AxiosResponse<any> | undefined>;