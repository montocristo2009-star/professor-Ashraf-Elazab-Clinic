import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AiAssistant from './AiAssistant';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai-assistant" element={<AiAssistant />} />
      </Routes>
    </Router>
  );
};

export default App;