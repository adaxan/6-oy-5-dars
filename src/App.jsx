import React, { useState } from "react";

export default function MortgageCalculator() {
  const [amount, setAmount] = useState(300000);
  const [term, setTerm] = useState(25);
  const [rate, setRate] = useState(5.25);
  const [type, setType] = useState("repayment");
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  const calculateRepayments = () => {
    const monthlyRate = rate / 100 / 12;
    const totalMonths = term * 12;
    if (type === "repayment") {
      const monthly =
        (amount * monthlyRate) /
        (1 - Math.pow(1 + monthlyRate, -totalMonths));
      setMonthlyPayment(monthly.toFixed(2));
      setTotalPayment((monthly * totalMonths).toFixed(2));
    } else if (type === "interest") {
      const monthly = (amount * monthlyRate).toFixed(2);
      setMonthlyPayment(monthly);
      setTotalPayment((monthly * totalMonths).toFixed(2));
    }
  };

  const clearAll = () => {
    setAmount(0);
    setTerm(0);
    setRate(0);
    setType("repayment");
    setMonthlyPayment(0);
    setTotalPayment(0);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-4xl w-full flex">
        {/* Left Section */}
        <div className="w-1/2 border-r pr-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-bold">Mortgage Calculator</h1>
            <button
              onClick={clearAll}
              className="text-blue-600 underline hover:text-blue-800"
            >
              Clear All
            </button>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Mortgage Amount
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full border rounded-md p-2 focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="flex gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Mortgage Term
              </label>
              <div className="flex items-center">
                <input
                  type="number"
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                  className="w-20 border rounded-md p-2 focus:ring focus:ring-blue-300"
                />
                <span className="ml-2">years</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Interest Rate
              </label>
              <div className="flex items-center">
                <input
                  type="number"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  className="w-20 border rounded-md p-2 focus:ring focus:ring-blue-300"
                />
                <span className="ml-2">%</span>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Mortgage Type</label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="type"
                  value="repayment"
                  checked={type === "repayment"}
                  onChange={(e) => setType(e.target.value)}
                  className="mr-2"
                />
                Repayment
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="type"
                  value="interest"
                  checked={type === "interest"}
                  onChange={(e) => setType(e.target.value)}
                  className="mr-2"
                />
                Interest Only
              </label>
            </div>
          </div>
          <button
            onClick={calculateRepayments}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg flex justify-center items-center gap-2"
          >
            <span role="img" aria-label="calculator">
              
            </span>
            Calculate Repayments
          </button>
        </div>
        {/* Right Section */}
        <div className="w-1/2 pl-6 bg-blue-900 text-white rounded-lg">
          <h2 className="text-lg font-bold mb-4">Your results</h2>
          <p className="text-sm mb-8">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click "calculate
            repayments" again.
          </p>
          <div className="bg-blue-800 p-6 rounded-lg shadow-lg">
            <p className="text-sm mb-2">Your monthly repayments</p>
            <h3 className="text-3xl font-bold mb-4">£{monthlyPayment}</h3>
            <hr className="border-gray-700 mb-4" />
            <p className="text-sm mb-2">Total you'll repay over the term</p>
            <h3 className="text-2xl font-bold">£{totalPayment}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
