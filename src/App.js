import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Box } from "@chakra-ui/react";

function HomeComponent() {
  return (
    <>
      <Box>
        공통된 요소들
        <Outlet />{" "}
        {/*하위 라우터의 element가 가진 컴포넌트를 view해주는 세그먼트*/}
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
