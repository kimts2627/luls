import React from "react";

const Lead: React.FC = () => {
  return (
    <section className="w-full bg-purple-100 flex items-center justify-center">
      <div className="w-full h-full max-w-screen-1120 bg-purple-200 py-80px flex">
        <aside className="w-300px h-full bg-purple-500 pl-18px Montserrat text-30px">Footer</aside>
        <div className="h-full bg-purple-300 flex flex-col items-start">
          <div className="text-4xl h-400px flex items-center justify-center">Someting in here!!!</div>
        </div>
      </div>
    </section>
  );
};

export default Lead;
