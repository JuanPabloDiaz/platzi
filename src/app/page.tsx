import Image from "next/image";
// import { Card } from "../components/Card";
import { CardMap } from "../components/CardMap";

export async function getServerSideProps() {
  const res = await fetch("/app/api/route.ts");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
export default function Home({ data }) {
  const container =
    "group rounded-lg border border-transparent px-5 py-4 transition-colors border border-white";
  const a_style =
    "group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30";
  const span_style =
    "inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none";
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            src="/platziHub.svg"
            alt="Logo"
            width={180}
            height={37}
            priority
          />
        </div>
      </div>
      {/* <Card /> */}
      <>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {data.map((item, index) => (
                <div key={index} className="p-4 md:w-1/3">
                  <CardMap item={item} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
      <nav className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {/* <ul
        // className="rounded-lg border-2 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <a
            href="https://github.com/JuanPabloDiaz/platzi/blob/main/2024"
            target="_blank"
            rel="noopener noreferrer"
          >
            2024
          </a>
          <li className={a_style}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Project 1<span className={span_style}>-&gt;</span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Projects created in 2024 for Platzi
              </p>
            </a>
          </li>
          <li className={a_style}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Project 1<span className={span_style}>-&gt;</span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Projects created in 2024 for Platzi
              </p>
            </a>
          </li>
          <li className={a_style}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Project 1<span className={span_style}>-&gt;</span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Projects created in 2024 for Platzi
              </p>
            </a>
          </li>
          <li className={a_style}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Project 1<span className={span_style}>-&gt;</span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Projects created in 2024 for Platzi
              </p>
            </a>
          </li>
        </ul> */}
        <>
          <a
            className={a_style}
            href="https://github.com/JuanPabloDiaz/platzi/tree/main/2022"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>2022</h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Projects created in 2022 for Platzi
            </p>
          </a>
          <a
            href="#"
            className={a_style}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Mobile First Project
              <span className={span_style}>-&gt;</span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>2022</p>
          </a>
          <a
            href="https://rps.jpdiaz.dev"
            className={a_style}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Rock Paper Scissors
              <span className={span_style}>-&gt;</span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>2022</p>
          </a>
          <a
            href="#"
            className={a_style}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Google Clone
              <span className={span_style}>-&gt;</span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>2022 </p>
          </a>
          <a
            href="#"
            className={a_style}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Platzi Movies
              <span className={span_style}>-&gt;</span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>2022</p>
          </a>
          <a
            href="#"
            className={a_style}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Vid-Box
              <span className={span_style}>-&gt;</span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>2022</p>
          </a>
          <a
            href="#"
            className={a_style}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Platzi Day
              <span className={span_style}>-&gt;</span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>2022</p>
          </a>
          <a
            href="#"
            className={a_style}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Layout Template
              <span className={span_style}>-&gt;</span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>2022</p>
          </a>
        </>
        <div className="grid grid-rows-4 grid-flow-col gap-4">
          <div className={container}>
            <h2 className={`mb-3 text-2xl font-semibold`}>
              CSS Grid
              <span className={span_style}>-&gt;</span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>2022</p>
            <a
              href="#"
              className={a_style}
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
            <a
              href="#"
              className={a_style}
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo
            </a>
          </div>
          <div className={container}>
            <h2 className={`mb-3 text-2xl font-semibold`}>
              CSS Grid
              <span className={span_style}>-&gt;</span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>2022</p>
            <a
              href="#"
              className={a_style}
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
            <a
              href="#"
              className={a_style}
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo
            </a>
          </div>
        </div>
      </nav>
      <footer className="flex items-center justify-center w-full h-24 bg-gray-100 dark:bg-neutral-800/30">
        <p className="text-xs text-center text-gray-500 dark:text-neutral-400">
          &copy; {new Date().getFullYear()} Juan Pablo Díaz
        </p>
      </footer>
    </main>
  );
}
