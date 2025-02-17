import { useState } from "react";
import FirstStep from "./components/formFields/FirstStep";
import SecondStep from "./components/formFields/SecondStep";
import SideBar from "./components/SideBar";
import ThirdStep from "./components/formFields/ThirdStep";
import LastStep from "./components/formFields/LastStep";

function App() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [chosenPlan, setChosenPlan] = useState<{ name: string; price: number }>(
    {
      name: "Arcade",
      price: 9,
    }
  );
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [checkedItems, setCheckedItems] = useState<
    { id: string; name: string; price: { monthly: number; yearly: number } }[]
  >([]);
  const [choice, setChoice] = useState("arcade");
  const [isValid, setIsValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNextStep = () => {
    if (step === 1 && !isValid) {
      alert("Please fill out all fields correctly before proceeding.");
      return;
    }
    if (step === 4) return;
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    if (step === 1) return;
    setStep(step - 1);
  };

  const handleConfirm = () => {
    setIsSubmitted(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const renderStepContent = () => {
    if (isSubmitted) {
      return (
        <div className="flex flex-col items-center p-6 text-cool-gray">
          <img
            src="images/icon-thank-you.svg"
            alt="Thank you icon"
            className="mt-11 mb-5 w-12"
          />
          <h1 className="text-marine-blue text-2xl font-bold mb-3">
            Thank you!
          </h1>
          <p className="text-center mb-5">
            Thanks for confirming your subscription! <br />
            We hope you have fun using our platform. If you ever need support,
            please feel free to email us at support@loremgaming.com.
          </p>
        </div>
      );
    }

    switch (step) {
      case 1:
        return (
          <FirstStep
            name={name}
            email={email}
            phone={phone}
            setName={setName}
            setEmail={setEmail}
            setPhone={setPhone}
            setIsValid={setIsValid}
          />
        );
      case 2:
        return (
          <SecondStep
            setChosenPlan={setChosenPlan}
            billingCycle={billingCycle}
            setBillingCycle={setBillingCycle}
            choice={choice}
            setChoice={setChoice}
          />
        );
      case 3:
        return (
          <ThirdStep
            checkedItems={checkedItems}
            setCheckedItems={setCheckedItems}
            billingCycle={billingCycle}
          />
        );
      case 4:
        return (
          <LastStep
            chosenPlan={chosenPlan}
            billingCycle={billingCycle}
            checkedItems={checkedItems}
            step={step}
            setStep={setStep}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="font-ubuntu bg-magnolia min-h-screen flex flex-col">
      <form
        className="w-full max-w-md mx-auto flex flex-col min-h-screen"
        onSubmit={handleSubmit}
      >
        <SideBar step={step} />

        <div className="px-4 flex-1 overflow-y-auto -mt-17 mb-20">
          <div className="bg-white rounded-lg shadow-lg">
            {renderStepContent()}
          </div>
        </div>

        {!isSubmitted && (
          <div className="flex justify-between p-4 max-w-md bg-white">
            <button
              type="button"
              className={`text-cool-gray ${step > 1 ? "visible" : "invisible"}`}
              onClick={handlePreviousStep}
            >
              Go back
            </button>
            {step === 4 ? (
              <button
                type="button"
                className="text-magnolia p-2 px-3 rounded-md bg-purplish-blue"
                onClick={handleConfirm}
              >
                Confirm
              </button>
            ) : (
              <button
                type="button"
                className="text-magnolia p-2 px-3 rounded-md bg-marine-blue"
                onClick={handleNextStep}
              >
                Next Step
              </button>
            )}
          </div>
        )}
      </form>
    </div>
  );
}

export default App;
