import React, { useState } from "react";
import { Footer } from "../footer/Footer";

export const MainMenu = () => {
  const [menu, setMenu] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuColour, setMenuColour] = useState('blue');

  const handleMenuComponents = (menu, isOpen, colour) => {
    setMenu(menu);
    setMenuColour(colour)
    setMenuOpen(isOpen);
  };

  const renderActiveMenu = () => {
    if (menu === 0) {
      return <h1 style={{ color: "hotpink", marginRight: "30px" }}>ME</h1>;
    }

    if (menu === 1) {
      return (
        <h1 style={{ color: "#EFEA5A", marginRight: "30px" }}>PROJECTS</h1>
      );
    }

    if (menu === 2) {
      return <h1 style={{ color: "#13B479", marginRight: "30px" }}>BLOG</h1>;
    }
  };

  return (
    <div style={{ height: "100%", display: "flex", paddingLeft: 30 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center"
        }}
      >
        <button onClick={() => handleMenuComponents(0, true, '#048BA8')}>
          <p style={{  margin: 0 }}>ME</p>
        </button>
        <button onClick={() => handleMenuComponents(1, true, '#13B479')}>
          <p style={{ margin: 0 }}>PROJECTS</p>
        </button>
        <button onClick={() => handleMenuComponents(2, true, '#EFEA5A')}>
          <p style={{ margin: 0 }}>BLOG</p>
        </button>
        <Footer />
      </div>
      {menuOpen ? (
        <div
          style={{
            clipPath: "polygon(30% 0, 100% 0, 100% 100%, 00% 100%)",
            backgroundColor: menuColour,
            width: "100%",
            height: "100%"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: 'center',
            }}
          >
          <button onClick={() => setMenuOpen(false)}>x</button>
          {renderActiveMenu()}
          </div>
        </div>
      ) : null}
    </div>
  );
};
