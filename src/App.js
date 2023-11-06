import React, { useState } from "react";
import { Box, Button, ListItem, UnorderedList } from "@chakra-ui/react";

function App(props) {
  const [foods, setFoods] = useState([]);
  function handleButtonClick(food) {
    setFoods([...foods, food]);
  }

  function handleRemoveButtonClick(index) {
    console.log(index + "번 째 아이템 지우기");
    // const nextFoods = [...foods];

    // splice()
    /*    // splice는 배열을 변경하는 데 사용(추가,제거 또는 교체)
    // 1번쨰 인덱스에는 변경을 시작할 인덱스
    // 2번째 인덱스는 제거할 요소의 개수
    // 그 뒤에 나요는 배열은 배열에 추가될 요소들이다.
    // nextFoods.splice(index, 1);*/

    // filter()
    // nextFoods는 필터링 결과를 저장하는 '새' 배열이므로, 리렌더링 가능
    // const nextFoods = foods.filter((item,i)=>i!=index);

    setFoods(foods.filter((item, i) => i != index));
  }

  return (
    <div>
      <Button onClick={() => handleButtonClick("커피")}>커피</Button>
      <Button onClick={() => handleButtonClick("케잌")}>케잌</Button>
      <Button onClick={() => handleButtonClick("아이스")}>아이스크림</Button>
      <Box>
        <UnorderedList>
          {foods.map((item, index) => (
            <ListItem key={index}>
              {item}
              <Button onClick={() => handleRemoveButtonClick(index)}>
                지우기
              </Button>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </div>
  );
}

export default App;
