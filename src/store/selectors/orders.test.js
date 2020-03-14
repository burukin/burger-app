import { getOrders } from "./orders";

describe("getOrders selector", () => {
  const orders = [{ order: "order1" }, { order: "order2" }];

  it("returns the array of orders", () => {
    expect(getOrders({ order: { orders } })).toEqual(orders);
  });
});
