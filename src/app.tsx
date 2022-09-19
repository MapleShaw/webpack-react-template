import React, { useEffect, useRef, useState } from "react";

import "vspace-theme/avatar/index.less";

import "./app.less";

function App() {
  let wrap = useRef(null);
  useEffect(() => {
    if (wrap.current) {
      console.log("peEditor:");
    }
  }, [wrap]);
  return (
    <div className="App" ref={wrap}>
      这是样式变更
      <h2 style={{ background: "#cb0000" }}>捏人系统</h2>
    </div>
  );
}

export { App };

export default App;
