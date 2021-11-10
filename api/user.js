import baseApi from './base';

export const fetchUsers = (params) => {
  const options = {
    method: 'GET',
    url: '/users',
    data: params,
  };

  return baseApi.request(options);
};

export const createUser = (params) => {
  const options = {
    method: 'POST',
    url: '/users',
    data: params,
  };

  return baseApi.request(options);
};
