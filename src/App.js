import React, { useEffect, useState } from "react";
import axios from "axios";

function App(props) {
  const [myState, setMyState] = useState("");
  useEffect(() => {
    axios
      .get("/api/main1/sub1")
      .then((response) => response.data) // 응답 데이터를 가져옴.
      .then((data) => setMyState(data)) // 응답 데이터의 상태 저장
      .catch((error) => console.log(error));
  }, []);

  return <div>{myState}</div>;
}

export default App;
