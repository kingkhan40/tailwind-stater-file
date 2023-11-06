import React from 'react';
import Typed from 'react-typed';

const Home = () => {
  return (
    <div className="flex flex-wrap mx-4 md:mx-20 items-center my-20">
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl font-bold text-indigo-900 mb-4">We’re Changing The Way Of People.</h1>
        <h1 className="typed-text text-#06b6d4 my-5 font-bold text-2xl md:text-4xl">
          <Typed
            strings={[
              'Frontend Developer',
              'Backend Developer',
              'UI/UX Designer',
            ]}
            typeSpeed={50} // Font size is 40px
            backSpeed={40}
            backDelay={1000}
            loop
            autoStart
          />
        </h1>
        <p className="text-gray-700 mb-4">
          Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis cupidatat mollit aute velit. Et labore commodo nulla aliqua proident mollit ullamco exercitation tempor.
        </p>
      </div>
      <div className="w-full md:w-1/2">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 md:ml-80">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKAI-JYimKmg8ymuLmgKpVEojZWxzdnRFIaA&usqp=CAU"
              alt=""
              className="w-full h-auto rounded-lg shadow-lg md:mx-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
