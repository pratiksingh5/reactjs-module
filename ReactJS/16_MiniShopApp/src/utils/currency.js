export const formatCurrency = (number) => {

 const formatterINR = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  return formatterINR.format(number)
};
