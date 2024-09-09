import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput";
import { useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDate } from "../util/date";
import { fetchExpenses } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    setIsFetching(true);
    async function getExpenses() {
      const expenses = await fetchExpenses();
      setIsFetching(false);
      expensesCtx.setExpenses(expenses);
    }
    getExpenses();
  }, []);

  if(isFetching){
    return <LoadingOverlay/>
  }

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const totay = new Date();
    const date7DaysAgo = getDateMinusDate(totay, 7);

    return expense.date > date7DaysAgo;
  });
  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallBackText="No expenses registered for the last 7 days."
    />
  );
}

export default RecentExpenses;
