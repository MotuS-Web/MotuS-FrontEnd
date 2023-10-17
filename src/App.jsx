import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import MainPage from "./pages/MainPage.jsx";
import styled from "styled-components";
import AddExercise from "./pages/AddExercise.jsx";
import { ModalProvider } from "./librarys/context.jsx";
import PlayerPage from "./pages/PlayerPage.jsx";
import store from "./redux/store.js";
import "./App.scss";

const Container = styled.div`
  background-color: transparent;
  height: 100%;
`;

const routeList = [
  { path: "/", element: <MainPage /> },
  { path: "/program/:id", element: <PlayerPage /> },
  { path: "/register", element: <AddExercise /> },
].map((item, index) => (
  <Route key={index} path={item.path} element={item.element} />
));

function App() {
  return (
    <Provider store={store}>
      <ModalProvider>
        <Container>
          <Router>
            <Routes>{routeList}</Routes>
          </Router>
        </Container>
      </ModalProvider>
    </Provider>
  );
}

export default App;
