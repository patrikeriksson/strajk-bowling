import "./index.css";
import { FormInput } from "../../components/FormInput";
import Menu from "../../components/Menu";

export default function Booking() {
  return (
    <>
      <Menu />
      <main className="booking">
        <img
          className="booking__img"
          src="/strajk.svg"
          alt="Strajk Bowling Logo"
        />
        <h1 className="booking__title">BOOKING</h1>
        <form>
          <fieldset>
            <legend>WHEN, WHAT & WHO</legend>
            <div className="date-time-container">
              <FormInput id="input-date" label="DATE" type="date" />
              <FormInput id="input-time" label="TIME" type="time" />
            </div>
            <FormInput
              id="input-bowlers"
              label="NUMBER OF AWESOME BOWLERS"
              placeholder="1 pers"
            />
            <FormInput
              id="input-lanes"
              label="NUMBER OF LANES"
              placeholder="1 lane"
            />
          </fieldset>
          <fieldset className="floating-label-fieldset">
            <legend>SHOES</legend>
            <FormInput
              id="input-shoes"
              label="SHOE SIZE / PERSON 1"
              placeholder="Euro 44"
            />
          </fieldset>
          <button className="" type="submit">
            STRIIIIIIKE!
          </button>
        </form>
      </main>
    </>
  );
}
