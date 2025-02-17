import { LastStepType } from "../types";
import { motion } from "motion/react";

const LastStep = ({
  chosenPlan,
  billingCycle,
  checkedItems,
  step,
  setStep,
}: LastStepType) => {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
      className="flex flex-col"
    >
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
        <p>Total (per {billingCycle === "monthly" ? "month" : "year"})</p>
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
    </motion.div>
  );
};

export default LastStep;
