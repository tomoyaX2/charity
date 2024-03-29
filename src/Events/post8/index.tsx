import img1 from "./1.jpg";

const Post8 = () => {
  // const onRedirect = () => {
  //   window.location.replace(
  //     "https://www.facebook.com/watch/?extid=CL-UNK-UNK-UNK-IOS_GK0T-GK1C&mibextid=2Rb1fB&v=454832936826793"
  //   );
  // };
  return (
    <div className="border-b-2 border-gray-200 mt-2 pb-2 xsm:w-80 md:w-full">
      <div className="flex">
        <h3>
          Волонтери Благодійної Організації Благодійного Фонду ,, Украіна рідна”
          продовжують збір коштів на термінали Starlink для підрозділів ССО!
        </h3>
        {/* <FacebookIcon onClick={onRedirect} className="ml-2 mt-2" /> */}
      </div>

      <div className="flex xsm:flex-col md:flex-row items-start justify-between mt-2">
        <span className="text-xl mr-2">
          Хлопці та дівчата зараз знаходяться в гарячих точках нашого фронту,
          майже щодня вступають в бій та дають відсіч ворогу.
          <br />
          <br />
          Всі знають ситуацію на нашому фронті. Запити на Starlink надходять
          постійно. Мати доступ до мережі та залишатися на зв’язку це життєво
          необхідні речі для наших бійців і їх командирів. Відсутність зв’язку
          призводить до втрат наших бійців та техніки. Starlink – це
          супутниковий інтернет від компанії SpaceX, який дозволяє отримувати
          якісний звя’зок навіть в більш віддалених куточках нашої планети. В
          Україні він став життєво необхідним після 24 лютого 2022 року, коли
          використовувати існуючи канали зв’язку стало неможливим.
          <br />
          <br />
          Один комплекс Starlink ми зможемо придбати з офіційного сайту
          приблизно за 700$, але їх потрібно набаго більше ніж один. Він
          потужний, має можливість забезпечити надійним і швидким інтернетом
          багато пристроїв одночасно.
          <br />
          <br />
          При наданні домоги по нашим рахункам обов’язково вказуйте
          <b>‼️Благодійність‼️</b> Заздалегідь дякуємо за підтримку наших
          сміливих воїнів🤝💪
        </span>
        <img
          src={img1}
          alt=""
          className="w-100 xsm:ml-0 sm:ml-4 xsm:mt-4 sm:mt-0"
        />
      </div>
    </div>
  );
};

export { Post8 };
