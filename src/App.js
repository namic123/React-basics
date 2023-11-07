import React, { useEffect, useState } from "react";
import axios from "axios";

function App(props) {
  // get요청 /api/main1/sub2
  // 받은 값으로 message state 업데이트

  const [customer, setCustomer] = useState({});
  useEffect(() => {
    axios
      .get("/api/main1/sub3")
      .then((response) => response.data)
      .then((data) => setCustomer(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h1>{customer.name}</h1>
      <h1>{customer.id}</h1>
      <h1>{customer.contactName}</h1>
      <h1>{customer.address}</h1>
      <h1>{customer.city}</h1>
      <h1>{customer.postalCode}</h1>
      <h1>{customer.country}</h1>
    </div>
  );
}

export default App;
