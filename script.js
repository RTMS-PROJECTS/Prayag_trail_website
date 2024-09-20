// Data for products (this could come from an API or backend)
// Define product data
const products = {
  1: {
      title: 'Basketball',
      description: 'This is a detailed description of BasketBall.'
  },
  2: {
      title: 'Call Of Duty',
      description: 'This is a detailed description of Call of Duty.'
  },
  3: {
      title: 'Racing',
      description: 'This is a detailed description of Racing.'
  },
  4: {
    title: 'FootBall',
    description: 'This is a detailed description of FootBall.'
  },
  5: {
    title: 'valorant',
    description: 'This is a detailed description of Valorant.'
  }
};

// Function to select product and navigate to the product page
function selectProduct(productId) {
  // Store the selected product in localStorage
  localStorage.setItem('selectedProduct', productId);
  // Redirect to the product page
  window.location.href = "product.html";
}

// On the product page, display the correct product data
if (window.location.pathname.includes('product.html')) {
  // Fetch the selected product from localStorage
  const selectedProduct = localStorage.getItem('selectedProduct');

  // Get page elements
  const productTitle = document.getElementById('product-title');
  const productDescription = document.getElementById('product-description');

  // If a product was selected, display its data
  if (selectedProduct && products[selectedProduct]) {
      productTitle.textContent = products[selectedProduct].title;
      productDescription.textContent = products[selectedProduct].description;
  } else {
      productTitle.textContent = 'Product not found';
      productDescription.textContent = 'Please go back and select a valid product.';
  }
}