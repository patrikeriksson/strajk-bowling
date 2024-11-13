import { createContext, useContext, useState, ReactNode } from "react";
import { BookingConfirmation } from "../types/types";

type BookingContextType = {
  bookingData: BookingConfirmation | null;
  setBookingData: (data: BookingConfirmation) => void;
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
};

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [bookingData, setBookingData] = useState<BookingConfirmation | null>(
    null
  );
  return (
    <BookingContext.Provider value={{ bookingData, setBookingData }}>
      {children}
    </BookingContext.Provider>
  );
};
