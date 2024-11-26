document.getElementById('admin-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Fetch input values
    const name = document.getElementById('product-name').value;
    const price = document.getElementById('product-price').value;
    const description = document.getElementById('product-description').value;
    const imageUrl = document.getElementById('product-image').value;

    // Create a product card
    const productCard = document.createElement('div');
    productCard.className = 'product';
    productCard.innerHTML = `
        <img src="${imageUrl}" alt="${name}">
        <h3>${name}</h3>
        <p>$${price}</p>
        <p>${description}</p>
    `;

    // Append to product grid
    document.getElementById('product-list').appendChild(productCard);

    // Clear form
    document.getElementById('admin-form').reset();
});
document.addEventListener("DOMContentLoaded", () => {
    const adminLink = document.getElementById("admin-link");
    const adminSection = document.getElementById("admin");

    // Hide the admin section by default
    adminSection.style.display = "none";

    // Add click event listener to the Admin link
    adminLink.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent the default jump to the section

        // Prompt for the password
        const accessPassword = prompt("Enter the admin password to access this section:");
        
        // Check if the password is correct
        if (accessPassword === "AicheQ05592024") {
            adminSection.style.display = "block"; // Show admin section
            adminSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to admin section
        } else {
            alert("Access denied. Incorrect password.");
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const adminLink = document.getElementById("admin-link");
    const adminSection = document.getElementById("admin");
    const adminForm = document.getElementById("admin-form");
    const contactForm = document.getElementById("contact-update-form");

    // Hide the admin section by default
    adminSection.style.display = "none";

    // Add click event listener to the Admin link
    adminLink.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent the default jump to the section

        // Prompt for the password
        const accessPassword = prompt("Enter the admin password to access this section:");
        
        // Check if the password is correct
        if (accessPassword === "AicheQ05592024") {
            // Show the admin section and forms
            adminSection.style.display = "block";
            adminForm.style.display = "block";
            contactForm.style.display = "block";  // Show the contact info form
            adminSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to admin section
        } else {
            alert("Access denied. Incorrect password.");
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const adminLink = document.getElementById("admin-link");
    const adminSection = document.getElementById("admin");
    const adminForm = document.getElementById("admin-form");
    const contactForm = document.getElementById("contact-update-form");
    const productList = document.getElementById("product-list");
    const managerContact = document.getElementById("manager-contact");

    // Hide admin section initially
    adminSection.style.display = "none";

    // Admin login
    adminLink.addEventListener("click", (event) => {
        event.preventDefault();

        const password = prompt("Enter admin password:");
        if (password === "AicheQ05592024") {
            adminSection.style.display = "block";
            adminForm.style.display = "block";
            contactForm.style.display = "block";
            adminSection.scrollIntoView({ behavior: "smooth" });
        } else {
            alert("Incorrect password. Access denied.");
        }
    });

    // Add product dynamically
    adminForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const productName = document.getElementById("product-name").value;
        const productPrice = document.getElementById("product-price").value;
        const productDescription = document.getElementById("product-description").value;
        const productImage = document.getElementById("product-image").value;

        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
            <img src="${productImage}" alt="${productName}">
            <h3>${productName}</h3>
            <p>${productDescription}</p>
            <p><strong>Price:</strong> ${productPrice}</p>
        `;

        productList.appendChild(productCard);

        // Clear form fields
        adminForm.reset();
    });

    // Update contact information dynamically
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const managerName = document.getElementById("manager-name").value;
        const managerEmail = document.getElementById("manager-email").value;
        const managerPhone = document.getElementById("manager-phone").value;

        document.getElementById("contact-name").textContent = managerName;
        document.getElementById("contact-email").textContent = managerEmail;
        document.getElementById("contact-phone").textContent = managerPhone;

        alert("Contact information updated successfully!");

        // Clear form fields (if needed)
        contactForm.reset();
    });
});

