import React from "react";

const NotFound = () => {
  return (
    <div className="container mx-auto p-4 text-center max-w-xl">
      <h1 className="text-3xl font-bold mb-4 text-white">Page Not Found</h1>
      <p className="text-lg text-gray-400 mb-4">
        Sorry, the page you are looking for does not exist.
      </p>
      <a href="/" className="text-blue-500 hover:underline">
        Go back to Home
      </a>
    </div>
  );
};

export default NotFound;
