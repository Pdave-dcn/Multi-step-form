import { useEffect } from "react";

type SecondStepType = {
  setChosenPlan: React.Dispatch<
    React.SetStateAction<{
      name: string;
      price: number;
    }>
  >;
  billingCycle: string;
  setBillingCycle: React.Dispatch<React.SetStateAction<string>>;
  choice: string;
  setChoice: React.Dispatch<React.SetStateAction<string>>;
};

const SecondStep = ({
  setChosenPlan,
  billingCycle,
  setBillingCycle,
  choice,
  setChoice,
}: SecondStepType) => {
  const plans = [
    {
      id: "arcade",
      name: "Arcade",
      icon: "images/icon-arcade.svg",
      price: {
        monthly: 9,
        yearly: 90,
      },
    },
    {
      id: "advanced",
      name: "Advanced",
      icon: "images/icon-advanced.svg",
      price: {
        monthly: 12,
        yearly: 120,
      },
    },
    {
      id: "pro",
      name: "Pro",
      icon: "images/icon-pro.svg",
      price: {
        monthly: 15,
        yearly: 150,
      },
    },
  ];

  const handleChosenPlan = (
    name: string,
    price: { monthly: number; yearly: number }
  ) => {
    const selectedPrice =
      billingCycle === "monthly" ? price.monthly : price.yearly;
    setChosenPlan({ name, price: selectedPrice });
  };

  useEffect(() => {
    const selectedPlan = plans.find((plan) => plan.id === choice);
    if (selectedPlan) {
      handleChosenPlan(selectedPlan.name, selectedPlan.price);
    }
  }, [billingCycle]);

  return (
    <div>
      <h1 className="text-2xl text-marine-blue font-bold mb-3">
        Select your plan
      </h1>
      <p className="mb-6">You have the option of monthly or yearly billing.</p>

      <div className="flex flex-col gap-3.5 mb-4 lg:flex-row lg:gap-4">
        {plans.map((plan) => (
          <button
            key={plan.id}
            type="button"
            className={`border-1 flex items-center gap-4 p-2 rounded-lg ${
              choice === plan.id ? "border-purplish-blue bg-alabaster" : ""
            } lg:flex-col lg:items-start lg:w-36 lg:p-5`}
            onClick={() => {
              setChoice(plan.id);
              handleChosenPlan(plan.name, plan.price);
            }}
          >
            <img src={plan.icon} alt={`${plan.name} option icon`} />
            <div className="flex flex-col items-start">
              <p className="font-[500] text-marine-blue">{plan.name}</p>
              <p className="text-sm">
                $
                {billingCycle === "monthly"
                  ? plan.price.monthly
                  : plan.price.yearly}
                /mo
              </p>
              {billingCycle === "yearly" ? (
                <p className="text-xs text-marine-blue mt-1 font-medium">
                  2 months free
                </p>
              ) : (
                ""
              )}
            </div>
          </button>
        ))}
      </div>

      <div className="flex justify-center gap-4 bg-alabaster p-3 rounded-lg">
        <p className=" text-marine-blue font-medium">Monthly</p>
        <div className="bg-marine-blue rounded-2xl w-10">
          <input
            type="radio"
            name="billing"
            id="monthly"
            aria-label="Monthly billing"
            value="monthly"
            onChange={(e) => setBillingCycle(e.target.value)}
            checked={billingCycle === "monthly"}
          />
          <input
            type="radio"
            name="billing"
            id="yearly"
            aria-label="Yearly billing"
            value="yearly"
            onChange={(e) => setBillingCycle(e.target.value)}
            checked={billingCycle === "yearly"}
          />
        </div>
        <p>Yearly</p>
      </div>
    </div>
  );
};

export default SecondStep;
