import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:py-20 xl:flex-row ">
      <div className="hero-map" />

      {/* LEFT */}

      <div className="relative z-20 flex flex-col xl:w-1/2 ">
        <Image
          src="/camp.svg"
          width={50}
          height={50}
          alt="camp"
          className="absolute left-[-5px] top-[-40px] w-10 lg:w-[50px] "
        />

        <h1 className="bold-52 lg:bold-88 text-green-50">
          Putuk Truno Camp Area
        </h1>
        <p className="text-gray-50 mt-6 xl:max-w-[520px]">
          We want to make sure you have the best experience possible. That's why
          we've created a camp area that's perfect for you. Whether you're
          looking for a place to relax or a place to have fun, we've got you
          covered.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Image
                  key={i}
                  src="/star.svg"
                  width={20}
                  height={20}
                  alt="star"
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </div>

        <div className="flex gap-3 w-full sm:flex-row flex-col">
          <Button type="button" title="Download App" variant="btn_green" />

          <Button
            type="button"
            title="How we work"
            variant="btn_white_text"
            icon="/play.svg"
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start ">
        <div className="relative flex z-20 w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8 ">
          <div className="flex flex-col">

            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src="/close.svg" width={24} height={24} alt="close" />
            </div>
          <p className="bold-20 text-white">Aguas Calientes</p>
          </div>

            <div className="flexBetween">
              <div className="flex flex-col">
                <p className="regular-16 text-gray-20">Distance</p>
                <p className="bold-20 text-white">178.32 mi</p>
              </div>
              <div className="flex flex-col">
                <p className="regular-16 text-gray-20">Elevation</p>
                <p className="bold-20 text-white">2.040 km</p>
              </div>
            </div>
            
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
