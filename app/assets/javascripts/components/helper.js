export function floatToSGD(amount) {
  var options = { style: "currency", currency: "SGD" }
  return amount.toLocaleString("en-SG", options)
}