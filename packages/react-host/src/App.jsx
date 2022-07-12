import React, {useRef, useEffect} from "react";
import ReactDOM from "react-dom";

import placeHeader from 'remote/placeHeader';
import Home from './components/Home'
import "./index.scss";

const App = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    placeHeader(headerRef.current)
  }, [])

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div ref={headerRef}></div>
      <Home />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById("app"));
