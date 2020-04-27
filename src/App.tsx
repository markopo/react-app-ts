import React from 'react';
import './App.css';
import Header, {HeaderProps} from "./components/Header";
import Footer, {FooterProps} from "./components/Footer";
import logo from "./logo.svg";

class App extends React.Component<any, any>{

  render(): React.ReactNode {
      const headerProps: HeaderProps = {
          logo,
          text: 'React App'
      };

      const footerProps: FooterProps = {
            text: 'React App',
            year: new Date().getFullYear()
      };

      return (
          <div className="App">
              <Header logo={headerProps.logo} text={headerProps.text} />
              <Footer year={footerProps.year} text={footerProps.text}  />
          </div>
      );
  }


}

export default App;
