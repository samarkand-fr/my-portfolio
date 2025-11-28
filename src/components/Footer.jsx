function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-[#0f0f0f] text-gray-800 dark:text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"></div>

      <div className="mt-10 text-center text-xs text-gray-500 dark:text-gray-400">
        © 2025{" "}
        <span
          className="
  text-2xl md:text-xl font-extrabold
  bg-gradient-to-b from-[#b85757] to-[#4fa27d]
  bg-clip-text text-transparent
  animate-gradient-vertical p-2
"
        >
          DINA
        </span>{" "}
        All rights reserved.
      </div>
    </footer>
  );
}
export default Footer;
