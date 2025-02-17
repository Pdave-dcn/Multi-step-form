export type FirstStepType = {
  name: string;
  email: string;
  phone: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
};

export type SecondStepType = {
  setChosenPlan: React.Dispatch<
    React.SetStateAction<{
      name: string;
      price: number;
    }>
  >;
  billingCycle: string;
  setBillingCycle: React.Dispatch<React.SetStateAction<string>>;
  choice: string;
  setChoice: React.Dispatch<React.SetStateAction<string>>;
};

export type AddOnType = {
  id: string;
  name: string;
  price: { monthly: number; yearly: number };
};

export type ThirdStepType = {
  checkedItems: AddOnType[];
  setCheckedItems: React.Dispatch<React.SetStateAction<AddOnType[]>>;
  billingCycle: string;
};

export type LastStepType = {
  chosenPlan: {
    name: string;
    price: number;
  };
  billingCycle: string;
  checkedItems: {
    id: string;
    name: string;
    price: { monthly: number; yearly: number };
  }[];
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};
