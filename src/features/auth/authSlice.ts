import { createApi } from "@reduxjs/toolkit/query/react"
import { CustomAxiosResponse } from "../../common/constan"
import axiosBaseQuery from "../../lib/axiosRTK"
import { loadingStateType } from "../../types/initLoadingState.type"

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
interface AuthState extends loadingStateType {
    user: UserResponse | null
    token: string | null
}

const initialState: AuthState = {
    loading: false,
    error: null,
    user: null,
    token: null,
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