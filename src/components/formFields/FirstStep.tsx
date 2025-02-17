import { useState, useEffect } from "react";
import { FirstStepType } from "../types";

const FirstStep = ({
  name,
  email,
  phone,
  setName,
  setEmail,
  setPhone,
  setIsValid,
}: FirstStepType) => {
  const [errors, setErrors] = useState<{
    name: string;
    email: string;
    phone: string;
  }>({
    name: "",
    email: "",
    phone: "",
  });

  const [touched, setTouched] = useState<{
    name: boolean;
    email: boolean;
    phone: boolean;
  }>({
    name: false,
    email: false,
    phone: false,
  });

  const validateField = (field: "name" | "email" | "phone", value: string) => {
    let errorMessage = "";

    if (field === "name") {
      if (!value.trim()) {
        errorMessage = "Name is required";
      } else if (value.trim().length < 3) {
        errorMessage = "Name must be at least 3 characters";
      }
    }

    if (field === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        errorMessage = "Invalid email address";
      }
    }

    if (field === "phone") {
      const phoneRegex = /^\+?[0-9]{1,4}[\s-]?[0-9]{1,3}[\s-]?[0-9]{1,4}$/;
      if (!phoneRegex.test(value)) {
        errorMessage = "Invalid phone number";
      }
    }

    setErrors((prevErrors) => ({ ...prevErrors, [field]: errorMessage }));

    return errorMessage === "";
  };

  const handleBlur = (field: "name" | "email" | "phone", value: string) => {
    setTouched((prevTouched) => ({ ...prevTouched, [field]: true }));
    validateField(field, value);
  };

  useEffect(() => {
    const isValid =
      validateField("name", name) &&
      validateField("email", email) &&
      validateField("phone", phone);
    setIsValid(isValid);
  }, [name, email, phone]);

  return (
    <div className="">
      <h1 className="text-2xl text-marine-blue font-bold mb-3 lg:mb-1.5">
        Personal info
      </h1>
      <p className="mb-4 lg:mb-5.5">
        Please provide your name, email address, and phone number.
      </p>

      <div className="flex flex-col gap-3.5">
        {[
          {
            label: "Name",
            type: "text",
            id: "name",
            state: name,
            setState: setName,
          },
          {
            label: "Email Address",
            type: "email",
            id: "email",
            state: email,
            setState: setEmail,
          },
          {
            label: "Phone Number",
            type: "tel",
            id: "phone",
            state: phone,
            setState: setPhone,
          },
        ].map(({ label, type, id, state, setState }) => (
          <div key={id} className="flex flex-col">
            <div className="flex justify-between">
              <label htmlFor={id} className="text-marine-blue">
                {label}
              </label>
              {touched[id as keyof typeof touched] &&
                errors[id as keyof typeof errors] && (
                  <p className="text-red-500 text-xs">
                    {errors[id as keyof typeof errors]}
                  </p>
                )}
            </div>
            <input
              type={type}
              id={id}
              placeholder={
                id === "name"
                  ? "e.g. Stephen King"
                  : id === "email"
                  ? "e.g. stephenking@lorem.com"
                  : "e.g. +1 234 567 890"
              }
              className={`border p-1 px-4 font-medium text-marine-blue rounded-sm border-light-gray ${
                touched[id as keyof typeof touched] &&
                errors[id as keyof typeof errors]
                  ? "outline-red-500"
                  : "outline-purplish-blue"
              }`}
              value={state}
              onChange={(e) => setState(e.target.value)}
              onBlur={(e) =>
                handleBlur(id as "name" | "email" | "phone", e.target.value)
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstStep;
