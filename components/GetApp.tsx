import Image from "next/image";
import Button from "./Button";

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[70px]">
      <div className="get-app flex flex-col lg:flex-row items-center lg:items-start justify-between w-full lg:gap-12">
        {/* Content Section */}
        <div className="z-20 flex flex-col items-start justify-center gap-6 lg:flex-1">
          <h2 className="bold-40 lg:bold-64">Get for free now!</h2>
          <p className="regular-16 text-gray-10">Available on iOS and Android</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap lg:flex-row">
            <Button
              title="App Store"
              type="button"
              icon="/apple.svg"
              variant="btn_white"
              full={true}
            />
            <Button
              title="Play Store"
              type="button"
              icon="/android.svg"
              variant="btn_dark_green"
              full={true}
            />
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center lg:flex-1 lg:min-h-[100px]">
          <p className="bold-40 lg:bold-64 text-green-300">Download The App for Better Experience</p>
        </div>
      </div>
    </section>
  );
};

export default GetApp;
