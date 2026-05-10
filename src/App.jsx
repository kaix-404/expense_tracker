import { useEffect, useState } from "react";

import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import SummaryPanel from "./components/SummaryPanel";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses =
      localStorage.getItem("expenses");

    return savedExpenses
      ? JSON.parse(savedExpenses)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "expenses",
      JSON.stringify(expenses)
    );
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses((prev) =>
      prev.filter((expense) => expense.id !== id)
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"/>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"/>
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-6">
          <div>
            <h1 className="text-5xl font-bold tracking-tight">
              Expense Tracker
            </h1>

            <p className="text-slate-400 mt-2 text-lg">
              Manage your finances with clarity and precision
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl px-6 py-4">
            <p className="text-slate-400 text-sm">
              Current Expense
            </p>

            <h2 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              ₹{expenses
                .reduce((sum, e) => sum + e.amount, 0)
                .toFixed(2)}
            </h2>
          </div>
        </header>

        <ExpenseForm addExpense={addExpense} />

        <div className="grid lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2">
            <ExpenseList
              expenses={expenses}
              deleteExpense={deleteExpense}
            />
          </div>

          <SummaryPanel expenses={expenses} />
        </div>
      </div>
    </div>
  );
}

export default App;