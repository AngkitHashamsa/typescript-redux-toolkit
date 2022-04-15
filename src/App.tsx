import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./app/store";
import Reservation from "./components/Reservation";
import CustomerCard from "./components/CustomerCard";
import { addReservation } from "./features/reservationSlice";
import "./App.css";

function App() {
  const reservation = useSelector(
    (state: RootState) => state.reservation.value
  );

  const customers = useSelector((state: RootState) => state.customer.value);

  const dispatch = useDispatch();
  const [reserVation, setReservation] = useState("");

  const onReserVationSubmit = () => {
    if (!reserVation) return;
    dispatch(addReservation(reserVation));
    setReservation("");
  };

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservation.map((item, index) => (
                <Reservation customer={item} key={index} index={index} />
              ))}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reserVation}
              onChange={(e) => setReservation(e.target.value)}
            />
            <button onClick={onReserVationSubmit}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((item) => (
            <CustomerCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
