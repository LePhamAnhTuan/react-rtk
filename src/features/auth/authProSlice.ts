import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

type Post = {
    title: string,
}
type LoginResponse = {
    email: string
}
const authProSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080' }),
    tagTypes: ['Post', 'UNAUTHORIZED', 'UNKNOWN_ERROR'],
    endpoints: (build) => ({
        postById: build.query<Post, number>({
            query: (id) => `post/${id}`,
            providesTags: (result, error, id) =>
                result
                    ? [{ type: 'Post', id }]
                    : error?.status === 401
                        ? ['UNAUTHORIZED']
                        : ['UNKNOWN_ERROR'],
        }),
        login: build.mutation<LoginResponse, void>({
            query: () => '/auth/login',
            // on successful login, will refetch all currently
            // 'UNAUTHORIZED' queries
            invalidatesTags: (result) => (result ? ['UNAUTHORIZED'] : []),
        }),
        refetchErroredQueries: build.mutation<null, void>({
            queryFn: () => ({ data: null }),
            invalidatesTags: ['UNKNOWN_ERROR'],
        }),
    }),
})

export default authProSlice