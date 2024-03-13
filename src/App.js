import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import MyFooter from "./components/MyFooter";
// import AlltheBooks from "./components/AllTheBooks";
// import SingleBook from "./components/SingleBook";
import history from "./data/history.json";
import BookList from "./components/BookList";

function App() {
  return (
    <div>
      <MyNav />
      <Welcome />
      {/* <SingleBook book={history[0]} /> */}
      <BookList arrayOfBooks={history} />
      {/* <AlltheBooks /> */}
      <MyFooter />
    </div>
  );
}

export default App;
