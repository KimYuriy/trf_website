import { BaseApi } from "@/components/network/base_api";
import type { IAllData } from "../model/all_data";

export class HomeApi extends BaseApi {
  getContent = async (): Promise<IAllData> => (
    await this.axiosInstance.get(this.path)
  ).data;
}