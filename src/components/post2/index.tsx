import post2 from "../../img/post2.jpg";

const Post2 = () => {
  return (
    <div className="border-b-2 border-gray-200 mt-2 pb-2">
      <h3>
        Громадська організація «Офіс на Банковій» та БО БФ Украіна Рідна
        передали 3D-принтер до медичних сил ЗСУ!
      </h3>
      <div className="flex flex-row items-start justify-between mt-2">
        <span className="text-xl mr-2">
          Сьогодні наша волонтерська команда завітала до Регіонального
          санітарно-епідеміологічного управління командування медичних сил ЗСУ.
          На прохання медиків-захисників України, на основі підписаного нами
          меморандуму, ми передали до установи 3D-принтер, який має значно
          полегшити працівникам процеси виготовлення ємностей та іншого
          потрібного лабораторного обладнання.
          <br />
          <br />
          Висловлюємо щиру подяку за сприяння у наших добрих справах Комітету
          гуманітарно-інформаційної політики ВРУ та його голові Микиті
          Руслановичу Потураєву! Ваша допомога неоціненна!
          <br />
          <br />
          Разом до перемоги!
          <br />
          Слава Україні!
        </span>
        <img src={post2} alt="" className="w-88 h-80" />
      </div>
    </div>
  );
};

export { Post2 };