import Box, { color as boxColor } from "./component/Box";
import Container, { color as conColor } from "./component/Container";

function App() {
  return (
    <div>
      <Box style={{ color: boxColor }} />
      <Container style={{ color: conColor }} />
    </div>
  );
}

export default App;
