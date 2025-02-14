type AddOnType = {
  id: string;
  name: string;
  price: number;
};

type ThirdStepType = {
  checkedItems: AddOnType[];
  setCheckedItems: React.Dispatch<React.SetStateAction<AddOnType[]>>;
};

const ThirdStep = ({ checkedItems, setCheckedItems }: ThirdStepType) => {
  const addOns = [
    {
      id: "1",
      name: "Online service",
      description: "Access to multiplayer games",
      price: 1,
    },
    {
      id: "2",
      name: "Larger storage",
      description: "Extra 1TB of cloud save",
      price: 2,
    },
    {
      id: "3",
      name: "Customizable profile",
      description: "Custom theme on your profile",
      price: 2,
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
    <div className="p-6 text-cool-gray">
      <h1 className="text-2xl text-marine-blue font-bold mb-3">
        Pick adds-ons
      </h1>
      <p className="mb-4">Adds-ons help enhance your gaming experience.</p>

      <div className="flex flex-col gap-4">
        {addOns.map((addOn) => (
          <div
            key={addOn.id}
            className={`flex items-center gap-4 p-2 border rounded-lg
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
              <p className="text-purplish-blue text-xs">+${addOn.price}/mo</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThirdStep;
