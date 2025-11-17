export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-2xl font-bold text-denim">Sarana Consultancy</h1>

        <ul className="hidden md:flex items-center gap-8 text-denim">
          <li className="hover:text-sapphire cursor-pointer">Home</li>
          <li className="hover:text-sapphire cursor-pointer">About</li>
          <li className="hover:text-sapphire cursor-pointer">Services</li>
          <li className="hover:text-sapphire cursor-pointer">Products</li>
          <li className="hover:text-sapphire cursor-pointer">Contact</li>
        </ul>

        <button className="md:block hidden bg-sapphire text-white px-5 py-2 rounded-lg shadow hover:bg-sapphire/90">
          Request Quote
        </button>
      </div>
    </nav>
  );
}
