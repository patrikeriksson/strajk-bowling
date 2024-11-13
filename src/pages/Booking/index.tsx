import "./index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookingRequest, BookingConfirmation } from "../../types/types";
import { FormInput } from "../../components/FormInput";
import Menu from "../../components/Menu";
import { useBooking } from "../../context/BookingContext";

export default function Booking() {
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [players, setPlayers] = useState<number>(1);
  const [lanes, setLanes] = useState<number>(1);
  const [shoeSizes, setShoeSizes] = useState<string[]>([""]);

  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const { setBookingData } = useBooking();

  const addShoeSize = () => {
    setShoeSizes([...shoeSizes, ""]);
  };

  const removeShoeSize = (index: number) => {
    setShoeSizes(shoeSizes.filter((_, i) => i !== index));
  };

  const handleShoeSizeChange = (index: number, value: string) => {
    const newShoeSizes = [...shoeSizes];
    newShoeSizes[index] = value;
    setShoeSizes(newShoeSizes);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (shoeSizes.length !== players) {
      setError("Number of shoes must match the number of players");
      return;
    }

    if (players > lanes * 4) {
      setError("Each lane can have a maximum of 4 players");
      return;
    }

    setError(null);

    const bookingRequest: BookingRequest = {
      when: `${date} ${time}`,
      lanes,
      people: players,
      shoes: shoeSizes.map((size) => parseInt(size, 10) || 0),
    };
    try {
      const response = await fetch(
        "https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com",
        {
          method: "POST",
          headers: {
            "x-api-key": "738c6b9d-24cf-47c3-b688-f4f4c5747662",
          },
          body: JSON.stringify(bookingRequest),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit booking");
      }
      const bookingConfirmation: BookingConfirmation = await response.json();

      setBookingData(bookingConfirmation);

      navigate("/confirmation");
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert("There was an error processing your booking. Please try again.");
    }
  };

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
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>WHEN, WHAT & WHO</legend>
            <div className="date-time-container">
              <FormInput
                id="input-date"
                label="DATE"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <FormInput
                id="input-time"
                label="TIME"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <FormInput
              id="input-bowlers"
              label="NUMBER OF AWESOME BOWLERS"
              type="number"
              value={players}
              onChange={(e) => setPlayers(parseInt(e.target.value, 10) || 1)}
            />
            <FormInput
              id="input-lanes"
              label="NUMBER OF LANES"
              type="number"
              value={lanes}
              onChange={(e) => setLanes(parseInt(e.target.value, 10) || 1)}
            />
          </fieldset>
          <fieldset className="shoes__fieldset">
            <legend>SHOES</legend>
            {shoeSizes.map((size, index) => (
              <div key={index} className="shoe-size__container">
                <FormInput
                  id={`input-shoes-${index}`}
                  label={`SHOE SIZE / PERSON ${index + 1}`}
                  placeholder="Euro 44"
                  value={size}
                  onChange={(e) => handleShoeSizeChange(index, e.target.value)}
                />

                <button
                  type="button"
                  onClick={() => removeShoeSize(index)}
                  className="shoes__remove"
                >
                  -
                </button>
              </div>
            ))}
            <button type="button" onClick={addShoeSize} className="shoes__add">
              +
            </button>
          </fieldset>
          {error && <p className="error__message">{error}</p>}
          <button className="booking__button" type="submit">
            STRIIIIIIKE!
          </button>
        </form>
      </main>
    </>
  );
}
