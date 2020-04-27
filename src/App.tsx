import React from 'react';
import './App.css';
import Header, {HeaderProps} from "./components/Header";
import Footer, {FooterProps} from "./components/Footer";
import logo from "./logo.svg";
import Content from "./components/Content";
import Menu from "./components/Menu";

class App extends React.Component<any, any>{

  private readonly headerRef: React.RefObject<any>;
  private readonly contentOneRef: React.RefObject<any>;
  private readonly contentTwoRef: React.RefObject<any>;
  private readonly contentThreeRef: React.RefObject<any>;
  private readonly footerRef: React.RefObject<any>;

  constructor(props: any) {
      super(props);

      this.headerRef = React.createRef();
      this.contentOneRef = React.createRef();
      this.contentTwoRef = React.createRef();
      this.contentThreeRef = React.createRef();
      this.footerRef = React.createRef();
  }

  render(): React.ReactNode {

      const headerProps: HeaderProps = {
          logo,
          text: 'React App',
          headerRef: this.headerRef
      };

      const footerProps: FooterProps = {
          text: 'React App',
          year: new Date().getFullYear(),
          footerRef: this.footerRef
      };

      return (
          <div className="App">
              <Menu headerRef={this.headerRef} contentOneRef={this.contentOneRef} contentTwoRef={this.contentTwoRef} contentThreeRef={this.contentThreeRef} footerRef={this.footerRef}  />
              <Header headerRef={this.headerRef}  logo={headerProps.logo} text={headerProps.text} />
              <Content id="content-one" contentRef={this.contentOneRef} imageUrl="https://i.picsum.photos/id/100/2500/1656.jpg" name="Content One"  />
              <Content id="content-two" contentRef={this.contentTwoRef} name="Content Two" imageUrl="https://i.picsum.photos/id/1004/5616/3744.jpg" />
              <Content id="content-three" contentRef={this.contentThreeRef} name="Content Three" imageUrl="https://i.picsum.photos/id/1016/3844/2563.jpg" />
              <Footer footerRef={this.footerRef} year={footerProps.year} text={footerProps.text}  />
          </div>
      );
  }


}

export default App;
