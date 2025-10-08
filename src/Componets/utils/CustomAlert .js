import React, { useState } from "react";
import CustomAlert from "./ErrorMessage";

function App() {
  const [alertData, setAlertData] = useState({
    show: false,
    type: "success",
    title: "",
    message: "",
  });

  // ✅ Success function
  const showSuccess = (msg) => {
    setAlertData({
      show: true,
      type: "success",
      title: "Success!",
      message: msg,
    });
  };

  // ❌ Error function
  const showError = (msg) => {
    setAlertData({
      show: true,
      type: "error",
      title: "Error!",
      message: msg,
    });
  };

  const closeAlert = () => {
    setAlertData({ ...alertData, show: false });
  };

  return (
    <div className="App">
      <h1>React Static SweetAlert</h1>

      <button onClick={() => showSuccess("Your data has been saved!")}>
        Show Success
      </button>

      <button onClick={() => showError("Something went wrong!")}>
        Show Error
      </button>

      <CustomAlert
        show={alertData.show}
        type={alertData.type}
        title={alertData.title}
        message={alertData.message}
        onConfirm={closeAlert}
      />
    </div>
  );
}

export default App;
