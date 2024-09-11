// Initialize an empty cart
let cart = [];
    
// Get cart elements
const cartCountElement = document.getElementById('cart-count');
const cartItemsElement = document.getElementById('cart-items');
const cartSection = document.getElementById('cart-section');
const cartLink = document.getElementById('cart-link');

// Function to add a ticket to the cart
function addToCart(ticket) {
    cart.push(ticket);
    updateCartCount();
    updateCartDisplay();
}

// Function to update the cart count display
function updateCartCount() {
    cartCountElement.textContent = cart.length;
}

// Function to update the cart display
function updateCartDisplay() {
    // Clear current cart items
    cartItemsElement.innerHTML = '';

    // Add each item in the cart to the display
    cart.forEach((ticket) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${ticket.name} - ${ticket.date} - ${ticket.price}`;
        cartItemsElement.appendChild(listItem);
    });
}

// Function to create ticket objects
function createTicket(name, date, price) {
    return { name, date, price };
}

// Function to toggle the cart section
function toggleCart() {
    if (cartSection.style.display === 'none' || cartSection.style.display === '') {
        cartSection.style.display = 'block';
    } else {
        cartSection.style.display = 'none';
    }
}

// Function to confirm cart payment
function confirmPayment() {
    if (cart.length > 0) {
        alert(`Terimakasih atas pembelian nya! Kamu membeli ${cart.length} ticket.`);
        cart = []; // Clear the cart after purchase
        updateCartCount();
        updateCartDisplay();
        cartSection.style.display = 'none'; // Hide cart after payment
    } else {
        alert('Your cart is empty.');
    }
}

// Attach event listeners to buy buttons
document.querySelectorAll('.buy-btn').forEach((button, index) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        let ticket;

        switch (index) {
            case 0:
                ticket = createTicket('Konser Malam', 'Jumat, 15 September', 'Rp. 50.000', 'concert.jpeg', 'Concert');
            break;
            case 1:
                ticket = createTicket('Liga Champion', 'Sabtu, 20 September', 'Rp. 75.000', 'championship.jpeg', 'Sports Event');
                break;
            case 2:
                ticket = createTicket('Pertunjukan Teater', 'Minggu, 10 Oktober', 'Rp. 100.000', 'theater.jpeg', 'Theater Show');
                break;
            case 3:
                ticket = createTicket('Pemutaran Film Perdana', 'Kamis, 25 Oktober', 'Rp. 35.000', 'movie.jpeg', 'Movie Premiere');
                break;
            case 4:
                ticket = createTicket('Festival Musik', 'Sabtu, 5 November', 'Rp. 60.000', 'festival.jpeg', 'Music Festival');
                break;
            case 5:
                ticket = createTicket('Pertunjukan Komedi', 'Kamis, 12 November', 'Rp. 40.000', 'comedy.jpeg', 'Comedy Show');
        break;
        }
        addToCart(ticket);
    });
});

// Attach event listener to cart link
cartLink.addEventListener('click', (event) => {
    event.preventDefault();
    toggleCart();
});

// Create a button for confirming payment in the cart section
const confirmButton = document.createElement('button');
confirmButton.textContent = 'Confirm Payment';
confirmButton.style.display = 'block';
confirmButton.style.margin = '15px auto';
confirmButton.style.padding = '10px 20px';
confirmButton.style.backgroundColor = '#007bff';
confirmButton.style.color = 'white';
confirmButton.style.border = 'none';
confirmButton.style.borderRadius = '5px';
confirmButton.style.cursor = 'pointer';
confirmButton.addEventListener('click', confirmPayment);
cartSection.appendChild(confirmButton);

// Initialize cart section as hidden
cartSection.style.display = 'none';