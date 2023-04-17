

const CardAiring = (props) => {
  return (
     <div className="indicator my-2">
      <span className="indicator-item font-medium badge badge-secondary
      indicator-center font-medium">
       {props.eps}
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
    )
}

export default CardAiring