import React from "react";

export default class Footer extends React.Component<any, any> {

    render() {
        const year = new Date().getFullYear();

        return (<footer>
                    <p> React App {year} </p>
                </footer>);
    }

}