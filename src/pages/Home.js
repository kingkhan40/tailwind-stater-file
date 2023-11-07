import React from "react";
import Typed from "react-typed";
import Blog from "../components/Blog";

const Home = () => {
  return (
    <>
      <div className="m-14 lg:grid lg:grid-cols-1 lg:gap-x-4 lg:gap-y-6 md:grid-cols-2">
        <div className="md:col-span-2 lg:flex lg:flex-wrap md:grid md:grid-cols-1 md:gap-y-6 md:gap-x-4">
          <div className="mt-12 md:col-span-1 text-xl leading-7 w-full md:w-auto">
            <h1 className="typed-text ml-4 text-rose-700 my-5 font-bold text-2xl md:text-4xl">
              <Typed
                strings={[
                  "Frontend Developer",
                  "Backend Developer",
                  "UI/UX Designer",
                ]}
                typeSpeed={60}
                backSpeed={60}
                backDelay={2000}
                loop
                autoStart
              />
            </h1>
            <p className="text-lg text-gray-500">
              Quasi est quaerat. Sit molestiae et. Provident ad dolorem
              occaecati eos iste. Soluta rerum quidem minus ut molestiae velit
              error quod. Excepturi quidem expedita molestias quas.
            </p>
            <p className="text-lg text-gray-500">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat. Quasi aperiam sit non sit neque reprehenderit.
            </p>
          </div>
        </div>
        <div className="md:col-start-4 w-full md:w-auto">
          <div className="relative mt-4">
            <img
              src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
              alt=""
              className="h-auto rounded-lg shadow-lg"
              style={{ width: "650px" }}
            />
          </div>
        </div>
      </div>
      <hr />
      <hr />
      <Blog/>
    </>
  );
};

export default Home;
