import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import './MainLayout.css';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white">
      <Navbar />
      <main className="container">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
