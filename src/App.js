import React from "react";
import { List, ListItem } from "@chakra-ui/react";

function App(props) {
  const arr = ["pizza", "돈까스", "햄버거", "김치찌개"];
  let listItems = arr.map((item, index) => (
    <ListItem key={index}>{item}</ListItem>
  ));
  const arr2 = ["a", "b", "c"];
  const playerArr = ["손흥민", "이강인", "김민재"];
const arr4 = {
  {id:0, name:"라떼"},
  {id:1, name:"피자"},
  {id:2, name:"치킨"},
}
  return (
    <div>
      <List>{listItems}</List>
      <List>
        {playerArr.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </List>
      <List>
        {arr2.map((item, index) => (
          <ListItem key={index}>
            {item},{index}
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default App;
