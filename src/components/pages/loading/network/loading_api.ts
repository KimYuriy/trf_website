import { BaseApi } from "@/components/network/base_api";

export class LoadingApi extends BaseApi {
  getStatus = async (): Promise<boolean> => (
    await this.axiosInstance.get(this.path)
  ).data;
}