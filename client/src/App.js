import React, { useState } from "react";

function App() {
  const [fileData, setFileData] = useState();

  const fileChangeHandler = (e) => {
    setFileData(e.target.files[0]);
  };

  const onSubmitHandler = (e) => {
    console.log("file data ====>", fileData);
    e.preventDefault();
  };

  return (
    <div className="App">
      <h1>Uploading Files using Multer</h1>
      <form onSubmit={onSubmitHandler}>
        <input type="file" onChange={fileChangeHandler} />
        <br />
        <br />
        <button type="submit">Send to backend</button>
      </form>
    </div>
  );
}

export default App;
