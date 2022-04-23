import Header from './components/Header';
import HeaderCategories from './components/Header/Categories';
import IndexBanner from './components/IndexBanner';
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
    </div>
  );
}

export default App;
