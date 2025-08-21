import Link from "next/link";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-pink-100 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row gap-10">
        <div className="space-y-4 flex-4">
          <h2 className="text-2xl font-bold text-pink-600 font-serif">LadiesParlour</h2>
          <p className="text-sm sm:text-base leading-relaxed">
            Discover your inner beauty with our premium <br/>treatments and packages designed just for you.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Instagram" className="text-pink-600 hover:text-pink-800 transition">
              <Instagram size={24} />
            </a>
            <a href="#" aria-label="Facebook" className="text-pink-600 hover:text-pink-800 transition">
              <Facebook size={24} />
            </a>
            <a href="#" aria-label="Twitter" className="text-pink-600 hover:text-pink-800 transition">
              <Twitter size={24} />
            </a>
            <a href="#" aria-label="YouTube" className="text-pink-600 hover:text-pink-800 transition">
              <Youtube size={24} />
            </a>
          </div>
        </div>

        <nav className="space-y-3 flex-1">
          <h3 className="text-lg font-semibold text-pink-600 font-serif mb-4">Explore</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>
              <Link href="/" className="hover:text-pink-800 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-pink-800 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-pink-800 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-pink-800 transition">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="space-y-3 flex-1">
          <h3 className="text-lg font-semibold text-pink-600 font-serif mb-4">Support</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>
              <Link href="/faq" className="hover:text-pink-800 transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-pink-800 transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-pink-800 transition">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>

        <div className="space-y-3 text-sm sm:text-base flex-1">
          <h3 className="text-lg font-semibold font-serif text-pink-600 mb-4">Contact Us</h3>
          <p>
            <span className="font-semibold">Email: </span>
            <a href="mailto:contact@ladiesparlour.fr" className="hover:text-pink-800 transition">
              contact@ladiesparlour.fr
            </a>
          </p>
          <p>
            <span className="font-semibold">Phone: </span>
            <a href="tel:+33123456789" className="hover:text-pink-800 transition">
              +33 123456789
            </a>
          </p>
          <p>Eiffel Tower,<br />Champ de Mars, 5 Avenue Anatole <br />
            75007 Paris, France</p>
        </div>
      </div>

      <div className="border-t border-pink-300 text-center py-6 text-sm text-pink-700 bg-pink-50">
        &copy; {new Date().getFullYear()} LadiesParlour. All rights reserved.
      </div>
    </footer>
  );
}
