import React, { createContext, useState, useContext } from "react";

const ZoomContext = createContext();
export const useZoom = () => useContext(ZoomContext);

export const ZoomProvider = ({ children }) => {
  const [zoom, setZoom] = useState(false);

  return (
    <ZoomContext.Provider value={{ zoom, setZoom }}>
      {children}
    </ZoomContext.Provider>
  );
};

const ActiveContext = createContext();
export const useActive = () => useContext(ActiveContext);

export const ActiveProvider = ({ children }) => {
  const [active, setActive] = useState("hutiaoxia");

  return (
    <ActiveContext.Provider value={{ active, setActive }}>
      {children}
    </ActiveContext.Provider>
  );
};
