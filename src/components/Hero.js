


const Hero = () => {
  return (
    <div>
  <section
  className="relative bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9sViBYfgtu_ZxMDyVQwdrL-HKxNGqXCkKESFDW0-edvI88QdSR7YiFnI&s=10)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-slate-700/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-slate-700/95 sm:to-slate-700/25"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center sm:text-left">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        Watch the latest anime 

        <strong className="block font-extrabold text-rose-700">
          And most popular here.
        </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
        Web for watching anime with English subtitles, Free without ads 
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Watch Now
        </a>

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          View popular list
        </a>
      </div>
    </div>
  </div>
</section>
    </div>
    )
}

export default Hero