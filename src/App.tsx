import React from 'react';

// <> Custom components
import ErrorBoundary from './components/ErrorBoundary';
// import Header from './components/Header';
import Resume from './components/Resume';

// css
// import './css/bootstrap.css';
// import './css/palette.css';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <div>
        <ErrorBoundary>
          <Resume />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
