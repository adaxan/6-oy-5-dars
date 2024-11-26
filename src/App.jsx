import React, { useState } from "react";

function App(){
  const [amount, setAmount] = useState();
  const [term, setTerm] = useState();
  const [rate, setRate] = useState();
  const [type, setType] = useState("repayment");
  const [monthlyRepayment, setMonthlyRepayment] = useState(null);
  const [totalRepayment, setTotalRepayment] = useState(null);

  function calculateRepayment(){
    const monthlyRate = rate / 100 / 12;
    const totalMonths = term * 12;

    if (type === "repayment") {
      const repayment =
        (amount * monthlyRate) /
        (1 - Math.pow(1 + monthlyRate, -totalMonths));
      setMonthlyRepayment(repayment.toFixed(2));
      setTotalRepayment((repayment * totalMonths).toFixed(2));``
    } else {
      setMonthlyRepayment((amount * monthlyRate).toFixed(2));
      setTotalRepayment((amount * monthlyRate * totalMonths).toFixed(2));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
        <h1 className="text-2xl font-bold mb-4">Mortgage Calculator</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 font-medium">
              Mortgage Amount (£)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="input input-bordered input-secondary w-full max-w-xs bg-white text-black"
            />
            <label className="block mt-4 mb-2 font-medium">Mortgage Term (years)</label>
            <input
              type="number"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              className="input input-bordered input-secondary w-full max-w-xs bg-white text-black"
            />
            <label className="block mt-4 mb-2 font-medium">Interest Rate (%)</label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="input input-bordered input-secondary w-full max-w-xs bg-white text-black"
            />
            <div className="mt-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="mortgageType"
                  value="repayment"
                  checked={type === "repayment"}
                  onChange={(e) => setType(e.target.value)}
                  className="form-radio"
                />
                <span className="ml-2">Repayment</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="radio"
                  name="mortgageType"
                  value="interestOnly"
                  checked={type === "interestOnly"}
                  onChange={(e) => setType(e.target.value)}
                  className="form-radio"
                />
                <span className="ml-2">Interest Only</span>
              </label>
            </div>
            <button
              onClick={calculateRepayment}
              className="mt-4 btn btn-secondary text-white"
            >
              Calculate Repayments
            </button>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-2">Your Results</h2>
            {monthlyRepayment && (
              <div>
                <p className="text-lg">
                  <strong>Monthly Repayments:</strong> £{monthlyRepayment}
                </p>
                <p className="text-lg mt-2">
                  <strong>Total Repayment:</strong> £{totalRepayment}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;