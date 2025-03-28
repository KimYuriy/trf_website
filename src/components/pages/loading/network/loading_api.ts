import { BaseApi } from "@/components/network/base_api";
import type { ILoading } from "@/components/pages/loading/model/loading_data";

import ipAddress from "@/components/network/server_ip_address";

export class LoadingApi extends BaseApi {
  getStatus = async (): Promise<ILoading> => (
    await this.axiosInstance.get(this.path)
  ).data;

  // getStatus = async (): Promise<ILoading> => {
  //   try {
  //     const response = await fetch(`${ipAddress}${this.path}`, {
  //       mode: 'no-cors',
  //     });
  //     if (!response.ok) {
  //       throw new Error(`Response status: ${response.status}`);
  //     }
  //     const json = await response.json();
  //     return json as ILoading;
  //   } catch (error) {
  //     throw error;
  //   }
  // }
}