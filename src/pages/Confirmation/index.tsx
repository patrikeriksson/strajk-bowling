import Menu from "../../components/Menu";
import { FormInput } from "../../components/FormInput";

export default function Confirmation() {
  return (
    <>
      <Menu />
      <main className="booking">
        <img
          className="booking__img"
          src="/strajk.svg"
          alt="Strajk Bowling Logo"
        />
        <h1 className="booking__title">SEE YOU SOON!</h1>
        <form>
          <fieldset>
            <legend>BOOKING DETAILS</legend>
            {/* THESE SHOULD NOT BE INPUTS, JUST PLACEHOLDER FOR NOW */}
            <FormInput id="input-date" label="WHEN" type="date" />
            <FormInput id="input-bowlers" label="WHO" placeholder="1 pers" />
            <FormInput id="input-lanes" label="LANES" placeholder="1 lane" />
            <FormInput
              id="input-booking-number"
              label="BOOKING NUMBER"
              placeholder="STR812744"
            />
          </fieldset>
          {/* DISPLAY TOTAL COST HERE */}
          <button className="" type="submit">
            SWEET, LET'S GO!
          </button>
        </form>
      </main>
    </>
  );
}
