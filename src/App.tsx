import { BrowserRouter as Router } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Header } from 'src/components/Header/Header';
import { Footer } from 'src/components/Footer/Footer';
import { RoutesComponent } from 'src/components/Navigation/Routes';
import 'src/assets/styles/main.scss';

const ContentWithTransition: React.FC = () => {
  return (
    <TransitionGroup>
      <CSSTransition classNames="page-transition" timeout={300}>
        <RoutesComponent />
      </CSSTransition>
    </TransitionGroup>
  );
};

export const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <ContentWithTransition />
        <Footer/>
      </div>
    </Router>
  );
};


