import type { Axios } from "axios";
import axiosApiInstance from "@/components/network/axios_api_instance";

export class BaseApi {
  constructor(path: string, axiosInstance = axiosApiInstance) {
    this.path = path;
    this.axiosInstance = axiosInstance;
  }

  path: string;

  axiosInstance: Axios;
}