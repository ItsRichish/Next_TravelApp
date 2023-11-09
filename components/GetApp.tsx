import Image from "next/image";
import Button from "./Button";

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex justify-center items-start flex-1 flex-col gap-12 w-full">
          <h1 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Get for free now!
          </h1>
          <p className="text-gray-10 regular-16">
            Available on iOS and Android
          </p>

          <div className="flex flex-col gap-3 w-full whitespace-nowrap xl:flex-row">
            <Button
              icon="/apple.svg"
              title="Download App"
              type="button"
              variant="btn_white"
              full
            />

            <Button
              icon="/android.svg"
              title="Play Store"
              type="button"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>

        <div className="flex justify-end items-center flex-1">
          <Image src="/phones.png" alt="phones" height={870} width={550} />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
