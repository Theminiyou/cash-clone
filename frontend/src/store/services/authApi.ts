import { LoginResponse, LoginUserForm } from '../types';
import { api } from './api';

export const authApi = api.injectEndpoints({
  overrideExisting: true,

  endpoints: (builder) => ({
    // send login code to user's email
    requestLoginCode: builder.mutation<void, LoginUserForm>({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body,
      }),
    }),

    // login with phone/email + login code
    loginPhoneOrEmail: builder.mutation<LoginResponse, LoginUserForm>({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const { useRequestLoginCodeMutation, useLoginPhoneOrEmailMutation } =
  authApi;
