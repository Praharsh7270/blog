// eslint-disable-next-line no-unused-vars
import { Button, Navbar, TextInput } from "flowbite-react";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar className="border-b-2 flex justify-between items-center px-4 py-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Pra
        </span>
        Blog
      </Link>
      <div className="flex items-center">
        <form className="hidden lg:inline">
          <TextInput
            type="text"
            placeholder="Search"
            rightIcon={AiOutlineSearch}
            className="mr-2"
          />
        </form>
        <Button className="w-12 h-10 lg:hidden" color="gray" pill>
          <AiOutlineSearch />
        </Button>
        <Button
          className="w-10 h-10 hidden sm:inline border rounded-lg ml-2"
          color="gray"
        >
          <FaMoon />
        </Button>
        <Link to="/signin" className="ml-2">
          <Button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
            Sign in
          </Button>
        </Link>
      </div>
      <Link to="/" >
      home
        </Link>
        <Link to="/about" >
      about
        </Link>
        <Link to="/projects" >
      projects
        </Link>
    </Navbar>
  );
};

export default Header;
