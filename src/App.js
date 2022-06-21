import ComingSoon from "./pages/comingsoon/ComingSoon";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(props) {
  

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<ComingSoon />} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
