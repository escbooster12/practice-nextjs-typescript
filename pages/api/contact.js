import baseApi from './base';

export const saveMessage = (params) => {
  const options = {
    method: 'POST',
    url: '/messages',
    data: params,
  };

  return baseApi.request(options);
};
