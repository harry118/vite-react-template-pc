import request from '@utils/request';

export interface IRoleItem {
  id: string;
  name: string;
  code: string;
  status: 0 | 1;
  desc?: string;
}

export const queryRoleList = () => {
  return request<IRoleItem[]>({
    url: '/apis/role/list',
    method: 'get',
  });
};
