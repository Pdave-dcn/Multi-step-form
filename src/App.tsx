import { useState } from "react";
import FirstStep from "./components/formFields/FirstStep";
import SecondStep from "./components/formFields/SecondStep";
import SideBar from "./components/SideBar";
import ThirdStep from "./components/formFields/ThirdStep";
import LastStep from "./components/formFields/LastStep";

function App() {
  const [step, setStep] = useState(1);
  const [chosenPlan, setChosenPlan] = useState<{ name: string; price: number }>(
    { name: "Arcade", price: 9 }
  );
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [checkedItems, setCheckedItems] = useState<
    { id: string; name: string; price: number }[]
  >([]);

  const handleNextStep = () => {
    if (step === 4) return;
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    if (step === 1) return;
    setStep(step - 1);
  };
  return (
    <div className="font-ubuntu bg-magnolia min-h-screen flex flex-col">
      <div className="w-full max-w-md mx-auto flex flex-col min-h-screen">
        <SideBar />

        <div className="px-4 flex-1 overflow-y-auto -mt-17 mb-20">
          <div className="bg-white rounded-lg shadow-lg">
            {step === 1 ? (
              <FirstStep />
            ) : step === 2 ? (
              <SecondStep
                setChosenPlan={setChosenPlan}
                billingCycle={billingCycle}
                setBillingCycle={setBillingCycle}
              />
            ) : step === 3 ? (
              <ThirdStep
                checkedItems={checkedItems}
                setCheckedItems={setCheckedItems}
              />
            ) : step === 4 ? (
              <LastStep
                chosenPlan={chosenPlan}
                billingCycle={billingCycle}
                checkedItems={checkedItems}
                step={step}
                setStep={setStep}
              />
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="flex justify-between p-4 max-w-md bg-white">
          <button
            type="button"
            className="text-cool-gray"
            onClick={() => {
              handlePreviousStep();
            }}
          >
            Go back
          </button>
          <button
            type="button"
            className="text-magnolia bg-marine-blue p-2 px-3 rounded-md"
            onClick={() => {
              handleNextStep();
            }}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
