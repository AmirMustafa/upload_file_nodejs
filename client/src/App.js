import React, { useState } from "react";

function App() {
  const [fileData, setFileData] = useState();

  const fileChangeHandler = (e) => {
    setFileData(e.target.files[0]);
  };

  const onSubmitHandler = (e) => {
    console.log("file data ====>", fileData);
    e.preventDefault();

    const data = new FormData();
    data.append("image", fileData); // image key to use in Postman

    const server = "http://localhost:5000";

    // Send reqest to backend - Single upload
    fetch(`${server}/single`, {
      method: "POST",
      body: data,
    })
      .then((result) => {
        console.log("File sent successfully", result);
      })
      .catch((err) => {
        console.log("Something Went Wrong", err);
      });
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
      <br />
      <img
        src="http://localhost:5000/images/1636891838696-XEBIA 1.jpeg"
        alt="S3 file"
        width="800"
      />
    </div>
  );
}

export default App;
