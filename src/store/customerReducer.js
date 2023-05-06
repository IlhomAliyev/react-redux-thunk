const defaultState = {
  customers: []
};

const ADD_CUSTOMER = "ADD_CUSTOMER";
const ADD_MANY_CUSTOMER = "ADD_MANY_CUSTOMER";
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";
const GET_CUSTOMERS = "GET_CUSTOMERS";

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MANY_CUSTOMER:
      return { ...state, customers: [...state.customers, ...action.payload] };

    case ADD_CUSTOMER:
      return { ...state, customers: [action.payload, ...state.customers] };

    case REMOVE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter((c) => c.id !== action.payload)
      };

    case GET_CUSTOMERS:
      return { ...state, cash: state.cash - action.payload };

    default:
      return state;
  }
};

export const addCustomerAction = (payload) => ({
  type: ADD_CUSTOMER,
  payload
});
export const addManyCustomersAction = (payload) => ({
  type: ADD_MANY_CUSTOMER,
  payload
});
export const removeCustomerAction = (payload) => ({
  type: REMOVE_CUSTOMER,
  payload
});
