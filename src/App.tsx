import About from './components/About';
import AdditionalServices from './components/AdditionalServices';
import Header from './components/Header';
import HeaderCategories from './components/Header/Categories';
import IndexBanner from './components/IndexBanner';
import Services from './components/Services';
function App() {
  return (
    <div className="page">
      <div className="area">
        <Header />
      </div>
      <hr className="header__delimiter" />
      <div className="area">
        <HeaderCategories />
      </div>
      <div className="page__banner">
        <div className="area">
          <IndexBanner />
        </div>
      </div>
      <div className="page__colored page__services--padding">
        <div className="area page__services">
          <Services />
          <div className="page__additionalservice--wrapper">
            <AdditionalServices />
          </div>
        </div>
      </div>
      <div className="page__white page__bordered">
        <div className="area area__mobile">
          <About />
        </div>
      </div>
    </div>
  );
}

export default App;
