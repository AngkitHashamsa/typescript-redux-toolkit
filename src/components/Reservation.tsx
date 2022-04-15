import { memo, useId } from "react";
import { removeReservation } from "../features/reservationSlice";
import { addCustomer } from "../features/customerSlice";
import { useDispatch } from "react-redux";
type Props = {
  customer: string;
  index: number;
};

const Reservation = ({ customer, index }: Props) => {
  console.log("child");
  const dispatch = useDispatch();
  const id = useId();
  const newObj = {
    id,
    customer,
    food: [],
  };
  return (
    <div
      className="reservation-card-container"
      onClick={() => {
        dispatch(removeReservation(index));
        dispatch(addCustomer(newObj));
      }}
    >
      {customer}
    </div>
  );
};

export default memo(Reservation);
