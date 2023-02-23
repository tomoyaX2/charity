import { useEffect, useState } from "react";
import "./App.css";
import { FacebookIcon } from "./components/icons/facebook";
import image1 from "./img/1.jpg";
import image2 from "./img/2.jpg";
import image3 from "./img/3.jpg";
import avatar1 from "./img/avatar1.jpg";
import avatar2 from "./img/avatar2.jpg";
import avatar3 from "./img/avatar3.jpg";
import phone from "./img/phone.png";
import email from "./img/email.jpg";

const carouselLinks = [image1, image2, image3];

function App() {
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setActiveLinkIndex((prevLinkIndex) =>
        prevLinkIndex + 1 >= carouselLinks.length ? 0 : prevLinkIndex + 1
      );
    }, 3000);
  }, [activeLinkIndex]);

  return (
    <div className="flex flex-col w-full pb-20">
      <div className="h-40 w-full border-b-2 border-gray-200 flex items-center justify-center">
        <img src={image3} alt="" className="w-64 h-32" />
      </div>
      <div className="w-full flex flex-row items-center justify-center border-b-2 border-gray-200">
        <span className="px-8 py-2 cursor-pointer">Main</span>
        <span className="px-8 py-2 cursor-pointer">Programs</span>
        <span className="px-8 py-2 cursor-pointer">Partners</span>
        <span className="px-8 py-2 cursor-pointer">Founders</span>
        <span className="px-8 py-2 cursor-pointer">Contact Us</span>
      </div>
      <div className="lg:px-40 sm:px-20 px-10 mt-8">
        <div className=" border-b-2 border-gray-200">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum
        </div>
        <h2 className="mt-4 w-full text-center font-semibold uppercase text-3xl  border-b-2 border-gray-200 pb-4">
          We already helped:
        </h2>
        <div className="flex items-start justify-between w-full mt-12 border-b-2 border-gray-200 pb-8">
          <span className="w-200">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
          </span>
          <img
            src={carouselLinks[activeLinkIndex]}
            alt=""
            className="sm:w-64 w-200 h-64"
          />
        </div>
        <h2 className="mt-4 w-full text-center font-semibold uppercase text-3xl  border-b-2 border-gray-200 pb-4">
          Founders:
        </h2>
        <div className="flex items-center lg:justify-between sm:justify-center w-full flex-wrap">
          <div className="flex flex-col items-center shadow-md mt-4 w-64">
            <img src={avatar1} alt="" className="h-64 w-60" />
            <span className="font-semibold text-lg mt-4">Test User 1</span>
            <span className="font-semibold text-md mt-4 text-center">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only
            </span>
          </div>
          <div className="flex flex-col items-center shadow-md mt-4 w-64">
            <img src={avatar2} alt="" className="h-64 w-60" />
            <span className="font-semibold text-lg mt-4">Test User 1</span>
            <span className="font-semibold text-md mt-4 text-center">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only
            </span>
          </div>
          <div className="flex flex-col items-center shadow-md mt-4 w-64">
            <img src={avatar3} alt="" className="h-64 w-60" />
            <span className="font-semibold text-lg mt-4">Test User 1</span>
            <span className="font-semibold text-md mt-4 text-center">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only
            </span>
          </div>
          <div className="flex flex-col items-center shadow-md mt-4 w-64">
            <img src={avatar1} alt="" className="h-64 w-60" />
            <span className="font-semibold text-lg mt-4">Test User 1</span>
            <span className="font-semibold text-md mt-4 text-center">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only
            </span>
          </div>
          <div className="w-full flex items-center justify-center border-t-2 border-gray-200 mt-12">
            <div className="flex flex-col items-center justify-center w-full">
              <h2 className="mt-4 w-full text-center font-semibold uppercase text-3xl  border-b-2 border-gray-200 pb-4">
                Contact Us:
              </h2>
              <div className="flex flex-col mt-4 w-48">
                <div className="flex flex-row">
                  <img src={phone} alt="" className="w-4 h-4 mr-4 mt-1" />
                  <div className="flex flex-col">
                    <span>0969500909</span>
                    <span>0504490949</span>
                    <span>0663474444</span>
                  </div>
                </div>
                <div className="flex flex-row mt-2">
                  <img src={email} alt="" className="w-5 h-5 mr-3 mt-1" />
                  <div className="flex flex-col">
                    <span>ukrnativ22@gmail.com</span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <FacebookIcon className="mt-4 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
