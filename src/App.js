import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { Box, Button, Flex } from "@chakra-ui/react";

function HomeComponent() {
  // 경로 이동시 useNavigate hook 사용 해야함.
  const navigate = useNavigate(); // 새로고침 없이 컴포넌트의 이동을 가능하게 하는 메서드(Link Component와 유사)
  // js 코드간 이동이 필요할 떄는 LinkComponent 사용
  // view의 이동은 useNavigate 사용
  return (
    <>
      <Box>
        <Flex gap={"10px"}>
          {/* 경로 이동시 js코드를 그냥 쓰면 안됨 */}
          <Box>
            <Button onClick={() => (window.location.href = "/apath")}>
              a로 가기
            </Button>
          </Box>
          <Box>
            <Button onClick={() => (window.location.href = "/bpath")}>
              b로 가기
            </Button>
          </Box>
          <Box>
            <Button onClick={() => navigate("/apath")}>a로 가기</Button>
          </Box>
          <Box>
            <Button onClick={() => navigate("/bpath")}>b로 가기</Button>
          </Box>
        </Flex>
        <Outlet />
      </Box>
    </>
  );
}

function AComp() {
  return (
    <>
      <Box>에이 컴포넌트</Box>
    </>
  );
}

function BComp() {
  return (
    <>
      <Box>비 컴포넌트</Box>
    </>
  );
}

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeComponent />}>
      <Route path="apath" element={<AComp />}></Route>
      <Route path="bpath" element={<BComp />}></Route>
    </Route>,
  ),
);
function App(props) {
  return <RouterProvider router={routes} />;
}

export default App;
