import React from "react";
import Nav from "@layout/Nav";
import Button from "@components/common/Button";

const Layout: React.FC = () => {
  return (
    <header className="fixed top-0 w-full h-72px shadow-md bg-white flex items-center justify-center z-50">
      <div className="bg-gray-100 w-full max-w-screen-1440 h-full flex items-center justify-center">
        <div className="w-full bg-gray-200 max-w-screen-1120 h-full flex">
          <span className="w-logoBox h-full flex justify-center items-center">
            <p className="w-full pl-20px Montserrat text-20px">LIKE LION US LOGO</p>
          </span>
          <Nav />
          <Button
            width="110"
            height="40"
            txtColor="white"
            ctx="Join us !"
            outLine={false}
            margin={{ direction: "top", px: "20" }}
          />
        </div>
      </div>
    </header>
  );
};

export default Layout;
