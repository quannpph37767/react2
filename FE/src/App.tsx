import { Route, Routes } from "react-router-dom";
import "./App.css";
import ListProduct from "./pages/Admins/ListProduct";

function App() {
  return (
    <>
      <Routes>
        {/* {Client} */}
        <Route path="/">
          <Route />
        </Route>
        {/* {Admin} */}
        <Route path="/admin" />
        <Route path="/admin/product" element={<ListProduct />} />
      </Routes>
    </>
  );
}

export default App;
