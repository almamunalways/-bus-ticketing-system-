const seats = document.getElementsByClassName('btn-all')

sum = 0;
     // Start Loop
for(const seat of seats) {

   seat.addEventListener("click", function (event){

    const seatName = event.target.innerText;

    const ticketPrice = parseInt(550);

    const ticketAll = document.getElementById("ticket-price");

    seat.classList.add("bg-[#1DD100]","text-white");


         //Ticket quantity

    const div = document.createElement("div");
    div.classList.add("selected-ticket");
    div.classList.add("flex");
    div.classList.add("justify-between");
    div.classList.add("px-5");

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    p1.innerText = seatName;
    p2.innerText = "Economy";
    p3.innerText = ticketPrice;

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);

    ticketAll.appendChild(div);

    

   });
};


