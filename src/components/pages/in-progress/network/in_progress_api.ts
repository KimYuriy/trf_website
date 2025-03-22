import { BaseApi } from "@/components/network/base_api";

export class InProgressApi extends BaseApi {
  getText = async (): Promise<string> => (
    await this.axiosInstance.get(this.path)
  ).data;
}