import { apiSlice } from "./apiSlice.js";
import { ORDER_URL, PAYPAL_URL } from "../constant.js";

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order) => ({
        url: ORDER_URL,
        method: "POST",
        body: order,
      }),
    }),
    getOrdersById: builder.query({
      query: (orderId) => ({
        url: `${ORDER_URL}/${orderId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    payOrder: builder.mutation({
      query: ({ orderId, details }) => ({
        url: `${ORDER_URL}/${orderId}/pay`,
        method: "PUT",
        body: { ...details },
      }),
    }),
    getPayPalClientId: builder.query({
      query: () => ({
        url: PAYPAL_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getMyOrders: builder.query({
      query: () => ({
        url: `${ORDER_URL}/mine`,
      }),
      keepUnusedDataFor: 5,
    }),
    getOrders:builder.query({
      query: () => ({
        url: ORDER_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    deliverOrder:builder.mutation({
      query:(orderId) => ({
        url: `${ORDER_URL}/${orderId}/deliver`,
        method:'PUT',
      })
    })
  }),
});

export const {
  useCreateOrderMutation,
  useGetOrdersByIdQuery,
  usePayOrderMutation,
  useGetPayPalClientIdQuery,
  useGetMyOrdersQuery,
  useGetOrdersQuery,
  useDeliverOrderMutation
} = orderApiSlice;
