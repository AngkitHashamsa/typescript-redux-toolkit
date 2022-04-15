import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { addFood } from "../features/customerSlice";
type Customer = {
  id: string;
  customer: string;
  food: string[] | [];
};

type Props = {
  item: Customer;
};
const CustomerCard = ({ item }: Props) => {
  const [food, setFoods] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="customer-food-card-container">
      <p>{item.customer}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {item.food.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div className="customer-food-input-container">
          <input value={food} onChange={(e) => setFoods(e.target.value)} />
          <button
            onClick={() => {
              dispatch(addFood({ food, id: item.id }));
              setFoods("");
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(CustomerCard);
