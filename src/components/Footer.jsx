const Footer = () => {
  return (
    <footer className="bg-[#0F172A] border-t border-gray-800 text-[#E5E7EB] py-6">

      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left */}
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Rajat Kumar Saini. Backend Developer.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
