// JavaScript to handle adding products and displaying them

// Check for admin password and show admin form
document.getElementById('admin-link').addEventListener('click', function(event) {
    event.preventDefault();
    const password = prompt("Enter admin password:");
    if (password === "AicheQ05592024") {
        document.getElementById('admin-form').style.display = 'block';
    } else {
        alert("Incorrect password.");
    }
});

// Handle adding products to the product list
document.getElementById('admin-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.getElementById('product-name').value;
    const productPrice = document.getElementById('product-price').value;
    const productDescription = document.getElementById('product-description').value;
    const productImage = document.getElementById('product-image').value;

    if (productName && productPrice && productDescription && productImage) {
        const productList = document.getElementById('product-list');
        
        // Create product card
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        // Add product image
        const productImg = document.createElement('img');
        productImg.src = productImage;
        productCard.appendChild(productImg);
        
        // Add product name
        const productNameElement = document.createElement('h3');
        productNameElement.textContent = productName;
        productCard.appendChild(productNameElement);
        
        // Add product price
        const productPriceElement = document.createElement('p');
        productPriceElement.textContent = `Price: $${productPrice}`;
        productCard.appendChild(productPriceElement);
        
        // Add product description
        const productDescriptionElement = document.createElement('p');
        productDescriptionElement.textContent = productDescription;
        productCard.appendChild(productDescriptionElement);
        
        // Append the product card to the product list
        productList.appendChild(productCard);
        
        // Clear the form
        document.getElementById('product-name').value = '';
        document.getElementById('product-price').value = '';
        document.getElementById('product-description').value = '';
        document.getElementById('product-image').value = '';
    } else {
        alert("Please fill out all fields.");
    }
});
