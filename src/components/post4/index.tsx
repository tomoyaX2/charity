import img1 from "./1.jpg";

const Post4 = () => {
  return (
    <div className="border-b-2 border-gray-200 mt-2 pb-2 flex flex-row">
      <div>
        <div className="flex">
          <h3>
            Захисники в цей святковий день просять зібрати кошти на портативні
            акумуляторні електростанції ETUPOWER X-1000
          </h3>
          {/* <FacebookIcon onClick={onRedirect} className="ml-2 mt-2" /> */}
        </div>

        <div className="flex flex-row items-start justify-between mt-2">
          <span className="text-xl mr-2">
            Etupower X-1000 це вологий сонячний генератор потужністю 1000W, що
            дозволить їм бути повністю автономними в будь-якій точці бойових
            дій. Збір розпочато!!!
            <br />
            <br />
            Ціль <b>1 040 000</b> Грн.
            <br />
            Посилання на Банку:
            <br />
            <b>https://send.monobank.ua/jar/3c8ysfbXNF</b>
            <br />
            Номер катки Банки:
            <br />
            <b>5375 4112 0068 3774</b>
          </span>
        </div>
      </div>
      <img src={img1} alt="" className="w-100 h-100 ml-4" />
    </div>
  );
};

export { Post4 };
