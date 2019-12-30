import React, { Component, createContext } from "react";

const ThemeContext = createContext();

class ThemeProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDarkMode: true
        };
    }

    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state, tastesLikeChicken: true }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export { ThemeContext, ThemeProvider };
