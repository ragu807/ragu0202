import React, { Component } from "react";
import UserContext from "./UserContext";

class ThemeSwitcher extends Component {
  static contextType = UserContext;

  render() {
    const { theme, toggleTheme } = this.context;
    return (
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
    );
  }
}

export default ThemeSwitcher;
