import { AddOnType, ThirdStepType } from "../types";
import { motion } from "motion/react";

const ThirdStep = ({
  checkedItems,
  setCheckedItems,
  billingCycle,
}: ThirdStepType) => {
  const addOns = [
    {
      id: "1",
      name: "Online service",
      description: "Access to multiplayer games",
      price: {
        monthly: 1,
        yearly: 10,
      },
    },
    {
      id: "2",
      name: "Larger storage",
      description: "Extra 1TB of cloud save",
      price: {
        monthly: 2,
        yearly: 20,
      },
    },
    {
      id: "3",
      name: "Customizable profile",
      description: "Custom theme on your profile",
      price: {
        monthly: 2,
        yearly: 20,
      },
    },
  ];

  const handleCheckboxChange = (addOn: AddOnType) => {
    setCheckedItems((prev) => {
      const isAlreadyChecked = prev.some((item) => item.id === addOn.id);
      return isAlreadyChecked
        ? prev.filter((item) => item.id !== addOn.id)
        : [...prev, addOn];
    });
  };

  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
    >
      <h1 className="text-2xl text-marine-blue font-bold mb-3">
        Pick adds-ons
      </h1>
      <p className="mb-4">Adds-ons help enhance your gaming experience.</p>

      <div className="flex flex-col gap-4">
        {addOns.map((addOn) => (
          <div
            key={addOn.id}
            className={`flex items-center gap-4 p-2 lg:p-3.5 border rounded-lg
              ${
                checkedItems.some((item) => item.id === addOn.id)
                  ? "border-purplish-blue bg-alabaster"
                  : "border-light-gray"
              }`}
          >
            <input
              type="checkbox"
              name="add-ons"
              id={addOn.id}
              className=""
              checked={checkedItems.some((item) => item.id === addOn.id)}
              onChange={() => handleCheckboxChange(addOn)}
            />
            <div className="flex flex-1 justify-between items-center">
              <div>
                <label
                  htmlFor={addOn.id}
                  className="block text-marine-blue font-medium"
                >
                  {addOn.name}
                </label>
                <p className="text-xs">{addOn.description}</p>
              </div>
              <p className="text-purplish-blue text-xs">
                +$
                {billingCycle === "monthly"
                  ? addOn.price.monthly + "/mo"
                  : addOn.price.yearly + "/yr"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ThirdStep;
