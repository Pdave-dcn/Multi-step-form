import FirstStep from "./components/formFields/FirstStep";
import SecondStep from "./components/formFields/SecondStep";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="font-ubuntu bg-magnolia min-h-screen flex flex-col">
      <div className="w-full max-w-md mx-auto flex flex-col min-h-screen">
        <SideBar />

        <div className="px-4 flex-1 overflow-y-auto -mt-17 mb-20">
          <div className="bg-white rounded-lg shadow-lg">
            <div className="hidden">
              <FirstStep />
            </div>
            <SecondStep />
          </div>
        </div>

        <div className="flex justify-between p-4 max-w-md bg-white">
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
