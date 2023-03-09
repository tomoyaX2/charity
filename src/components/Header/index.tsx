import logo from "../../img/logo.jpg";

const Header = () => {
  return (
    <>
      <div className="flex flex-col w-full bg-blue-100">
        <div className="w-full flex flex-row items-center justify-start border-b-2 border-gray-200 xsm:px-20 lg:px-40 py-2">
          <div className="flex items-center">
            <img src={logo} alt="" className="w-40 h-40 rounded-md" />
          </div>
          <h3 className="text-blue-400 ml-20">
            Благодійний фонд «Україно Рідна»
          </h3>
        </div>
      </div>
    </>
  );
};

export { Header };
