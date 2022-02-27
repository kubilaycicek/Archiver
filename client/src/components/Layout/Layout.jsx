import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import './layout.css';
const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <Navbar />
      <main className="content">{children}</main>
    </div>
  );
};

export default Layout;
