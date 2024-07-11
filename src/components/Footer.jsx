import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const iconContainerStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const defaultSvgStyle = {
  fill: 'grey', // Default color
  transition: 'fill 0.3s ease',
};

const hoverSvgStyle = {
  fill: 'red', // Color on hover
};

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <footer>
        <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-0">
          {/* Top area: Blocks */}
          <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">

            {/* 1st block */}
            <div className="col-span-12 lg:col-span-4">
              <div className="box-border border-b-4 border-red-700 p-8 bg-gray-50  text-red-700 text-center rounded-lg xl:w-80 mx-auto">
                <h3 className="font-bold text-2xl mb-4">Delta Engineering Services</h3>
                <div className='text-md font-medium text-gray-600'>
                  <p>No.23 Parthasarathy Street,</p>
                  <p>Muthamizh Nagar,Pammal,</p>
                  <p> Chennai - 600075.</p>

                  <a href="https://maps.app.goo.gl/VgbynoVvRbZxCksG9" style={{ display: 'inline-block', width: '25px', height: '25px', position: 'relative' }}>
                    <div style={iconContainerStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={isHovered ? hoverSvgStyle : defaultSvgStyle}>
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 4.25 7 13 7 13s7-8.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        <path d="M0 0h24v24H0z" fill="none" />
                      </svg>
                    </div>
                  </a>

                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4">
              <div className="box-border border-b-4 border-red-700 p-8 bg-gray-50 text-red-700 text-center rounded-lg xl:w-80 mx-auto">
                <h3 className="font-bold text-2xl mb-4">Contact Us</h3>
                <div className='text-md font-medium text-gray-600'>
                  <ul className="text-md">
                    <li className="mb-2">
                      <p className="text-gray-900 hover:text-red-700 hover:tracking-wider transition duration-250 ease-in-out">Phone </p>
                    </li>
                    <li className="mb-2">
                      <p className="text-gray-900 hover:text-red-700 hover:tracking-wider transition duration-250 ease-in-out">Whatsapp : +91 99623 15051</p>
                    </li>
                    <li className="mb-2">
                      <p className="text-gray-900 hover:text-red-700 hover:tracking-wider transition duration-250 ease-in-out">E-mail</p>
                    </li>
                    <li className="mb-2">
                      <p className="text-gray-900 hover:text-red-700 hover:tracking-wider transition duration-250 ease-in-out"> service.deltaengineering@gmail.com</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4">
              <div className="box-border border-b-4 border-red-700 p-8 bg-gray-50 text-red-700 text-center rounded-lg xl:w-80 mx-auto">
                <h3 className="font-bold text-2xl mb-4">Our Service</h3>
                <div className='text-md font-medium text-gray-600'>
                  <ul className="text-md">
                    <li className="mb-2">
                      <Link to="#" className="text-gray-900 hover:text-red-700 hover:tracking-wider transition duration-250 ease-in-out">Pump Service</Link>
                    </li>
                    <li className="mb-2">
                      <Link to="#" className="text-gray-900 hover:text-red-700 hover:tracking-wider transition duration-250 ease-in-out">AMC</Link>
                    </li>
                    <li className="mb-2">
                      <Link to="#" className="text-gray-900 hover:text-red-700 hover:tracking-wider transition duration-250 ease-in-out">General Consultation</Link>
                    </li>
                    <li className="mb-2">
                      <Link to="#" className="text-gray-900 hover:text-red-700 hover:tracking-wider transition duration-250 ease-in-out">Irrigation Systems</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
              <div className="text-sm text-gray-200 font-semibold py-1">
                Copyright &copy; {new Date().getFullYear()}{"  "}
                <HashLink
                  to="#"
                  className=" hover:text-gray-900"
                >
                  Delta Engineering Services
                </HashLink>. All rights reserved.
              </div>
            </div>
          </div>

        </div>

      </footer>
    </>
  )
}

export default Footer;
