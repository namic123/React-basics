import React from "react";
import { List, ListItem } from "@chakra-ui/react";

function App(props) {
  const arr = ["pizza", "돈까스", "햄버거", "김치찌개"];
  let listItems = arr.map((item) => <ListItem>{item}</ListItem>);
  const arr2 = ["a", "b", "c"];
  const playerArr = ["손흥민", "이강인", "김민재"];

  return (
    <div>
      <List>{listItems}</List>
      <List>
        {playerArr.map((item) => (
          <ListItem>{item}</ListItem>
        ))}
      </List>
      <List>
        {arr2.map((item) => (
          <ListItem>{item}</ListItem>
        ))}
      </List>
    </div>
  );
}

export default App;
