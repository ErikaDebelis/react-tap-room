import Header from './Header';
import KegControl from './KegControl';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/App.css';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Header />
        <KegControl />
      </div>
    </React.Fragment>
  );
}

export default App;
