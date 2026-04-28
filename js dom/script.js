// 1. QUERY SELECTION
const title = document.querySelector('#main-title');
const description = document.querySelector('.text-muted');
const logo = document.getElementById('logo');
const attrBtn = document.getElementById('btn-attr');
const hoverZone = document.getElementById('hover-zone');
const addBtn = document.getElementById('btn-add');
const itemList = document.getElementById('item-list');
const form = document.getElementById('sample-form');
// 2. CHANGING CONTENT
title.innerText = "DOM";
description.innerHTML = "The <strong>content</strong> has been updated via JS.";
// 3. CHANGING ATTRIBUTES & STYLES
attrBtn.addEventListener('click', () => {
    // Change Attribute
    logo.setAttribute('src', 'https://picsum.photos/100');
    logo.setAttribute('alt', 'Random Image');  
    // Change Style directly
    title.style.color = '#0d6efd';
    title.style.textTransform = 'uppercase';
});
// 4. HANDLING EVENTS (Click, Hover, Submit)
// Hover (Mouse Over / Mouse Out)
hoverZone.addEventListener('mouseover', () => {
    hoverZone.classList.add('highlight');
    hoverZone.textContent = "You're hovering!";
});
hoverZone.addEventListener('mouseout', () => {
    hoverZone.classList.remove('highlight');
    hoverZone.textContent = "Hover over me!";
});
// Submit Event
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevents page refresh
    const val = document.getElementById('user-input').value;
    alert(`Form submitted with: ${val}`);
    form.reset();
});
// 5. CREATING, ADDING, AND REMOVING ELEMENTS
addBtn.addEventListener('click', () => {
    // Create element
    const newItem = document.createElement('li');
    // Add Bootstrap classes
    newItem.className = "list-group-item d-flex justify-content-between align-items-center animate__animated animate__fadeIn";
    // Set content
    newItem.innerHTML = `
        New Item @ ${new Date().toLocaleTimeString()}
        <button class="btn btn-danger btn-sm remove-btn">X</button>
    `;
    // Append to list
    itemList.appendChild(newItem);
});
// Removing Elements (using Event Delegation)
itemList.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-btn')) {
        const itemToRemove = e.target.parentElement;
        itemToRemove.remove();
    }
});