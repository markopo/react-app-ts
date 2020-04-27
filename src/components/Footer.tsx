import React from "react";

export interface FooterProps {
    year: number;
    text: string;
}

export default class Footer extends React.Component<FooterProps, {}> {

    render() {
        return (<footer>
                    <p> {this.props.text} {this.props.year} </p>
                </footer>);
    }

}