import React, { useState, useEffect } from 'react';
import './index.css';
import LoadingScreen from './components/LoadginScreen/LoadingScreen.jsx';
import HorizontalScroll from './components/HorizontalScroll/HorizontalScroll.jsx';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="App">
      {isLoading ? <LoadingScreen /> : <HorizontalScroll />}
    </div>
  );
}