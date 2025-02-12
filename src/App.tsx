import FirstStep from "./components/formFields/FirstStep";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="font-ubuntu bg-magnolia min-h-screen flex flex-col items-center">
      <div className="relative w-full max-w-sm">
        <SideBar />

        <div className="absolute left-1/2 -translate-x-1/2 top-23 w-[90%] mx-auto bg-white rounded-lg shadow-lg">
          <FirstStep />
        </div>
        <div className="fixed w-full bottom-0 flex justify-between p-4 bg-white ">
          <button type="button" className="text-cool-gray">
            Go back
          </button>
          <button
            type="button"
            className="text-magnolia bg-marine-blue p-2 px-3 rounded-md"
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
