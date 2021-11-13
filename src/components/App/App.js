import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { BlogContent } from '../BlogContent/BlogContent';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <BlogContent/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
