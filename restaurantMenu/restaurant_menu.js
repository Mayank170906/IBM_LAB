// const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];
const breakfastMenu = ['Pancakes- $12', 'Eggs Benedict -$22.99', 'Oatmeal -$21.99', 'Frittata -$15'];
function generateBreakfastMenu(item,index) {
    return `<p>${index+1}: ${item}</p>`;
}
function generateMainCourseMenu(item,index) {
    return `<p>${index+1}: ${item}</p>`;
}
function generateDessertMenu(item,index) {
    return `<p>${index+1}: ${item}</p>`;
}

document.getElementById('breakfastMenuItems').innerHTML = breakfastMenu.map(generateBreakfastMenu).join('');
document.getElementById('maincourseMenuItems').innerHTML = mainCourseMenu.map(generateMainCourseMenu).join('');
document.getElementById('dessertMenuItems').innerHTML = dessertMenu.map(generateDessertMenu).join('');

document.getElementById('breakfastTotalItems').innerHTML = breakfastMenu.length;
document.getElementById('maincourseTotalItems').innerHTML = mainCourseMenu.length;
document.getElementById('dessertTotalItems').innerHTML = dessertMenu.length;
