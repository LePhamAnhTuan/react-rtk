import { createApi } from "@reduxjs/toolkit/query/react"
import axiosBaseQuery from "../../lib/axiosRTK"
import { CustomAxiosResponse } from "../types/typeAxios"

const helloSlice = createApi({
    baseQuery: axiosBaseQuery({
        baseUrl: 'http://localhost:8080',
    }),
    reducerPath: "helloApi1",
    tagTypes: ["Hello"],
    endpoints(build) {

        return {
            getHello: build.query({
                query: () => ({ url: '/auth/hello', method: 'get' }),
                transformResponse: (response: CustomAxiosResponse) => response.content
            }),
            // mutation: build.mutation({
            //     query: () => ({ url: '/mutation', method: 'post' }),
            // }),

        }
    },

})

export default helloSlice
export const { useGetHelloQuery, } = helloSlice