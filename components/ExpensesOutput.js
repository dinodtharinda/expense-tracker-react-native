import { FlatList, StyleSheet, Text, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../constants/styles";

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

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:24,
        paddingBottom:0,
        paddingTop:24,
        backgroundColor:GlobalStyles.colors.primary700,
    }
})

export default ExpensesOutput;
