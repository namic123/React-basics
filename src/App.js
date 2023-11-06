import { useState } from "react";
import { Box, Button, List, ListItem, OrderedList } from "@chakra-ui/react";

function App() {
  const [items, setItems] = useState([]);
  function handleButtonClick(item) {
    // const newItems = [...items];
    // newItems.push(item);

    // 리팩토링 1
    // const newItems = [...items, item];
    // setItems(newItems);

    // 리팩토링 2
    setItems([...items, item]);
  }
  return (
    <>
      {/*Button[onClick]*5>lorem1*/}
      <Button onClick={() => handleButtonClick("커피")}>커피</Button>
      <Button onClick={() => handleButtonClick("케잌")}>케잌</Button>
      <Button onClick={() => handleButtonClick("아이스크림")}>
        아이스크림!
      </Button>
      <Button onClick={() => handleButtonClick("크로아상")}>크로아상</Button>
      <Button onClick={() => handleButtonClick("단팥빵")}>단팥빵</Button>

      <Box>
        <OrderedList>
          {items.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </OrderedList>
      </Box>
    </>
  );
}

export default App;
