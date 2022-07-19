import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import { Provider } from "react-redux";
import { HomePage } from './pages/home-page';
import { GamePage } from './pages/game-page';
import { OrderPage } from './pages/order-page';
import { Header } from './componets/header';
import { store } from './redux'


function App() {
  return (
    <Provider store={store} >
      <Router>
      <div className="App">
        <Header></Header>
          <Routes>
            <Route exact path="/" element={<HomePage></HomePage>}></Route>
            <Route exact path="/app/:title" element={<GamePage></GamePage>}></Route>
            <Route exact path="/order" element={<OrderPage></OrderPage>}></Route>

          </Routes>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
