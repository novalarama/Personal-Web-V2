/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "./Button";

interface MainContentProps {
  image: string;
  title: string;
  description: string;
}

const Landing: React.FC<MainContentProps> = ({ image, title, description }) => {
  return (
    <div className="flex justify-center bg-gray-950">
      <div className="w-full max-w-screen-2xl px-12 py-24 max-md:px-5 max-md:py-12">
        <div className="flex gap-10 max-md:flex-col">
          <div className="flex flex-col w-5/12 max-md:w-full">
            <img
              loading="lazy"
              src={image}
              alt="Designer at work"
              className="w-full h-auto rounded-none max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col justify-center w-7/12 max-md:w-full">
            <div className="flex flex-col text-base text-white">
              <h1 className="text-5xl font-bold leading-snug max-md:text-4xl max-md:leading-tight">
                {title}
              </h1>
              <p className="mt-6 leading-relaxed text-neutral-400 max-md:mt-4">
                {description}
              </p>
              <Button>Get to Know →</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
