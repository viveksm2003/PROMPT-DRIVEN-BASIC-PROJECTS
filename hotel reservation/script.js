document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    const reservationDetails = {
        seating: formData.get('seating'),
        date: formData.get('date'),
        diner: formData.get('diner'),
        occasion: formData.get('occasion'),
        time: formData.get('time'),
        email: formData.get('email')
    };

    alert(`Reservation made for ${reservationDetails.date} at ${reservationDetails.time} for ${reservationDetails.diner} diners. A confirmation email will be sent to ${reservationDetails.email}.`);

   
});
