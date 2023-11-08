import React, { useEffect, useState } from "react";
import { Box, Select, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";

function App(props) {
  // 직원번호를 선택하면 직원의 이름이 출력
  // /api/main1/sub5?id=5
  // spring boot의 메소드도 작성
  const [employeeId, setEmployeeId] = useState(0);
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/main1/sub5?id=" + employeeId)
      .then((response) => response.data)
      .then((data) => setEmployee(data))
      .catch((error) => setEmployee(null))
      .finally(setLoading(false));
  }, [employeeId]);
  return (
    <div>
      <Select
        placeholder="직원의 번호를 선택하세요."
        onChange={(e) => setEmployeeId(e.target.value)}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </Select>
      <Box>
        {loading === true ? (
          <Spinner />
        ) : employee === null ? (
          <Text>해당 직원은 존재하지 않습니다.</Text>
        ) : (
          <Text>
            직원의 이름: {employee.lastName} {employee.firstName}, 생일은:
            {employee.birthDate}
          </Text>
        )}
      </Box>
    </div>
  );
}

export default App;
