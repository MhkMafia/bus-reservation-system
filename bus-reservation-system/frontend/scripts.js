document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const fromCity = document.getElementById('fromCity').value;
    const toCity = document.getElementById('toCity').value;
    const journeyDate = document.getElementById('journeyDate').value;

    fetch(`/api/buses?from=${fromCity}&to=${toCity}&date=${journeyDate}`)
        .then(response => response.json())
        .then(data => {
            const busList = document.getElementById('busList');
            busList.innerHTML = '';
            data.forEach(bus => {
                const li = document.createElement('li');
                li.textContent = `${bus.name} - ₹${bus.fare}`;
                busList.appendChild(li);
            });
        });
});
