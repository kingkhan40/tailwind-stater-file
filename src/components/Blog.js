import React from 'react';

const Blog = () => {
  const images = [
    'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
    'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
    'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&h=1104&q=80',
    'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
    'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
    'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&h=1104&q=80',
  ];

  const descriptions = [
    'Learn how to boost your business with expert advice on improving your conversion rate.',
    'Discover how to use search engine optimization strategies to drive sales for your business.',
    'Improve your customer experience and enhance customer satisfaction with these tips.',
    'Explore the latest industry trends and best practices for digital marketing success.',
    // Duplicate the entries for a total of 8 cards
    'Learn how to boost your business with expert advice on improving your conversion rate.',
    'Discover how to use search engine optimization strategies to drive sales for your business.',
    'Improve your customer experience and enhance customer satisfaction with these tips.',
    'Explore the latest industry trends and best practices for digital marketing success.',
  ];

  const authors = [
    'Michael Foster',
    'Lindsay Walton',
    'Tom Cook',
    'Sarah Johnson',
    // Duplicate the entries for a total of 8 cards
    'Michael Foster',
    'Lindsay Walton',
    'Tom Cook',
    'Sarah Johnson',
  ];

  const authorsImages = [
    'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&h=1104&q=80',
    // Duplicate the entries for a total of 8 cards
    'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&h=1104&q=80',
  ];

  return (
    <>
      <div className="p-6">
        <h2 className="text-4xl text-center font-semibold" style={{ color: 'blue' }}>
          Blog
        </h2>
      </div>
      <div className="m-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {images.map((imageUrl, index) => (
          <div className="p-4" key={index}>
            <article className="bg-white rounded-lg shadow-md p-3">
              <img
                src={imageUrl}
                alt=""
                className="w-full h-64 object-cover"
              />
              <div className="bg-gray-200 h-2 w-full"></div>
              <div className="bg-gray-300 h-2 w-2/3 mt-2 mb-4 mx-auto"></div>
              <time dateTime="2020-03-16" className="text-gray-500">
                Mar 16, 2020
              </time>
              <div className="flex items-center mt-2">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img
                    src={authorsImages[index]} // Use the author image URL here
                    alt=""
                    className="w-full h-full cursor-pointer object-cover"
                  />
                </div>
                <div className="ml-2 text-sm text-gray-700">{authors[index]}</div>
              </div>
              <h3 className="text-xl font-semibold mt-2">
                <a href="#" className="text-blue-600">
                  {descriptions[index].slice(0, 50)}
                </a>
              </h3>
            </article>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
