const arrDates = [{
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


function displayShows(arr) {
    const shows = document.querySelector(".shows")
    const mainEl = document.querySelector("main");
    mainEl.appendChild(shows);

    const showsTitle = document.createElement("h2");
    showsTitle.classList.add("shows__title");
    showsTitle.classList.add("section-header");
    showsTitle.innerText = "Shows";
    shows.appendChild(showsTitle);

    const showsContainer = document.createElement("div");
    showsContainer.classList.add("shows__container")
    shows.appendChild(showsContainer);

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("shows__top");
    showsContainer.appendChild(infoDiv);

    const datesTitle = document.createElement("h3");
    datesTitle.classList.add("shows__top-date");
    datesTitle.classList.add("section-subheader");
    datesTitle.innerText = "DATES";
    infoDiv.appendChild(datesTitle);

    const venuesTitle = document.createElement("h3");
    venuesTitle.classList.add("shows__top-venue");
    venuesTitle.classList.add("section-subheader");
    venuesTitle.innerText = "VENUE";
    infoDiv.appendChild(venuesTitle);

    const locationsTitle = document.createElement("h3");
    locationsTitle.classList.add("shows__top-location");
    locationsTitle.classList.add("section-subheader");
    locationsTitle.innerText = "LOCATION";
    infoDiv.appendChild(locationsTitle);


    for(let i=0; i<arrDates.length; i++) {

        //container div
        const showsParent = document.createElement("div");
        showsParent.classList.add("shows__new");
        showsContainer.appendChild(showsParent);


        //Date heading
        const dateTitle = document.createElement("h4");
        dateTitle.classList.add("shows__date");
        dateTitle.classList.add("section-subheader");
        dateTitle.innerText = "DATE";
        showsParent.appendChild(dateTitle);

        //Actual Date
        const dateShow = document.createElement("h3");
        dateShow.classList.add("shows__date-actual");
       dateShow.classList.add("body-text");
        dateShow.innerText = arrDates[i]["date"];
        showsParent.appendChild(dateShow);

        //Venue heading
        const venueTitle = document.createElement("h4");
        venueTitle.classList.add("shows__venue");
        venueTitle.classList.add("section-subheader");
        venueTitle.innerText = "VENUE";
        showsParent.appendChild(venueTitle);

        //Actual Venue
        const venueShow = document.createElement("h3");
        venueShow.classList.add("shows__venue-actual");
        venueShow.classList.add("body-text");
        venueShow.innerText = arrDates[i]["venue"];
        showsParent.appendChild(venueShow);

        //Location heading
        const locationTitle = document.createElement("h4");
        locationTitle.classList.add("shows__location");
        locationTitle.classList.add("section-subheader");
        locationTitle.innerText = "LOCATION";
        showsParent.appendChild(locationTitle);

        //Actual Location
        const locationShow = document.createElement("h3");
        locationShow.classList.add("shows__location-actual");
        locationShow.classList.add("body-text");
        locationShow.innerText = arrDates[i]["location"];
        showsParent.appendChild(locationShow);

        //Button
        const buyTickets = document.createElement("button");
        buyTickets.classList.add("shows__button");
        buyTickets.classList.add("body-text");
        buyTickets.innerText = "BUY TICKETS";
        showsParent.appendChild(buyTickets);
    }
}

displayShows(arrDates);