"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import {
  FaSun,
  FaMoon,
} from "react-icons/fa"; // Import icons

// Header Component
const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex justify-between items-center p-4 shadow-lg bg-gray-100 dark:bg-gray-800">
      <div className="flex items-center">
        <Image
          src="/edukills.png"
          alt="Logo"
          width={100}
          height={50}
          className="mr-2"
        />
        <h1 className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 tracking-wide">
          <span className="text-green-500 dark:text-green-400">Edu</span>
          <span className="text-gray-700 dark:text-gray-300">Skill</span>
        </h1>
      </div>
      <nav className="flex items-center space-x-6">
        <Link
          href="/"
          className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Home
        </Link>
        <Link
          href="/blogs"
          className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors"
        >
          Blogs
        </Link>
        <Link
          href="/Contact"
          className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Contact
        </Link>
      </nav>

      <div className="flex items-center space-x-6">
  <Link 
    href="/signin" 
    className="text-lg font-medium text-blue-600 dark:text-blue-400 hover:underline transition-all"
  >
    Sign In
  </Link>
  <Link 
    href="/signup" 
    className="text-lg font-medium text-green-500 dark:text-green-400 hover:underline transition-all"
  >
    Sign Up
  </Link>
  <button
    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
  >
    {theme === "dark" ? (
      <FaSun className="text-yellow-400 text-xl" />
    ) : (
      <FaMoon className="text-blue-500 text-xl" />
    )}
  </button>
</div>

    </header>
  );
};
export default Header;
