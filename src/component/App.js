import React from 'react';
import Header from './Header';
import Footer from './Footer';
import KegControl from './KegControl';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/App.css';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Header />
        <div className = "main-body">
        <KegControl />
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;