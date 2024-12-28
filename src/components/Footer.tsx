

import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Get Started */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get Started</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Explore Courses</a></li>
              <li><a href="#" className="hover:underline">View Pricing</a></li>
              <li><a href="#" className="hover:underline">Sign Up</a></li>
              <li><a href="#" className="hover:underline">Become an Instructor</a></li>
            </ul>
          </div>

          {/* Discover */}
          <div>
            <h4 className="text-white font-semibold mb-4">Discover</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Workshops</a></li>
              <li><a href="#" className="hover:underline">Skill Assessments</a></li>
              <li><a href="#" className="hover:underline">Events</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Social</h4>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white">
                <FaFacebook size={24} />
              </Link>
              <Link href="#" className="hover:text-white">
                <FaTwitter size={24} />
              </Link>
              <Link href="#" className="hover:text-white">
                <FaInstagram size={24} />
              </Link>
              <Link href="#" className="hover:text-white">
                <FaLinkedin size={24} />
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p>Education & Skills Center</p>
            <p>123 Learning Road, Knowledge City</p>
            <p>Email: hafizabdulahadkhanafridi@gmail.com</p>
            <p>Phone: 03128760904</p>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-10 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2024 Education & Skills. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:underline">Accessibility</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
