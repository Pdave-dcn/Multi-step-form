# Multi-Step Form

This project is a multi-step form wizard built with React and Motion for smooth page transitions. It guides users through several steps to collect personal information, choose a plan, select add-ons, and finally review their selections.

## Table of Contents

- [Usage](#usage)
- [Screenshots](#screenshots)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [License](#license)

## Usage

The form guides users through four distinct steps:

- **Personal Info (App.tsx & FirstStep.tsx):** Users enter their name, email, and phone number. Input validation ensures all fields are correctly filled.
- **Choose Plan (SecondStep.tsx):** Users select a plan (Arcade, Advanced, or Pro) and toggle between monthly or yearly billing.
- **Pick Add-ons (ThirdStep.tsx):** Users can select additional features (add-ons) to enhance their experience.
- **Review & Confirm (LastStep.tsx):** Users review their choices and the total price before confirming their subscription.

Transition animations between steps are managed with Motion, providing a smooth and responsive user experience.

## Screenshots

Here are some screenshots demonstrating the form in action:

- **Step 1: Personal Information**

  ![Personal Info](./screenshots/desktop-design-step-1.jpg)

- **Step 2: Choose Plan**

  ![Choose Plan](./screenshots/desktop-design-step-2-monthly.jpg)

- **Step 3: Pick Add-ons**

  ![Pick Add-ons](./screenshots/mobile-design-step-3-yearly.jpg)

- **Step 4: Review & Confirm**

  ![Review & Confirm](./screenshots/mobile-design-step-4-yearly.jpg)

## Project Structure

- **App.tsx:** The main component managing step navigation, form submission, and rendering the sidebar.
- **FirstStep.tsx:** Handles personal information with validation logic.
- **SecondStep.tsx:** Allows users to choose a plan and toggle billing cycles.
- **ThirdStep.tsx:** Presents optional add-ons to the user.
- **LastStep.tsx:** Reviews user selections and calculates the total cost.

## Technologies

- React
- TypeScript
- Motion (for animations)
- Tailwind CSS (for styling)

## License

This project is licensed under the MIT License.
