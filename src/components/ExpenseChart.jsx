import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#3B82F6",
  "#EF4444",
  "#10B981",
  "#F59E0B",
  "#8B5CF6",
];

function ExpenseChart({ expenses }) {
  const breakdown = expenses.reduce((acc, expense) => {
    acc[expense.category] =
      (acc[expense.category] || 0) + expense.amount;

    return acc;
  }, {});

  const data = Object.entries(breakdown).map(
    ([category, amount]) => ({
      name: category,
      value: amount,
    })
  );

  if (data.length === 0) {
    return (
      <div className="bg-white/5 border border-white/10 rounded-3xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
        <h2 className="text-2xl font-semibold mb-4">
          Expense Analytics
        </h2>

        <div className="h-[300px] flex items-center justify-center text-slate-400">
          No data available for chart.
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">
          Expense Analytics
        </h2>

        <p className="text-slate-400 mt-1">
          Spending breakdown by category
        </p>
      </div>

      <div className="h-[250px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={110}
              innerRadius={70}
              paddingAngle={4}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    COLORS[index % COLORS.length]
                  }
                />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "16px",
                color: "#fff",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="flex flex-wrap gap-3 mt-4">
        {data.map((item, index) => (
          <div
            key={item.name}
            className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1"
          >
            <div
              className="w-3 h-3 rounded-full"
              style={{
                backgroundColor:
                  COLORS[index % COLORS.length],
              }}
            />

            <span className="text-sm text-slate-300">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpenseChart;