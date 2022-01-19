import "./App.css";
import Rectangle from "./images/Rectangle.png";
import menu from "./images/menu.png";
import Rectanglepeople from "./images/Rectanglepeople.png";
import cloudflare from "./images/cloudflare.png";
import cPanel from "./images/cPanel.png";
import litespeedlogo from "./images/litespeedlogo.png";
import Rectangleww from "./images/Rectangleww.png";
import secured from "./images/secured.png";
import wordpress from "./images/wordpress.png";
import icn1 from "./images/icn1.png";
import Icon2 from "./images/Icon2.png";
import icn3 from "./images/icn3.png";
import icn4 from "./images/icn4.png";

function App() {
  return (
    <>
      <header className="m-auto w-4/5 flex justify-between items-center mt-8 h-10">
        <div className="w-90">
          <a href="/">
            <img className="" src={Rectangle} alt="Rectangle" />
          </a>
        </div>
        <div className="hidden sm:block">
          <ul className="flex">
            <li className="mr-8">
              <a className="hover:text-red" href="/">
                About
              </a>
            </li>
            <li className="mr-8">
              <a className="hover:text-red" href="/">
                Blog And News
              </a>
            </li>
            <li className="mr-8">
              <a className="hover:text-red" href="/">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden sm:block">
          <a className="hover:text-red" href="/">
            Account
          </a>
        </div>
        <div className="w-3 h-4 sm:block md:hidden lg:hidden ">
          <a href="/">
            <img className="object-contain" src={menu} alt="list" />
          </a>
        </div>
      </header>

      <div className="flex m-auto w-full mt-16 flex-wrap  lg:flex-nowrap lg:justify-center">
        <div className="w-full m-auto lg:w-1/2 lg:ml-32">
          <div className="mt-2">
            <ul className="flex justify-center lg:justify-start">
              <li>
                <a href="/" className="hover:text-red border-b-2 text-red mr-1">
                  Hosting
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-red border-b-2 text-gray mr-1"
                >
                  Domain
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-red border-b-2 text-gray mr-1"
                >
                  SEO
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-red border-b-2 text-gray mr-1"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <h1 className="text-2xl text-center lg:text-8xl lg:text-left font-bold">
              Premium Web Hosting for Your Website
            </h1>
          </div>
          <div className="mt-8">
            <p className="text-base text-gray text-center lg:text-left">
              Blazing fast web hosting for individuals and{" "}
            </p>
            <p className="text-base text-gray text-center lg:text-left">
              businesses of all sizes backed by 24x7x365 Support.
            </p>
          </div>
          <div className="flex mt-8 m-auto justify-center lg:justify-start">
            <div className="relative mr-8">
              <div className="absolute inset-0 bg-red rounded-md filter blur opacity-50"></div>
              <button className="relative text-white bg-red py-3 px-5 rounded-md leading-none flex items-center">
                <span>Create an Account</span>
              </button>
            </div>
            <div>
              <button className="border rounded-md fkex utens-center leading-none py-3 px-5">
                <span className="">Choose your plan</span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full m-auto order-first lg:w-1/2 lg:order-last">
          <div>
            <img className="" src={Rectanglepeople} alt="Rectanglepeople" />
          </div>
        </div>
      </div>

      <div className="lg:ml-32 lg:flex lg:w-17/20 lg:mt-20">
        <div className="md:w-1/2 md:m-auto">
          <h2 className="text-center text-2xl font-bold mt-8 lg:text-4xl">
            True Cloud Web Hosting
          </h2>
          <p className="fond-light text-black-dark text-center mt-2">
            True Cloud Web Hosting All of the hosting packages we offer are
            deployed instantly on our SSD powered cloud. We don’t use dedicated
            servers that operate on single pieces of hardware. Our entire
            infrastructure is built to be reliable, secure, and scalable.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-between mt-4">
          <div className="w-1/2 md:w-1/3">
            <img className="m-auto" src={cPanel} alt="cPanel" />
          </div>
          <div className="w-1/2 md:w-1/3">
            <img className="m-auto" src={secured} alt="secured" />
          </div>
          <div className="w-1/2 md:w-1/3">
            <img className="m-auto" src={litespeedlogo} alt="litespeedlogo" />
          </div>
          <div className="w-1/2 md:w-1/3">
            <img className="m-auto" src={cloudflare} alt="cloudflare" />
          </div>
          <div className="w-1/2 md:w-1/3">
            <img className="m-auto" src={Rectangleww} alt="Rectangleww" />
          </div>
          <div className="w-1/2 md:w-1/3">
            <img className="m-auto" src={wordpress} alt="wordpress" />
          </div>
        </div>
      </div>

      <div className="md:flex md:flex-wrap lg:flex-nowrap	lg:justify-center lg:mt-20">
        <div className="mt-8 md:w-1/2 lg:w-1/4">
          <div>
            <img className="m-auto" src={icn1} alt="icn1" />
          </div>
          <h4 className="text-center font-bold">99.9% Uptime</h4>
          <p className="text-center font-light">
            We Keep Your Web build Online 24x7x365. Downtime not only costs you
            lost visitors but also damages your reputation and search engine
            rankings.
          </p>
        </div>
        <div className="mt-8 md:w-1/2 lg:w-1/4">
          <div>
            <img className="m-auto" src={Icon2} alt="Icon2" />
          </div>
          <h4 className="text-center font-bold">Blazing Fast Web Hosting</h4>
          <p className="text-center font-light">
            We Keep Your Web build Online 24x7x365. Downtime not only costs you
            lost visitors but also damages your reputation and search engine
            rankings.
          </p>
        </div>
        <div className="mt-8 md:w-1/2 lg:w-1/4">
          <div>
            <img className="m-auto" src={icn3} alt="icn3" />
          </div>
          <h4 className="text-center font-bold">Free SSL Certificates</h4>
          <p className="text-center font-light">
            We Keep Your Web build Online 24x7x365. Downtime not only costs you
            lost visitors but also damages your reputation and search engine
            rankings.
          </p>
        </div>
        <div className="mt-8 md:w-1/2 lg:w-1/4">
          <div>
            <img className="m-auto" src={icn4} alt="icn4" />
          </div>
          <h4 className="text-center font-bold">24x7 Friendly Support</h4>
          <p className="text-center font-light">
            We Keep Your Web build Online 24x7x365. Downtime not only costs you
            lost visitors but also damages your reputation and search engine
            rankings.
          </p>
        </div>
      </div>

    </>
  );
}

export default App;
