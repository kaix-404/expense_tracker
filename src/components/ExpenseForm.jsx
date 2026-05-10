import { useState } from "react";
import { ChevronDown } from "lucide-react";
import categories from "../data/categories";

function ExpenseForm({ addExpense }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Expense name is required.");
      return;
    }

    if (!amount || Number(amount) <= 0) {
      setError("Amount must be greater than 0.");
      return;
    }

    setError("");

    const newExpense = {
      id: Date.now(),
      name,
      amount: Number(amount),
      category,
    };

    addExpense(newExpense);

    setName("");
    setAmount("");
    setCategory("Food");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-3xl p-6 shadow-2xl"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">
          Add Expense
        </h2>

        <div className="text-sm text-slate-400">
          Track smarter
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Expense name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-slate-800 border border-slate-700 rounded-2xl px-4 py-3 outline-none focus:border-blue-500 transition"
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="bg-slate-800 border border-slate-700 rounded-2xl px-4 py-3 outline-none focus:border-blue-500 transition"
        />

        <div className="relative">
            <select
                value={category}
                onClick={() =>
                setIsCategoryOpen((prev) => !prev)
                }
                onChange={(e) => {
                setCategory(e.target.value);

                setTimeout(() => {
                    setIsCategoryOpen(false);
                }, 50);
                }}
                className="appearance-none w-full bg-slate-800 border border-slate-700 hover:border-slate-500 rounded-2xl px-4 py-3 pr-12 outline-none focus:border-blue-500 transition"
            >
                {categories.map((cat) => (
                <option
                    key={cat}
                    value={cat}
                >
                    {cat}
                </option>
                ))}
            </select>

            <ChevronDown
                size={18}
                className={`absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none transition-transform duration-300 ${
                isCategoryOpen ? "rotate-180" : ""
                }`}
            />
        </div>
      </div>

      {error && (
        <div className="mt-4 bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-2xl">
          {error}
        </div>
      )}

      <button
        type="submit"
        className="mt-6 bg-green-600 hover:bg-green-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 px-6 py-3 rounded-2xl font-semibold shadow-lg"
      >
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;