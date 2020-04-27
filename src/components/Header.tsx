import React from "react";

export interface HeaderProps {
    logo: any;
    text: string;
    headerRef: React.RefObject<any>;
}

export default class Header extends React.Component<HeaderProps, any>{


    render(): React.ReactNode {
        return (
            <header ref={this.props.headerRef} className="App-header">
                <img src={this.props.logo} className="App-logo" alt="logo" />
                <p>
                    {this.props.text}
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        );
    }
}