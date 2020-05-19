import React, {useContext} from "react";
import { scrollTo } from "../functions/scrollto";
import Modal from "./Modal";
import Switch from "./Switch";
import Beer from "./Beer";
import {ThemeContext} from "../ThemeContext";

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

        this.state = {
            showModal: false
        };

        this.clickNavigate = this.clickNavigate.bind(this);

    }

    componentDidUpdate(prevProps: Readonly<MenuProps>, prevState: Readonly<any>, snapshot?: any) {

    }

    toggleModal = () => {

        this.clickNavigate(NavigateState.Header);

        const toggle = !this.state.showModal;
        this.setState({
            showModal: toggle
        });
    };

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
        const { showModal } = this.state;

        return (<div className="menu" >
                    <button onClick={this.toggleModal} >{ !showModal ? 'Open Modal' : 'Close Modal' }</button>
                    <button onClick={() => this.clickNavigate(NavigateState.Header)} >Header</button>
                    <button onClick={() => this.clickNavigate(NavigateState.ContentOne)} >Content 1</button>
                    <button onClick={() => this.clickNavigate(NavigateState.ContentTwo)} >Content 2</button>
                    <button onClick={() => this.clickNavigate(NavigateState.ContentThree)} >Content 3</button>
                    <button onClick={() => this.clickNavigate(NavigateState.Footer)} >Footer</button>
                    <Switch />
                    <Beer />
                    <React.Fragment>
                        { showModal ? (
                        <Modal>
                            <div className="my-modal-overlay">
                                <div className="my-modal">
                                    <div>
                                        <h1>Cool Heading</h1>
                                        <p>Lorem ipsum in modal!</p>
                                        <button className="modal-close" onClick={this.toggleModal}>X</button>
                                    </div>
                                </div>
                            </div>
                        </Modal>
                        ) : null }
                    </React.Fragment>
                </div>

                );
    }
}