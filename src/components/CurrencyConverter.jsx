import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const currencies = ["USD", "EUR", "GBP", "JPY"];

function CurrencyConverter({ total }) {
  const [selectedCurrency, setSelectedCurrency] =
    useState("USD");

  const [rate, setRate] = useState(null);

  const [convertedAmount, setConvertedAmount] =
    useState(null);

  const [loading, setLoading] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRate = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://open.er-api.com/v6/latest/INR`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch exchange rates");
        }

        const data = await response.json();

        const exchangeRate =
          data.rates[selectedCurrency];

        if (!exchangeRate) {
          throw new Error("Currency not supported");
        }

        setRate(exchangeRate);

        setConvertedAmount(
          (total * exchangeRate).toFixed(2)
        );
      } catch (err) {
        setError("Unable to fetch currency rates.");
      } finally {
        setLoading(false);
      }
    };

    fetchRate();
  }, [selectedCurrency, total]);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mt-6">
      <h2 className="text-2xl font-semibold mb-6">
        Currency Converter
      </h2>

      <div className="flex flex-col md:flex-row gap-4 md:items-center">
        <div className="relative">
            <select
                value={selectedCurrency}
                onClick={() =>
                setIsCategoryOpen((prev) => !prev)
                }
                onChange={(e) => {
                setSelectedCurrency(e.target.value);

                setTimeout(() => {
                    setIsCategoryOpen(false);
                }, 50);
                }}
                className="appearance-none w-full bg-slate-800 border border-slate-700 hover:border-slate-500 rounded-2xl px-4 py-3 pr-12 outline-none focus:border-blue-500 transition"
            >
                {currencies.map((currency) => (
                <option
                    key={currency}
                    value={currency}
                >
                    {currency}
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

        {loading && (
          <p className="text-yellow-400">
            Loading exchange rate...
          </p>
        )}

        {error && (
          <p className="text-red-400">
            {error}
          </p>
        )}

        {!loading && !error && rate && (
          <div>
            <p className="text-slate-400 text-sm">
              Converted Total
            </p>

            <h3 className="text-3xl font-bold">
              {selectedCurrency} {convertedAmount}
            </h3>

            <p className="text-slate-500 text-sm mt-1">
              1 INR = {rate} {selectedCurrency}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CurrencyConverter;