import React from "react";
import {getPost } from "../functions/getposts";


export interface ContentProps {
    id: string;
    contentRef: React.RefObject<any>;
    name: string;
    imageUrl: string;
    postId?: number;
}

export default class Content extends React.Component<ContentProps, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            post: null
        };
    }

    async componentDidMount() {
        const post = await getPost(this.props.postId!);

        if(post) {
            this.setState({ post });
        }
    }

    render(): React.ReactNode {
        const title = this.state.post ? this.state.post.title : this.props.name;
        const body = this.state.post ? this.state.post.body : '';

        return (
            <div id={this.props.id} style={{ backgroundImage: `url(${this.props.imageUrl})` }}  ref={this.props.contentRef} className="content">
                <h2>{title}</h2>
                <div>
                    <p>{body}</p>
                </div>
            </div>
        );
    }
}