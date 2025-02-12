const FormFields = () => {
  return (
    <form className="p-6 w-[85%] bg-white  text-cool-gray">
      <h1 className="text-2xl text-marine-blue font-bold mb-3">
        Personal info
      </h1>
      <p className="mb-4">
        Please provide your name, email address and phone number
      </p>

      <div className="flex flex-col gap-3.5">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-marine-blue">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="e.g. Stephen King"
            className="border p-1 px-4 outline-purplish-blue rounded-sm"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-marine-blue">
            Email Address
          </label>
          <input
            type="email"
            name=""
            id="email"
            placeholder="e.g. stephenking@lorem.com"
            className="border p-1 px-4 outline-purplish-blue rounded-sm"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-marine-blue">
            Phone Number
          </label>
          <input
            type="tel"
            name=""
            id="phone"
            placeholder="e.g. +1 234 567 890"
            className="border p-1 px-4 outline-purplish-blue rounded-sm"
          />
        </div>
      </div>
    </form>
  );
};

export default FormFields;
