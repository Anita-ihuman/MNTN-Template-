
import Navbar from "./nav";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Navbar />
      {children}
    </div>
  );
};
export default Layout;
