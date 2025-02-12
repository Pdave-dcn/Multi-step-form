const SideBar = () => {
  return (
    <div>
      <div className="bg-[url('/images/bg-sidebar-mobile.svg')] bg-cover bg-center h-40 w-full flex justify-center">
        <div className="flex mt-7 gap-5">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className="w-[30px] h-[30px] rounded-full bg-light-blue flex items-center justify-center"
            >
              {step}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
