const products = [{name: "stuff"}]
const product = products[0]

// truthy - values that resolve to true in a boolean context
// falsy  - values that resolve to false in a boolean context
// falsy values - false, 0, empty string, null, undefined, NaN


if (product) {
    console.log("Product found")
} else {
    console.log("Product not found")
}