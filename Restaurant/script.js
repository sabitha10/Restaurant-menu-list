
const menuItems = [
    { name: 'Spring Rolls', category: 'appetizer', description: 'Crispy rolls stuffed with vegetables.', price: '$5.00' },
    { name: 'Chicken Wings', category: 'appetizer', description: 'Spicy chicken wings with a side of ranch.', price: '$7.00' },
    { name: 'Caesar Salad', category: 'main', description: 'Romaine lettuce with Caesar dressing.', price: '$10.00' },
    { name: 'Grilled Salmon', category: 'main', description: 'Salmon fillet with a lemon butter sauce.', price: '$18.00' },
    { name: 'Chocolate Cake', category: 'dessert', description: 'Rich chocolate cake with a molten center.', price: '$6.00' },
    { name: 'Apple Pie', category: 'dessert', description: 'Traditional apple pie with a scoop of vanilla ice cream.', price: '$5.00' },
    { name: 'Coffee', category: 'beverage', description: 'Freshly brewed coffee.', price: '$3.00' },
    { name: 'Iced Tea', category: 'beverage', description: 'Cold brewed tea with lemon.', price: '$2.50' },
];

function filterMenu(category) {
    const menuContainer = document.getElementById('menuContainer');
    menuContainer.innerHTML = '';

    const filteredItems = category === 'all' ? menuItems : menuItems.filter(item => item.category === category);

    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        menuItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>${item.price}</p>
        `;

        menuContainer.appendChild(menuItem);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    filterMenu('all');
});
