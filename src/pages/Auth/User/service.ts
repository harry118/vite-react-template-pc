import { type IApiResponse } from "@/index";
import request from "@utils/request";

export interface IUserItem {
  id: string;
  name: string;
  avatar: string;
  isActive: boolean;
}

export const queryUserList = async (params: any): Promise<any> => {
  return await request<IUserItem[]>({
    url: "/apis/users/list",
    method: "post",
    data: params,
  });
};
