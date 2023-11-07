import React, { useEffect, useState } from "react";
import axios from "axios";

function App(props) {
  // get요청 /api/main1/sub2
  // 받은 값으로 message state 업데이트

  const [message, setMessage] = useState("");
  useEffect(() => {
    axios
      .get("/api/main1/sub2")
      .then((response) => response.data)
      .then((data) => setMessage(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
