export function loadContact() {
    const content = document.getElementById('content');

    // Create headline element
    const headline = document.createElement('h1');
    headline.textContent = 'Contact Us';
    headline.style.margin = '1rem 0';
    headline.style.fontSize = '2.5rem';

    // Create paragraph element
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Reach out to us for reservations, questions, or feedback. We would love to hear from you!';
    paragraph.style.fontSize = '1.2rem';
    paragraph.style.color = '#666';

    // Create contact information
    const contactInfo = document.createElement('p');
    contactInfo.innerHTML = '<strong>Phone:</strong> 123-456-7890<br><strong>Email:</strong> contact@restaurant.com';
    contactInfo.style.fontSize = '1.2rem';
    contactInfo.style.color = '#666';

    // Append elements to content
    content.appendChild(headline);
    content.appendChild(paragraph);
    content.appendChild(contactInfo);
}
