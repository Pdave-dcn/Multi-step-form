const SideBar = ({ step }: { step: number }) => {
  return (
    <div>
      <div className="bg-[url('/images/bg-sidebar-mobile.svg')] bg-cover bg-center h-40 w-full flex justify-center">
        <div className="flex mt-7 gap-5">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className={`w-[30px] h-[30px] rounded-full  flex items-center justify-center ${
                step === num
                  ? "bg-light-blue text-marine-blue"
                  : "border border-white  text-white"
              }`}
            >
              {num}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
