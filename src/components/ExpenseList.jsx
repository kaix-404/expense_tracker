import ExpenseCard from "./ExpenseCard";

function ExpenseList({ expenses, deleteExpense }) {
  if (expenses.length === 0) {
    return (
      <div className="bg-slate-900/80 border border-dashed border-slate-700 rounded-3xl p-10 text-center shadow-xl">

        <h3 className="text-2xl font-semibold mb-2">
          No Expenses Yet
        </h3>

        <p className="text-slate-400">
          Start tracking your spending by adding
          your first expense.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {expenses.map((expense) => (
        <ExpenseCard
          key={expense.id}
          expense={expense}
          deleteExpense={deleteExpense}
        />
      ))}
    </div>
  );
}

export default ExpenseList;