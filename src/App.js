import './App.css';
import Header from './Header/Header';
import logo from './logo.svg';

export default function App() {
  return (
    <div className="App">
      <Header />

      <div>
        <div>
          {' '}
          <p> Dive into exciting categories. Discover new websites.</p>
          <img alt=""></img>
        </div>

        <div></div>
      </div>
      <footer>
        <div>
          <h5> Product</h5>
          Add Site Discover Categories
        </div>

        <div>
          <h5>Company</h5>
        </div>

        <div>
          <h5>Support</h5>
        </div>

        <div>
          <h5>Follow</h5>
        </div>
      </footer>
    </div>
  );
}
