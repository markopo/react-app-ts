import React from "react";
import { scrollTo } from "../functions/scrollto";

export interface MenuProps {
    headerRef: React.RefObject<any>;
    contentOneRef: React.RefObject<any>;
    contentTwoRef: React.RefObject<any>;
    contentThreeRef: React.RefObject<any>;
    footerRef: React.RefObject<any>;
}

export enum NavigateState {
    Header,
    ContentOne,
    ContentTwo,
    ContentThree,
    Footer
}

export default class Menu extends React.Component<MenuProps, any>{

    constructor(props: any) {
        super(props);

        this.clickNavigate = this.clickNavigate.bind(this);
    }

    clickNavigate(state: NavigateState): void {

        switch (state) {
            case NavigateState.Header:
                scrollTo(this.props.headerRef);
                break;
            case NavigateState.ContentOne:
                scrollTo(this.props.contentOneRef);
                break;
            case NavigateState.ContentTwo:
                scrollTo(this.props.contentTwoRef);
                break;
            case NavigateState.ContentThree:
                scrollTo(this.props.contentThreeRef);
                break;
            case NavigateState.Footer:
                scrollTo(this.props.footerRef);
                break;
        }

    }

    render(): React.ReactNode {
        return (<div className="menu" >
                    <button onClick={() => this.clickNavigate(NavigateState.Header)} >Header</button>
                    <button onClick={() => this.clickNavigate(NavigateState.ContentOne)} >Content 1</button>
                    <button onClick={() => this.clickNavigate(NavigateState.ContentTwo)} >Content 2</button>
                    <button onClick={() => this.clickNavigate(NavigateState.ContentThree)} >Content 3</button>
                    <button onClick={() => this.clickNavigate(NavigateState.Footer)} >Footer</button>
                </div>);
    }
}