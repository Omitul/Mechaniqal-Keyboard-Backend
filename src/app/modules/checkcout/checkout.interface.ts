export type Tcheckout = {
  name: string;
  email: string;
  address: string;
  payment: {
    type: string;
    enum: ['Bank Transfer', 'Credit Card', 'Paypal', 'Bkash', 'Nagad'];
  };
  productIdAndQuantity: {
    productId: string;
    quantity: number;
  }[];
};
