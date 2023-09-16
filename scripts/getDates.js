const currentDate = new Date();

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-US', options);

const dateDisplay = document.getElementById('date-display');
dateDisplay.textContent = formattedDate;