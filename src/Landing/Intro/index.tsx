import intro from "../../img/intro.jpg";
import phone from "../../img/phone.png";
import email from "../../img/email.jpg";
import { FacebookIcon } from "../../components/icons/facebook";

const Intro = () => {
  return (
    <div className="flex items-center justify-start mt-8 xsm:flex-col lg:flex-row items-center">
      <img src={intro} className="w-100 h-64 xsm:mr-0 md:mr-20" alt="" />
      <div className="text-xl flex xsm:flex-col md:flex-row justify-between items-center xsm:text-center md:text-start">
        <span>
          <b>
            Тут повітря моє
            <br />
            Тут кожен куточок рідненький
            <br />
            Має запах кохання і честі
            <br />
            Тут сім’я моя, всї мої люди, родина…
            <br />
            Разом ми – сила:
            <br />
            Гуртуємося та допомогаємо один одному.  
          </b>
        </span>
        <div className="flex flex-col items-center">
          <span>
            <div className="flex mt-2 ml-6">
              <a
                href="tel:+380969500909"
                className="pointer text-black hover:text-black"
              >
                +380969500909
              </a>
            </div>
          </span>
          <span>
            <div className="flex mt-2 mr-2">
              <img src={phone} alt="" className="w-4 h-4 mr-2 mt-1.5" />

              <a
                href="tel:+380504490949"
                className="pointer text-black hover:text-black"
              >
                +380504490949
              </a>
            </div>
          </span>
          <div className="flex mt-2 ml-6">
            <a
              href="tel:+380663474444"
              className="pointer text-black hover:text-black"
            >
              +380663474444
            </a>
          </div>
          <div className="flex flex-row mt-2 mr-2">
            <img src={email} alt="" className="w-5 h-5 mr-2 mt-1.5" />
            <div className="flex flex-col">
              <a
                href="mailto:ukrnativ22@gmail.com"
                className="pointer text-black hover:text-black"
              >
                ukrnativ22@gmail.com
              </a>
            </div>
          </div>
          <div className="flex flex-col mt-2">
            <a
              className="flex items-center justify-start text-black"
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/profile.php?id=100081320017600"
            >
              <FacebookIcon className="cursor-pointer" />
              <span className="ml-2">Україно Рідна</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Intro };
