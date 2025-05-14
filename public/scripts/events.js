
document.addEventListener('DOMContentLoaded', function () {

  fetch('/api/events')
    .then(response => response.json())
    .then(events => {
  function setupCarousel(sectionId, startIndex, endIndex) {
    let currentIndex = startIndex;

    const title = document.getElementById(`${sectionId}-title`);
    const date = document.getElementById(`${sectionId}-date`);
    const location = document.getElementById(`${sectionId}-location`);
    const description = document.getElementById(`${sectionId}-description`);
    const image = document.getElementById(`${sectionId}-image`);
    const leftBtn = document.getElementById(`${sectionId}-left`);
    const rightBtn = document.getElementById(`${sectionId}-right`);

    function displayEvent(index) {
      const event = events[index];
      title.textContent = event.title;
      date.innerHTML = `<strong>Date:</strong> ${event.date}`;
      location.innerHTML = `<strong>Location:</strong> ${event.location}`;
      description.textContent = event.description;
      image.src = event.image;
      image.alt = event.title;
    }

    leftBtn.addEventListener('click', () => {
      currentIndex = currentIndex <= startIndex ? endIndex : currentIndex - 1;
      displayEvent(currentIndex);
    });

    rightBtn.addEventListener('click', () => {
      currentIndex = currentIndex >= endIndex ? startIndex : currentIndex + 1;
      displayEvent(currentIndex);
    });

    displayEvent(currentIndex);
  }

  // Set up carousels for each section
  setupCarousel('Sports', 0, 2);
  setupCarousel('Festivals', 3, 5);
  setupCarousel('Volunteering', 6, 8); // (consider fixing typo: should be 'Volunteering')
  })
  .catch(error => {
      console.error('Failed to fetch events:', error);
    });
});
