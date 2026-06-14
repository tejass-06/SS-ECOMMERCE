import generateOrderId from '../utils/generateOrderId';

const STORAGE_KEY = 'orders';

export const getOrders = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

export const createOrder = async (data) => {
  const order = {
    id: generateOrderId(),
    status: 'Order Placed',
    createdAt: new Date().toISOString(),
    ...data,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify([order, ...getOrders()]));

  return {
    success: true,
    orderId: order.id,
    data: order,
  };
};
