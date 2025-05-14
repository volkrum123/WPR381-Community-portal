
//The Eventlister waits until the browser full loads the application befor executing.
document.addEventListener('DOMContentLoaded', function () {

  fetch('/api/events') // Gets the events array from the /api/events route path in the pageRouter.js
    .then(response => response.json()) //converts the array to json
    .then(events => {

         function EventChanger(sectionId, startIndex, endIndex) {  // This function gets an events using the event info id's. It takes the category name, event indexs as arguments.
                  let currentIndex = startIndex;

                  const title = document.getElementById(`${sectionId}-title`);
                  const date = document.getElementById(`${sectionId}-date`);
                  const location = document.getElementById(`${sectionId}-location`);
                  const description = document.getElementById(`${sectionId}-description`);
                  const image = document.getElementById(`${sectionId}-image`);
                  const leftBtn = document.getElementById(`${sectionId}-left`);
                  const rightBtn = document.getElementById(`${sectionId}-right`);
                  
                  // This function is used the get the specified events array items using its array index.
                  function displayEvent(index) {
                           const event = events[index];
                           title.textContent = event.title;
                           date.innerHTML = `<strong>Date:</strong> ${event.date}`;
                           location.innerHTML = `<strong>Location:</strong> ${event.location}`;
                           description.textContent = event.description;
                           image.src = event.image;
                           image.alt = event.title;
                          }
                  // This eventlistener changes the event index to the previous event array index when button is clicked
                  leftBtn.addEventListener('click', () => {
                          currentIndex = currentIndex <= startIndex ? endIndex : currentIndex - 1;
                          displayEvent(currentIndex);
                          });
                  // This eventlistener changes the event index to the next event array index when the button is clicked
                  rightBtn.addEventListener('click', () => {
                  currentIndex = currentIndex >= endIndex ? startIndex : currentIndex + 1;
                  displayEvent(currentIndex);
                  });

                  displayEvent(currentIndex);
                }

     //Calling the  function and passing it the category name and the array range.
    EventChanger('Sports', 0, 2);
    EventChanger('Festivals', 3, 5);
    EventChanger('Volunteering', 6, 8); 
  })
  .catch(error => {
       console.error('Failed to fetch events:', error);
    });
});
