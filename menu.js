export function loadMenu() {
    const content = document.getElementById('content');

    // Create headline element
    const headline = document.createElement('h1');
    headline.textContent = 'Our Menu';
    headline.style.margin = '1rem 0';
    headline.style.fontSize = '2.5rem';

    // Create paragraph element
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Discover our wide variety of delicious dishes. From appetizers to desserts, we have something for everyone!';
    paragraph.style.fontSize = '1.2rem';
    paragraph.style.color = '#666';

    // Append elements to content
    content.appendChild(headline);
    content.appendChild(paragraph);
}
