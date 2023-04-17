const CardPopular = (props) => {
  return (
    <div className="indicator ml-8 my-2">
      <span className="indicator-item ml-8 font-medium badge badge-error
      indicator-start">
       Popular!
      </span>
      <span className="indicator-item mr-6 font-medium badge font-bold badge-success
      indicator-middle">
       {props.release}
      </span>
      <div className="grid w-40 h-50 bg-base-300  place-content-center">
        <img
          src={props.img}
          className="bg-cover bg-no-repeat rounded"
        />
        <div className="max-w-[25ch] overflow-hidden">
  <h1 className="font-extrabold overflow-hidden bg-slate-700/75 text-truncate sm:bg-transparent sm:bg-gradient-to-r sm:from-slate-700/95 sm:to-slate-700/25 pl-2">
    <span className="whitespace-nowrap hover:whitespace-normal">{props.title}</span>
  </h1>
</div>
    </div>
    </div>
  );
};

export default CardPopular;
