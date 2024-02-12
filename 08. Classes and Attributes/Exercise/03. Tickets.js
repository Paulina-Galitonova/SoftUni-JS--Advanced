function tickets(array, criteria) {
    let tickets = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    for (let el of array) {
        let [destination, price, status] = el.split("|");
        price = Number(price);
        let myTicket = new Ticket(destination, price, status);
        tickets.push(myTicket);
    }

    return ticketSort(tickets, criteria);

    function ticketSort(ticketArr, criteria) {
        if (criteria === "price") {
            ticketArr.sort((a, b) => a[criteria] - b[criteria]);
        } else {
            // Fix the typo: use localeCompare instead of localCompare
            ticketArr.sort((a, b) => a[criteria].localeCompare(b[criteria]));
        }
        return ticketArr;
    }
}

console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
));
