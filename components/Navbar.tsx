import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/assets/logo.svg" // logo path 
            alt="Sarana Consultancy Logo"
            width={80} // adjust size to fit your navbar
            height={50}
            className="object-contain"
          />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-primary">
          <li className="cursor-pointer hover:text-accent">Home</li>
          <li className="cursor-pointer hover:text-accent">About</li>
          <li className="cursor-pointer hover:text-accent">Services</li>
          <li className="cursor-pointer hover:text-accent">Products</li>
          <li className="cursor-pointer hover:text-accent">Contact</li>
        </ul>

        {/* CTA Button */}
        <button className="hidden md:block bg-accent text-white px-5 py-2 rounded-lg shadow hover:bg-accent/90">
          Request Quote
        </button>
      </div>
    </nav>
  );
}
