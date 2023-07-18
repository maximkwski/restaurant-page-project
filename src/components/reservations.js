import patioImg from '../assets/patio.jpeg';
import '../styles/reservations.css';

export default function reservations() {
    const contentDiv = document.getElementById('content');
    const reservationsDiv = document.createElement('div');
    reservationsDiv.classList.add('reservations');
    const reservationsDiv_h1 = document.createElement('h1');
    reservationsDiv_h1.textContent = "Make a Reservation";
    const reservationsDiv_p = document.createElement('p');
    reservationsDiv_p.innerHTML= `For parties of 4 or fewer please use the tool below. </br>
    If you have a party of 5 or more, please call us at <tel>727-471-6120</tel> to make your reservation.`
    const reservationsPic = new Image ();
    reservationsPic.src = patioImg;
    reservationsDiv.appendChild(reservationsDiv_h1);
    reservationsDiv.appendChild(reservationsDiv_p);
    reservationsDiv.appendChild(reservationsPic);
    
    contentDiv.appendChild(reservationsDiv);
    return contentDiv;
}