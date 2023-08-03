import './App.css';
import TopBar from './header/TopBar';
import RentPage from './rent/RentPage';

const App = () => {
  return (
    <div className="App">
      <TopBar/>
      <RentPage />
    </div>
  );
}

export default App;
