document.addEventListener('DOMContentLoaded', function () {
  const events = window.eventData; // from EJS global
  let currentIndex = 0;

  function displayEvent(index) {
    const event = events[index];
    document.getElementById('Sports-title').textContent = event.title;
    document.getElementById('Sports-date').innerHTML = `<strong>Date:</strong> ${event.date}`;
    document.getElementById('Sports-location').innerHTML = `<strong>Location:</strong> ${event.location}`;
    document.getElementById('Sports-description').textContent = event.description;
    document.getElementById('Sports-image').src = event.image;
    document.getElementById('Sports-image').alt = event.title;
  }

  document.getElementById('Sports-left').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + events.length) % events.length;
    displayEvent(currentIndex);
  });

  document.getElementById('Sports-right').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % events.length;
    displayEvent(currentIndex);
  });
 
  displayEvent(currentIndex);
});

document.addEventListener('DOMContentLoaded', function () {
  const events = window.eventData; // from EJS global
  let currentIndex = 0;

  function displayEvent(index) {
    const event = events[index];
    document.getElementById('Drama-title').textContent = event.title;
    document.getElementById('Drama-date').innerHTML = `<strong>Date:</strong> ${event.date}`;
    document.getElementById('Drama-location').innerHTML = `<strong>Location:</strong> ${event.location}`;
    document.getElementById('Drama-description').textContent = event.description;
    document.getElementById('Drama-image').src = event.image;
    document.getElementById('Drama-image').alt = event.title;
  }

  document.getElementById('Drama-left').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + events.length) % events.length;
    displayEvent(currentIndex);
  });

  document.getElementById('Drama-right').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % events.length;
    displayEvent(currentIndex);
  });

  displayEvent(currentIndex);
});

document.addEventListener('DOMContentLoaded', function () {
  const events = window.eventData; // from EJS global
  let currentIndex = 0;

  function displayEvent(index) {
    const event = events[index];
    document.getElementById('Voluntering-title').textContent = event.title;
    document.getElementById('Voluntering-date').innerHTML = `<strong>Date:</strong> ${event.date}`;
    document.getElementById('Voluntering-location').innerHTML = `<strong>Location:</strong> ${event.location}`;
    document.getElementById('Voluntering-description').textContent = event.description;
    document.getElementById('Voluntering-image').src = event.image;
    document.getElementById('Voluntering-image').alt = event.title;
  }
  document.getElementById('Voluntering-left').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + events.length) % events.length;
    displayEvent(currentIndex);
  });

  document.getElementById('Voluntering-right').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % events.length;
    displayEvent(currentIndex);
  });

  displayEvent(currentIndex);
});