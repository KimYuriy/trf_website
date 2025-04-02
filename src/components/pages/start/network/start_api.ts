import { BaseApi } from "@/components/network/base_api";
import type { ILoading } from "@/components/pages/start/model/start_data";

export class LoadingApi extends BaseApi {
  getStatus = async (): Promise<ILoading> => (
    await this.axiosInstance.get(this.path)
  ).data;
}