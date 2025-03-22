import axios from "axios";
import ipAddress from "@/components/network/server_ip_address";

const axiosApiInstance = axios.create({
  baseURL: ipAddress
});

export default axiosApiInstance;