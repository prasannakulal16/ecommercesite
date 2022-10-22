import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"


export const productApi = createApi ({
    reducerPath : "productApi",
    baseQuery :fetchBaseQuery({baseUrl:"https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/"}),
    endpoints:(builder)=>({
        getAllProducts :builder.query({
            query:()=> "shopping-cart/catalogue.json",
        }),
    }),
})

export const {useGetAllProductsQuery} = productApi