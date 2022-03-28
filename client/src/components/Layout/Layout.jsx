import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import './layout.css';
const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="top-fixed-header">
      <Header />
      <Navbar />
        </div>
      <main className="content">{children}</main>
    </div>
  );
};

export default Layout;
