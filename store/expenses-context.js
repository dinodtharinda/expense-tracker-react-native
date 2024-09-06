import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 56.99,
    date: new Date("2024-12-19"),
  },
  {
    id: "e2",
    description: "Groceries",
    amount: 78.45,
    date: new Date("2024-12-10"),
  },
  {
    id: "e3",
    description: "Gym membership",
    amount: 45.0,
    date: new Date("2024-11-01"),
  },
  {
    id: "e4",
    description: "Electricity bill",
    amount: 120.89,
    date: new Date("2024-11-15"),
  },
  {
    id: "e5",
    description: "Coffee maker",
    amount: 34.5,
    date: new Date("2024-10-05"),
  },
  {
    id: "e6",
    description: "Laptop",
    amount: 899.99,
    date: new Date("2024-09-25"),
  },
  {
    id: "e7",
    description: "Book",
    amount: 19.99,
    date: new Date("2024-09-10"),
  },
  {
    id: "e8",
    description: "Electricity bill",
    amount: 120.89,
    date: new Date("2024-11-15"),
  },
  {
    id: "e9",
    description: "Coffee maker",
    amount: 34.5,
    date: new Date("2024-10-05"),
  },
  {
    id: "e10",
    description: "Laptop",
    amount: 899.99,
    date: new Date("2024-09-25"),
  },
  {
    id: "e11",
    description: "Book",
    amount: 19.99,
    date: new Date("2024-09-10"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expens) => expens.id === action.payload.id
      );
      const updatableExense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExense, ...action.payload.data };
      const updatableExenses = [...state];
      updatableExenses[updatableExpenseIndex] = updatedItem;
      return updatableExenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deteleExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deteleExpense,
    updateExpense: updateExpense,
  };
  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
