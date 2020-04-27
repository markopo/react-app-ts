import React from "react";

export interface ContentProps {
    id: string;
    contentRef: React.RefObject<any>;
    name: string;
    imageUrl: string;
}


export default class Content extends React.Component<ContentProps, any> {


    render(): React.ReactNode {
        return (
            <div id={this.props.id} style={{ backgroundImage: `url(${this.props.imageUrl})` }} ref={this.props.contentRef} className="content">
                <h2>{this.props.name}</h2>
            </div>
        );
    }
}