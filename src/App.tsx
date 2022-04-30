import About from './components/About';
import AdditionalServices from './components/AdditionalServices';
import ChooseReasons from './components/ChooseReasons';
import Header from './components/Header';
import HeaderCategories from './components/Header/Categories';
import IndexBanner from './components/IndexBanner';
import Questions from './components/Questions';
import Request from './components/Request';
import Reviews from './components/Reviews';
import Services from './components/Services';
import Taxes from './components/Taxes';
import TaxesTable from './components/Taxes/Table';

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
      <div className="page__white page__bordered page__about">
        <div className="area area__mobile">
          <About />
        </div>
      </div>
      <div className="page__colored">
        <div className="area area__mobile page__reasons">
          <ChooseReasons />
        </div>
        <div className="area page__request">
          <Request />
        </div>
        <div className="area area__mobile">
          <Reviews />
        </div>
      </div>
      <div className="page__white page__bordered">
        <div className="area area__mobile">
          <Taxes />
        </div>
        <div className="page__taxes--table">
          <TaxesTable />
        </div>
      </div>
      <div className="page__colored">
        <div className="area area__mobile">
          <Questions />
        </div>
      </div>
    </div>
  );
}

export default App;
