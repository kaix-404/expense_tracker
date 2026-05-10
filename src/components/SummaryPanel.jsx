import CurrencyConverter from "./CurrencyConverter";
import ExpenseChart from "./ExpenseChart";

function SummaryPanel({ expenses }) {
  const total = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  const breakdown = expenses.reduce((acc, expense) => {
    acc[expense.category] =
      (acc[expense.category] || 0) + expense.amount;

    return acc;
  }, {});

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-6">
          Summary
        </h2>

        <div className="mb-6">
          <p className="text-slate-400 mb-1">
            Total Expenses
          </p>

          <h3 className="text-3xl font-bold">
            ₹{total.toFixed(2)}
          </h3>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">
            Category Breakdown
          </h4>

          <div className="space-y-2">
            {Object.entries(breakdown).map(
              ([category, amount]) => (
                <div
                  key={category}
                  className="flex justify-between text-slate-300"
                >
                  <span>{category}</span>

                  <span>
                    ₹{amount.toFixed(2)}
                  </span>
                </div>
              )
            )}

            {expenses.length === 0 && (
              <p className="text-slate-400">
                No expense data available.
              </p>
            )}
          </div>
        </div>
      </div>
      
      <ExpenseChart expenses={expenses} />
      <CurrencyConverter total={total} />
    </div>
  );
}

export default SummaryPanel;