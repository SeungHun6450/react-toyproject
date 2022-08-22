import { Provider } from "react-redux";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import MyLocation from "./pages/MyLocation";
import AllLocation from "./pages/AllLocation";
import FavoriteLocation from "./pages/FavoriteLocation";
import store from "./modules";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyLocation />} />
          <Route path="/allLocation" element={<AllLocation />} />
          <Route path="/favoriteLocation" element={<FavoriteLocation />} />
          <Route path="/*" element={<p>Not Found</p>} />
        </Routes>
        <Link to="/">내 지역보기</Link> |
        <Link to="/allLocation">전체 지역보기</Link> |
        <Link to="/favoriteLocation">즐겨찾기</Link>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
