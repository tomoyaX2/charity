const Post6 = () => {
  return (
    <div className="border-b-2 border-gray-200 mt-2 pb-2 flex flex-row xsm:w-80 md:w-full">
      <div>
        <div className="flex">
          <h3>
            14 жовтня - День захисників та захисниць України. Кожен з нас може
            сказати своє "Дякую", та підтримати захисників і захисниць.
          </h3>
          {/* <FacebookIcon onClick={onRedirect} className="ml-2 mt-2" /> */}
        </div>

        <div className="flex flex-row items-start justify-between mt-2">
          <span className="text-xl mr-2">
            Допоможіть зібрати кошти на: Армійські розкладачки, спальники,
            рукавички, зимові берці, теплі речі, які зможуть їх зігріти.
            <br />
            <br />
            Ціль <b>400 000</b> Грн.
            <br />
            Посилання на Банку:
            <br />
            <b>https://send.monobank.ua/jar/4mRKDQ75Js</b>
            <br />
            Номер катки Банки:
            <br />
            <b>5375 4112 0070 9264</b>
          </span>
        </div>
      </div>
    </div>
  );
};

export { Post6 };
