"use client";
import Image from "next/image";
import HomePage from "../components/HomePage";
import EnergyBar from "../components/EnergyBar";
import { useState } from "react/";
import ItemBag from "../components/ItemsBag";

const Home = () => {
  const [emotion, setEmotion] = useState("happy");

  return (
    <div>
      <section className="py-6 text-black">
        <div className="container mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-6 justify-center">
          <div className="w-full px-4 flex flex-col items-center mb-6 lg:mb-0">
            <div className="mockup-window border-2 border-accent bg-neutral text-neutral-content w-full flex justify-between items-end ">
              <button className="btn btn-error btn-square btn-outline btn-sm my-6 mx-2 -mt-10">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div
                className="flex flex-col bg-gray-100 items-center justify-center p-6"
                style={{
                  backgroundImage: "url('/bg-char.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  minHeight: "500px",
                  height: "auto",
                }}>
                <div className="bg-neutral text-neutral-content rounded-xl p-4 w-full h-auto">
                  <EnergyBar />
                </div>
                <Image
                  alt="character image"
                  className="relative max-w-full rounded-lg mt-4 "
                  src={`/${emotion}.png`}
                  height={800}
                  width={800}
                />
              </div>
            </div>
          </div>

          <div className="w-full px-4 flex flex-col items-center space-y-6">
            <div className="mockup-window border-2 border-accent bg-neutral text-neutral-content w-full items-end">
              <button className="btn btn-square btn-error btn-outline btn-sm my-6 mx-2 -mt-10">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="flex flex-col w-full bg-byteOrange items-center justify-center p-4">
                <HomePage setEmotion={setEmotion} />
              </div>
            </div>

            <div className="mockup-window bg-neutral text-neutral-content border-2 border-accent w-full items-end overflow-hidden">
              <button className="btn btn-square btn-error btn-outline btn-sm my-6 mx-2 -mt-10">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <Image
                src="/item-bag.png"
                alt="Item Bag Background"
                className="w-full h-auto object-cover"
                width={1000}
                height={1000}
              />

              <div className="relative w-full h-full">
                <div>
                  <ItemBag />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
