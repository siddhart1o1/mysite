import React, { PureComponent } from "react";
import { Fragment } from "react";
import styles from "./styles/TopProject.module.css";
import Link from "next/link";

export default function TopProject(props) {
  const array = props.props;
  const Project1 = array.find((x) => x.Rank === 1);
  const Project2 = array.find((x) => x.Rank === 2);
  const Project3 = array.find((x) => x.Rank === 3);

    return (
      <div className="mt-40 bg-zinc-900 ">
        <div className="max-w-6xl mx-auto">
          <header className="flex flex-col md:flex-row justify-between items-center pt-20  md:my-20 lg:my-0">
            <div className={styles.Heading}>PROJECTS</div>
          </header>
          <div className={styles.Heading2}>Some Projects I have Worked on.</div>
          {/* Grid starts here */}

          <div className="grid md:grid-cols-3 gap-9 lg:mt-3 pb-40 ">
            {/* Single card */}
            <a
              href="https://tailwindmasterkit.com"
              className="w-full block col-span-3 shadow-2xl  "
            >
              <div className="relative overflow-hidden rounded-xl border-2 border-teal-300">
                <img
                  src="/Test.png"
                  alt="portfolio"
                  className="transform hover:scale-125 hover:blur-sm  transition duration-2000 ease-out"
                />
                <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-blue-500 rounded-md px-2">
                  CRF
                </h1>
                <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                  01
                </h1>
              </div>
            </a>
            {/* Single card */}

            <a
              href="https://placeholdertech.in"
              className="w-full block col-span-3   sm:col-span-2 shadow-2xl hover:shadow-xl"
            >
              <div className="relative overflow-hidden rounded-xl border-2 border-teal-300">
                <img
                  src="/Test.png"
                  alt="portfolio"
                  className="transform hover:scale-125 transition duration-2000 ease-out hover:blur-sm"
                />
                <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-blue-500 rounded-md px-2">
                  GITHUB
                </h1>
                <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                  02
                </h1>
              </div>
            </a>

            {/* Single card */}
            <a
              href="https://manuarora.in"
              className="w-full block col-span-3 sm:col-span-1  object-cover"
            >
              <div className="relative overflow-hidden rounded-xl shadow-2xl border-2 border-teal-300">
                <img
                  src="/Test.png"
                  alt="portfolio"
                  className="transform hover:scale-125 transition duration-2000 ease-out object-cover shadow-2xl hover:blur-sm"
                />
                <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-blue-500 rounded-md px-2">
                  Portfolio
                </h1>
                <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                  03
                </h1>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  // }

  // return (
  //   <div className="mt-40 bg-zinc-900 ">
  //     <div className="max-w-6xl mx-auto">
  //       <header className="flex flex-col md:flex-row justify-between items-center pt-20  md:my-20 lg:my-0">
  //         <div className={styles.Heading}>PROJECTS</div>
  //       </header>
  //       <div className={styles.Heading2}>Some Projects I have Worked on.</div>
  //       {/* Grid starts here */}

  //       <div className="grid md:grid-cols-2 gap-9 lg:mt-3 pb-40 ">
  //         {/* Single card */}
  //         <a
  //           href="https://manuarora.in"
  //           className="w-5/12  grid-cols-1 grid-rows-1	  sm:col-span-2 object-cover"
  //         >
  //           <div className="relative overflow-hidden rounded-xl shadow-2xl border-2 border-teal-300">
  //             <img
  //               src="/Test.png"
  //               alt="portfolio"
  //               className="transform hover:scale-125 transition duration-2000 ease-out object-cover shadow-2xl hover:blur-sm"
  //             />
  //             <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-blue-500 rounded-md px-2">
  //               Portfolio
  //             </h1>
  //             <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
  //               03
  //             </h1>
  //           </div>
  //         </a>
  //         {/* Single card */}

  //         <a
  //           href="https://manuarora.in"
  //           className="w-5/12   grid-cols-2 grid-rows-1   sm:col-span-2  object-cover"
  //         >
  //           <div className="relative overflow-hidden rounded-xl shadow-2xl border-2 border-teal-300">
  //             <img
  //               src="/Test.png"
  //               alt="portfolio"
  //               className="transform hover:scale-125 transition duration-2000 ease-out object-cover shadow-2xl hover:blur-sm"
  //             />
  //             <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-blue-500 rounded-md px-2">
  //               Portfolio
  //             </h1>
  //             <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
  //               03
  //             </h1>
  //           </div>
  //         </a>

  //         {/* Single card */}
  //         <a
  //           href="https://manuarora.in"
  //           className="w-5/12  grid-cols-1 grid-rows-2 	  sm:col-span-2  object-cover"
  //         >
  //           <div className="relative overflow-hidden rounded-xl shadow-2xl border-2 border-teal-300">
  //             <img
  //               src="/Test.png"
  //               alt="portfolio"
  //               className="transform hover:scale-125 transition duration-2000 ease-out object-cover shadow-2xl hover:blur-sm"
  //             />
  //             <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-blue-500 rounded-md px-2">
  //               Portfolio
  //             </h1>
  //             <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
  //               03
  //             </h1>
  //           </div>
  //         </a>

  //         {/* sigle */}
  //         <a
  //           href="https://manuarora.in"
  //           className="w-5/12  grid-cols-1 grid-rows-2  sm:col-span-2  object-cover"
  //         >
  //           <div className="relative overflow-hidden rounded-xl shadow-2xl border-2 border-teal-300">
  //             <img
  //               src="/Test.png"
  //               alt="portfolio"
  //               className="transform hover:scale-125 transition duration-2000 ease-out object-cover shadow-2xl hover:blur-sm"
  //             />
  //             <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-blue-500 rounded-md px-2">
  //               Portfolio
  //             </h1>
  //             <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
  //               03
  //             </h1>
  //           </div>
  //         </a>
  //       </div>
  //     </div>
  //   </div>
  // );
}
