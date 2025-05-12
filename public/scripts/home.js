document.addEventListener('DOMContentLoaded', function () {
    const events = window.eventData;

    function isFutureDate(dateStr) {
      const eventDate = new Date(dateStr);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Strip time for fair comparison
      return eventDate >= today;
    }

    function displayNextEvent() {
      const futureEvents = events
        .filter(e => isFutureDate(e.date))
        .sort((a, b) => new Date(a.date) - new Date(b.date));

      const container = document.getElementById('Temporary-display');

      if (futureEvents.length === 0) {
        container.innerHTML = '<p class="no-event">No upcoming events.</p>';
        return;
      }

      const event = futureEvents[0];

      // Populate the DOM
      document.getElementById('Temporary-title').textContent = event.title;
      document.getElementById('Temporary-date').innerHTML = `<strong>Date:</strong> ${event.date}`;
      document.getElementById('Temporary-location').innerHTML = `<strong>Location:</strong> ${event.location}`;
      document.getElementById('Temporary-description').textContent = event.description;
      document.getElementById('Temporary-image').src = event.image;
      document.getElementById('Temporary-image').alt = event.title;
    }

    displayNextEvent();
  });