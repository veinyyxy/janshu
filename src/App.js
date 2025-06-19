import Header from "./common/header/header";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./home";
import Detail from "./detail";
import Login from "./login"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/login' exact element={<Login></Login>} />
          <Route path='/write' exact element={<div>Write Page</div>} />
          <Route path='/detail' exact element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
