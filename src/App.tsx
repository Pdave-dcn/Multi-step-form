import { useState } from "react";
import FirstStep from "./components/formFields/FirstStep";
import SecondStep from "./components/formFields/SecondStep";
import SideBar from "./components/SideBar";
import ThirdStep from "./components/formFields/ThirdStep";
import LastStep from "./components/formFields/LastStep";
import { motion, AnimatePresence } from "motion/react";

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
        <AnimatePresence mode="wait">
          <motion.div
            key="thank-you"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
            className="flex flex-col items-center p-6 text-cool-gray max-w-lg"
          >
            <img
              src="images/icon-thank-you.svg"
              alt="Thank you icon"
              className="mt-11 mb-5 w-12 lg:w-14"
            />
            <h1 className="text-marine-blue text-2xl font-bold mb-3">
              Thank you!
            </h1>
            <p className="text-center mb-5">
              Thanks for confirming your subscription! We hope you have fun
              using our platform. If you ever need support, please feel free to
              email us at support@loremgaming.com.
            </p>
          </motion.div>
        </AnimatePresence>
      );
    }

    return (
      <AnimatePresence mode="wait">
        {step === 1 && (
          <FirstStep
            key="step1"
            name={name}
            email={email}
            phone={phone}
            setName={setName}
            setEmail={setEmail}
            setPhone={setPhone}
            setIsValid={setIsValid}
          />
        )}
        {step === 2 && (
          <SecondStep
            key="step2"
            setChosenPlan={setChosenPlan}
            billingCycle={billingCycle}
            setBillingCycle={setBillingCycle}
            choice={choice}
            setChoice={setChoice}
          />
        )}
        {step === 3 && (
          <ThirdStep
            key="step3"
            checkedItems={checkedItems}
            setCheckedItems={setCheckedItems}
            billingCycle={billingCycle}
          />
        )}
        {step === 4 && (
          <LastStep
            key="step4"
            chosenPlan={chosenPlan}
            billingCycle={billingCycle}
            checkedItems={checkedItems}
            step={step}
            setStep={setStep}
          />
        )}
      </AnimatePresence>
    );
  };

  return (
    <div className="font-ubuntu bg-magnolia min-h-screen flex flex-col lg:justify-center">
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full mx-auto flex flex-col min-h-screen lg:min-h-0 lg:bg-white lg:flex-row lg:rounded-lg lg:shadow-lg lg:w-[65%] lg:h-[550px]"
        onSubmit={handleSubmit}
      >
        <SideBar step={step} />

        <div className=" flex flex-col justify-center lg:p-6 lg:px-20 lg:pt-15">
          <div className="px-4 flex-1 overflow-y-auto -mt-17 mb-20 lg:mt-0 lg:px-0">
            <div className="bg-white rounded-lg shadow-lg lg:shadow-none p-6 lg:p-0 text-cool-gray overflow-hidden">
              {renderStepContent()}
            </div>
          </div>

          {!isSubmitted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex justify-between p-4 lg:p-0 max-w-md bg-white"
            >
              <button
                type="button"
                className={`text-cool-gray cursor-pointer ${
                  step > 1 ? "visible" : "invisible"
                }`}
                onClick={handlePreviousStep}
              >
                Go back
              </button>
              {step === 4 ? (
                <button
                  type="button"
                  className="text-magnolia p-2 px-3 rounded-md cursor-pointer bg-purplish-blue"
                  onClick={handleConfirm}
                >
                  Confirm
                </button>
              ) : (
                <button
                  type="button"
                  className="text-magnolia p-2 px-3 rounded-md cursor-pointer bg-marine-blue"
                  onClick={handleNextStep}
                >
                  Next Step
                </button>
              )}
            </motion.div>
          )}
        </div>
      </motion.form>
    </div>
  );
}

export default App;
