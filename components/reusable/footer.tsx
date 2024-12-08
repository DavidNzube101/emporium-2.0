import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Top */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <Image
              src="/emporium.png"
              alt="Emporium Logo"
              width={120}
              height={40}
              className="mb-4"
            />
            <p className="text-sm text-gray-400">
              Empowering businesses and individuals with the best financial and professional advice since 2008.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Services", "Testimonials", "Projects", "About Us", "Blog", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-gray-400 hover:text-gray-200 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <strong>Phone:</strong> +1 234 567 890
              </li>
              <li>
                <strong>Email:</strong> support@emporium.com
              </li>
              <li>
                <strong>Address:</strong> 123 Emporium Street, Global City
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Emporium. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}