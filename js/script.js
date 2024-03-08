if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor click behavior
    const navbarHeight = 150; // Replace with the height of your navbar
    const elementRect = document.getElementById('my-project-carousel').getBoundingClientRect();
    const absoluteElementTop = elementRect.top + window.pageYOffset;
    const scrollTo = absoluteElementTop - navbarHeight; // Calculate the exact position

    window.scrollTo({
      top: scrollTo,
      behavior: 'smooth'
    });
  });
}
