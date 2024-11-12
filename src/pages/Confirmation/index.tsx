import Menu from "../../components/Menu";
import { NavLink, useLocation } from "react-router-dom";
import "./index.css";

export default function Confirmation() {
  const location = useLocation();
  const { bookingId, totalPrice, date, lanes, players } = location.state;

  return (
    <>
      <Menu />
      <main className="confirmation">
        <img
          className="confirmation__img"
          src="/strajk.svg"
          alt="Strajk Bowling Logo"
        />
        <h1 className="confirmation__title">SEE YOU SOON!</h1>
        <div className="confirmation__line">
          <h2 className="confirmation__subtitle">BOOKING DETAILS</h2>
        </div>
        <div className="booking-details">
          <h3 className="booking-details__subtitle">WHEN</h3>
          <p className="booking-details__info">{date}</p>

          <h3 className="booking-details__subtitle">WHO</h3>
          <p className="booking-details__info">{players}</p>

          <h3 className="booking-details__subtitle">LANES</h3>
          <p className="booking-details__info">{lanes}</p>

          <h3 className="booking-details__subtitle">BOOKING NUMBER</h3>
          <p className="booking-details__info">{bookingId}</p>

          <div className="total">
            <h3 className="total__title">TOTAL</h3>
            <p className="total__price">{totalPrice} sek</p>
          </div>
        </div>
        <NavLink to="/booking" className="confirmation__button">
          SWEET, LET'S GO!
        </NavLink>
      </main>
    </>
  );
}
