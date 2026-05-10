import { Trash2 } from "lucide-react";

function ExpenseCard({ expense, deleteExpense }) {
  return (
    <div className="bg-slate-900/80 backdrop-blur-md p-5 rounded-3xl border border-slate-800 hover:border-slate-700 hover:translate-y-[-2px] transition-all duration-300 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">
            {expense.name}
          </h3>

          <p className="text-slate-400 text-sm mt-1">
            {expense.category}
          </p>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-4">
          <p className="text-2xl font-bold text-blue-400">
            ₹{expense.amount}
          </p>

          <button
            onClick={() => deleteExpense(expense.id)}
            className="hover:cursor-pointer px-2 py-2 rounded-xl transition-all duration-200"
          >
            <Trash2
                size={18}
                className="text-red-400 group-hover:text-white hover:size-5 transition"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExpenseCard;