import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import { fetchCustomers } from "./asyncActions/customers";
import {
  addCustomerAction,
  removeCustomerAction
} from "./store/customerReducer";

const App = () => {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };
  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    };
    dispatch(addCustomerAction(customer));
  };
  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <div className="App">
      <h1 className="cashTitle">{cash}</h1>
      <div className="buttons-wrapper">
        <button onClick={() => addCash(Number(prompt("Введите число: ")))}>
          Пополнить счет
        </button>
        <button onClick={() => getCash(Number(prompt("Введите число: ")))}>
          Снять со счета
        </button>
        <button onClick={() => addCustomer(prompt("Введите имя пользователя"))}>
          Добавить клиента
        </button>
        <button onClick={() => dispatch(fetchCustomers(dispatch))}>
          Получить клиентов из базы
        </button>
      </div>
      {customers.length ? (
        customers.map((c) => (
          <div
            key={c.id}
            className="customerBlock"
            onClick={() => removeCustomer(c)}
          >
            <p>
              ID: <span>{c.id}</span>
            </p>
            <p>
              Имя: <span>{c.name}</span>
            </p>
            {c.email && (
              <p>
                E-mail: <span>{c.email}</span>
              </p>
            )}
            {c.phone && (
              <p>
                Phone: <span>{c.phone}</span>
              </p>
            )}
          </div>
        ))
      ) : (
        <h1>Клиенты отсутсвуют!</h1>
      )}
    </div>
  );
};

export default App;
