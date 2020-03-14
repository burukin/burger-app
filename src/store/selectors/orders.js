import { createSelector } from "reselect";

const shopItemsSelector = state => state.order;

export const getOrders = createSelector(
  shopItemsSelector,
  state => state.orders
);
