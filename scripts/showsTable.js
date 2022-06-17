// Show Dates
const showDates = [{
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA"
}, { 
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA"
}, {   
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA"
}, {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA"  
}, {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA"
}, {
    date: "Wed Dec 15 2021",
    venue: "Pres Club",
    location: "San Francisco, CA"
}];

function displayShows(showDates) {
    //selecting the shows section
    const shows = document.querySelector(".shows");
    
    //adding section title
    const showsTitle = document.createElement("h2");
    showsTitle.classList.add("shows__title");
    showsTitle.innerText = "Shows";
    shows.appendChild(showsTitle);

    //div to hold the table
    const showsContainer = document.createElement("div");
    showsContainer.classList.add("shows__container")
    shows.appendChild(showsContainer);

    //div for table headings
    const infoDiv = document.createElement("div");
    infoDiv.classList.add("shows__top");
    showsContainer.appendChild(infoDiv);

    // Dates column heading
    const datesTitle = document.createElement("h3");
    datesTitle.classList.add("shows__top-date");
    datesTitle.innerText = "DATE";
    infoDiv.appendChild(datesTitle);

    //venue column heading
    const venuesTitle = document.createElement("h3");
    venuesTitle.classList.add("shows__top-venue");
    venuesTitle.innerText = "VENUE";
    infoDiv.appendChild(venuesTitle);

    //location column heading
    const locationsTitle = document.createElement("h3");
    locationsTitle.classList.add("shows__top-location");
    locationsTitle.innerText = "LOCATION";
    infoDiv.appendChild(locationsTitle);
}
displayShows(showDates[1]);