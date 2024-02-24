import { createApi } from "@reduxjs/toolkit/query/react"
import axiosBaseQuery from "../../lib/axiosRTK"
import { CustomAxiosResponse } from "../types/typeAxios";

export type User = {
    email: string | null;
    password: string | null;
}
interface UserResponse {
    age: null
    avatar: null
    createdAt: Date
    email: string
    id: string
    isRemove: boolean
    name: string
    role: string
    themeUser: any
    updatedAt: Date
}
interface LoginResponse {

    user: UserResponse
    backendTokens: {
        accessToken: string
        refreshToken: string
    }

}




const authSlice = createApi({
    baseQuery: axiosBaseQuery({
        baseUrl: 'http://localhost:8080',
    }),
    reducerPath: "auth-login",
    tagTypes: ['auth-login'],
    endpoints(build) {

        return {
            getLogin: build.query<LoginResponse, User>({
                query: (dataUser: User) => ({ url: '/auth/login', method: 'POST', data: dataUser }),
                transformResponse: (response: CustomAxiosResponse) => response.content,
            }),
            updateLogin: build.mutation<LoginResponse, User>({
                query: (dataUser: User) => ({ url: '/auth/login', method: 'post', data: dataUser }),
                transformResponse: (response: CustomAxiosResponse) => response.content,


            }),


        }
    },


})

export default authSlice
export const { useGetLoginQuery, useUpdateLoginMutation } = authSlice