import { useState } from "react";

const SecondStep = () => {
  const [style, setStyle] = useState("arcade");
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      id: "arcade",
      name: "Arcade",
      icon: "images/icon-arcade.svg",
      price: 9,
    },
    {
      id: "advanced",
      name: "Advanced",
      icon: "images/icon-advanced.svg",
      price: 12,
    },
    {
      id: "pro",
      name: "Pro",
      icon: "images/icon-pro.svg",
      price: 15,
    },
  ];

  return (
    <div className="p-6 text-cool-gray">
      <h1 className="text-2xl text-marine-blue font-bold mb-3">
        Select your plan
      </h1>
      <p className="mb-6">You have the option of monthly or yearly billing</p>

      <div className="flex flex-col gap-3.5 mb-4">
        {plans.map((plan) => (
          <button
            key={plan.id}
            type="button"
            className={`border-1 flex items-center gap-4 p-2 rounded-lg ${
              style === plan.id ? "border-purplish-blue bg-alabaster" : ""
            }`}
            onClick={() => setStyle(plan.id)}
          >
            <img src={plan.icon} alt={`${plan.name} option icon`} />
            <div className="flex flex-col items-start">
              <p className="font-[500] text-marine-blue">{plan.name}</p>
              <p>${plan.price}/mo</p>
            </div>
          </button>
        ))}
      </div>

      <div className="flex justify-center gap-4 bg-alabaster p-3 rounded-lg">
        <p>Monthly</p>
        <div className="bg-marine-blue rounded-2xl w-10">
          <input
            type="radio"
            name="billing"
            id="monthly"
            aria-label="Monthly billing"
            value="monthly"
            onChange={(e) => setBillingCycle(e.target.value)}
            {...(billingCycle === "monthly" && { defaultChecked: true })}
          />
          <input
            type="radio"
            name="billing"
            id="yearly"
            aria-label="Yearly billing"
            value="yearly"
            onChange={(e) => setBillingCycle(e.target.value)}
          />
        </div>
        <p>Yearly</p>
      </div>
    </div>
  );
};

export default SecondStep;
