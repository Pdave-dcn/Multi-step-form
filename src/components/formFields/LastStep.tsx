type LastStepType = {
  chosenPlan: {
    name: string;
    price: number;
  };
  billingCycle: string;
  checkedItems: {
    id: string;
    name: string;
    price: { monthly: number; yearly: number };
  }[];
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const LastStep = ({
  chosenPlan,
  billingCycle,
  checkedItems,
  step,
  setStep,
}: LastStepType) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl text-marine-blue font-bold mb-3">Finishing up</h1>
      <p className="mb-4">
        Double-check everything looks OK before confirming.
      </p>

      <div className="bg-alabaster p-4 text-sm mb-4">
        <div className="flex justify-between pb-3 border-b-1 border-light-gray">
          <div>
            <p className="text-marine-blue font-bold">
              {chosenPlan.name} ({billingCycle})
            </p>
            <button
              type="button"
              className="underline cursor-pointer"
              onClick={() => setStep(step - 2)}
            >
              change
            </button>
          </div>
          <p className="text-marine-blue font-bold">
            ${chosenPlan.price}
            {billingCycle === "monthly" ? "/mo" : "/yr"}
          </p>
        </div>
        <div className="pt-3">
          {checkedItems.map((item) => (
            <div key={item.id} className="flex justify-between pb-3">
              <p>{item.name}</p>
              <p className="text-marine-blue">
                +$
                {billingCycle === "monthly"
                  ? item.price.monthly + "/mo"
                  : item.price.yearly + "/yr"}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-sm w-[90%] self-center">
        <p>total (per {billingCycle === "monthly" ? "month" : "year"})</p>
        <p className="text-purplish-blue font-bold">
          +$
          {billingCycle === "monthly"
            ? chosenPlan.price +
              checkedItems.reduce(
                (total, item) => total + item.price.monthly,
                0
              ) +
              "/mo"
            : chosenPlan.price +
              checkedItems.reduce(
                (total, item) => total + item.price.yearly,
                0
              ) +
              "/yr"}
        </p>
      </div>
    </div>
  );
};

export default LastStep;
