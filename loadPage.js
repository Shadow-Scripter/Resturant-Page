export function loadPage() {
    const content = document.getElementById('content');

    // Create image element
    const img = document.createElement('img');
    img.src = 'restaurant.jpg';
    img.alt = 'Restaurant Image';
    img.style.maxWidth = '100%';
    img.style.height = 'auto';

    // Create headline element
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Our Restaurant';
    headline.style.margin = '1rem 0';
    headline.style.fontSize = '2.5rem';

    // Create paragraph element
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Come and enjoy a wonderful dining experience at our restaurant. We offer a wide variety of delicious dishes made from the freshest ingredients. Our cozy atmosphere and friendly staff will make you feel right at home.';
    paragraph.style.fontSize = '1.2rem';
    paragraph.style.color = '#666';

    // Append elements to content
    content.appendChild(img);
    content.appendChild(headline);
    content.appendChild(paragraph);
}