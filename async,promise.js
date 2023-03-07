async function fetchProducts() {
    try {
      const response = await fetch('C:\Users\Admin\Desktop\js\products.json');
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      console.log(data[0].name);
    }
    catch (error) {
      console.error(`Could not get products: ${error}`);
    }
  }
  
  fetchProducts();
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

console.log(fetchPromise);
console.log("Started request…");
fetchPromise.then((response) => {
  console.log(`Received response: ${response.status}`);
});


function alarm(person,delay) {
  return new Promise((resolve, reject) => {
    if (delay< 0) {
      throw new Error('Alarm delay must not be negative');
    }
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    },delay);
  });
}
alarm("janu",1000)