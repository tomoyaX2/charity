import { Drawer } from "rsuite";
import { FacebookIcon } from "../icons/facebook";
import phone from "../../img/phone.png";
import email from "../../img/email.jpg";
import logo from "../../img/logo.jpg";
import MenuIcon from "@rsuite/icons/Menu";
import { useState } from "react";

const Header = () => {
  const [isDrawerOpenned, setDrawerOpenned] = useState(false);

  return (
    <>
      <Drawer
        open={isDrawerOpenned}
        className="!w-64"
        onClose={() => {
          setDrawerOpenned(false);
        }}
        size="md"
      >
        <Drawer.Header>
          <Drawer.Title>Contact Us</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body className="!px-4">
          <>
            <div className="flex flex-col">
              <div className="flex mt-2 mr-2">
                <img src={phone} alt="" className="w-4 h-4 mr-2" />
                <a
                  href="tel:+380969500909"
                  className="pointer text-black hover:text-black"
                >
                  +380969500909
                </a>
              </div>
              <div className="flex mt-2 mr-2">
                <img src={phone} alt="" className="w-4 h-4 mr-2" />
                <a
                  href="tel:+380504490949"
                  className="pointer text-black hover:text-black"
                >
                  +380504490949
                </a>
              </div>

              <div className="flex mt-2 mr-2">
                <img src={phone} alt="" className="w-4 h-4 mr-2" />
                <a
                  href="tel:+38 0663474444"
                  className="pointer text-black hover:text-black"
                >
                  +380663474444
                </a>
              </div>
              <div className="flex flex-row mt-2">
                <img src={email} alt="" className="w-5 h-5 mr-2" />
                <div className="flex flex-col">
                  <a
                    href="mailto:ukrnativ22@gmail.com"
                    className="pointer text-black hover:text-black"
                  >
                    ukrnativ22@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <a
              className="flex items-center justify-start text-black"
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/profile.php?id=100081320017600"
            >
              <FacebookIcon className="mt-4 cursor-pointer" />
              <span className="mt-4 ml-2">Україно Рідна</span>
            </a>
          </>
        </Drawer.Body>
      </Drawer>
      <div className="flex flex-col w-full">
        <div className="w-full flex flex-row items-center justify-between border-b-2 border-gray-200 xsm:px-20 lg:px-40 py-2">
          <div className="flex items-center">
            <img
              src={logo}
              alt=""
              className="lg:w-24 lg:h-24 sm:w-24 sm:h-24 xsm:w-16 xsm:h-16 rounded-md"
            />
          </div>
          <div
            className="xsm:block md:hidden cursor-pointer"
            onClick={() => {
              setDrawerOpenned(true);
            }}
          >
            <MenuIcon />
          </div>

          <div className="flex xsm:hidden md:block">
            <div className="flex flex-row items-start justify-center">
              <span className="font-semibold text-lg mr-4 h-full mt-7">
                Contact Us:{" "}
              </span>

              <div className="flex flex-col">
                <div className="flex mt-2 mr-2">
                  <img src={phone} alt="" className="w-4 h-4 mr-2" />
                  <a
                    href="tel:+380969500909"
                    className="pointer text-black hover:text-black"
                  >
                    +380969500909
                  </a>
                </div>
                <div className="flex mt-2 mr-2">
                  <img src={phone} alt="" className="w-4 h-4 mr-2" />
                  <a
                    href="tel:+380504490949"
                    className="pointer text-black hover:text-black"
                  >
                    +380504490949
                  </a>
                </div>

                <div className="flex mt-2 mr-2">
                  <img src={phone} alt="" className="w-4 h-4 mr-2" />
                  <a
                    href="tel:+38 0663474444"
                    className="pointer text-black hover:text-black"
                  >
                    +380663474444
                  </a>
                </div>
              </div>
              <div className="">
                <div className="flex flex-row mt-2">
                  <img src={email} alt="" className="w-5 h-5 mr-2" />
                  <div className="flex flex-col">
                    <a
                      href="mailto:ukrnativ22@gmail.com"
                      className="pointer text-black hover:text-black"
                    >
                      ukrnativ22@gmail.com
                    </a>
                  </div>
                </div>
                <a
                  className="flex items-center mt-2 text-black hover:text-black"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/profile.php?id=100081320017600"
                >
                  <FacebookIcon className="cursor-pointer" />
                  <span className="ml-2 ">Україно Рідна</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Header };
