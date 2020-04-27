import React from "react";

export interface FooterProps {
    year: number;
    text: string;
    footerRef: React.RefObject<any>;
}

export default class Footer extends React.Component<FooterProps, {}> {

    render() {
        return (<footer ref={this.props.footerRef}>
                    <h2> {this.props.text} {this.props.year} </h2>
                </footer>);
    }

}