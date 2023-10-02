import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import MainPage from "./pages/MainPage.jsx";
import styled from "styled-components";
import AddExercise from "./pages/AddExercise.jsx";
import { ModalProvider } from "./librarys/context.jsx";
import PlayerPage from "./pages/PlayerPage.jsx";
import store from "./redux/store.js";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import "./App.scss";

const Container = styled.div`
  background-color: transparent;
  height: 100%;
`;

const routerList = [
  { path: "/", element: <MainPage /> },
  { path: "/program/:id/play", element: <PlayerPage />, role: 1 },
  { path: "/register", element: <AddExercise />}
];

routerList.forEach((item) => {
  if (item.role && item.role > 0) {
    item.element = (
      <ProtectedRoute role={item.role} to={item.redirect}>
        {item.element}
      </ProtectedRoute>
    );
  }
});

function App() {



  return (
    <Provider store={store}>
      <ModalProvider>
        <Container>
          <Router>
            <Routes>
              {routerList.map((item, index) => (
                <Route key={index} path={item.path} element={item.element} />
              ))}
            </Routes>
          </Router>
        </Container>
      </ModalProvider>
    </Provider>
  );
}

export default App;
