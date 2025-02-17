import { motion } from "motion/react";

const SideBar = ({ step }: { step: number }) => {
  const stepsIndicator = [
    { number: 1, step: "STEP 1", description: "YOUR INFO" },
    { number: 2, step: "STEP 2", description: "SELECT PLAN" },
    { number: 3, step: "STEP 3", description: "ADD-ONS" },
    { number: 4, step: "STEP 4", description: "SUMMARY" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="lg:p-3"
    >
      <div className="bg-[url('/images/bg-sidebar-mobile.svg')] lg:bg-[url('/images/bg-sidebar-desktop.svg')] bg-cover bg-center h-40 lg:h-full w-full flex justify-center lg:rounded-lg lg:p-7">
        <div className="flex mt-7 gap-5 lg:flex-col lg:gap-3">
          {stepsIndicator.map((indicator) => (
            <div
              key={indicator.number}
              className="lg:flex gap-4 items-center lg:mr-10 lg:mb-6 lg:-mt-3.5"
            >
              <div
                className={`w-[30px] h-[30px] lg:w-[36px] lg:h-[36px] rounded-full flex items-center justify-center ${
                  step === indicator.number
                    ? "bg-light-blue text-marine-blue"
                    : "border border-white  text-white"
                }`}
              >
                {indicator.number}
              </div>
              <div className="hidden lg:block tex">
                <h2 className="lg:text-[0.7rem] text-light-gray">
                  {indicator.step}
                </h2>
                <h1 className="text-white font-semibold text-[0.8rem]">
                  {indicator.description}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SideBar;
