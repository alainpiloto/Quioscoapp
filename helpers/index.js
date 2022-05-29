const formatMoney = (quantity) => quantity.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
});

export {
  formatMoney,
};
