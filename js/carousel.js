let currentIndex = 0; // Track the current carousel item
const items = document.querySelectorAll('.carousel-image-container'); // Select all carousel items
const totalItems = items.length;
items[currentIndex].style.display = 'flex'; // Show the first carousel item

document.querySelector('.carousel-button.left').addEventListener('click', () => {
  items[currentIndex].style.display = 'none'; // Hide the current carousel item
  currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Calculate the previous carousel item index
  items[currentIndex].style.display = 'flex'; // Show the new carousel item
});

document.querySelector('.carousel-button.right').addEventListener('click', () => {
  items[currentIndex].style.display = 'none'; // Hide the current carousel item
  currentIndex = (currentIndex + 1) % totalItems; // Calculate the next carousel item index
  items[currentIndex].style.display = 'flex'; // Show the new carousel item
});
