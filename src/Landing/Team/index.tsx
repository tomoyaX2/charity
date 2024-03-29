const Team = () => {
  return (
    <>
      <div className="w-full h-12 bg-blue-100 flex items-center justify-center mt-4">
        <h3 className="text-blue-400">Команда</h3>
      </div>
      <div className="flex flex-col items-start justify-center text-xl xsm:px-4 md:px-0">
        <span className="text-lg text-blue-400 font-semibold mt-2">
          Де працюють медики-добровольці?
        </span>
        <ul className="ml-2">
          <li>- У місцях тимчасової дислокації військових частин</li>
          <li>- У прифронтових цивільних лікарнях</li>
          <li>- На контрольних пунктах в’їзду-виїзду (КПВВ)</li>
        </ul>
        <span className="text-lg text-blue-400 font-semibold mt-2">
          Де проживають і харчуються медики добровольці?
        </span>
        <ul className="ml-2">
          <li>- Безпосередньо у військових частинах</li>
          <li>- У прифронтових цивільних лікарнях</li>
        </ul>
        <span className="text-lg text-blue-400 font-semibold mt-2">
          Хто може долучитися добровольцями до БО БФ «Україно рідна»?
        </span>
        <span className="ml-2">
          Водії та підприємці, санітари, медсестри, фельдшери, інтерни, лікарі,
          кандидати та доктори наук, завідувачі відділеннями, заступники
          головних лікарів та головні лікарі медичних приватних та державних
          закладів, будь хто бажаючий спільно працювати.
        </span>
        <span className="text-lg text-blue-400 font-semibold mt-2">
          Чим допомагає медикам-добровольцям БО БФ «Україно рідна»?
        </span>
        <ul className="ml-2">
          <li>- Документальний супровід та юридична підтримка</li>
          <li>- Організаційна підтримка</li>
          <li>- Інформаційна підтримка</li>
          <li>- Логістична підтримка</li>
          <li>- Заохочення та нагороди</li>
          <li>- Підтримка ліками та медобладнанням</li>
          <li>
            - Лобіювання інтересів медиків-добровольців БО БФ «Україно рідна» в
            держорганах та органах місцевого самоврядування
          </li>
        </ul>
      </div>
    </>
  );
};

export { Team };
