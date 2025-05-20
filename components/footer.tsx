import React from 'react'
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Colonne 1 */}
        <div>
          <h2 className="font-bold text-lg mb-4">Launchpage</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Company Overview</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Press & Media</a></li>
            <li><a href="#" className="hover:underline">Testimonials</a></li>
          </ul>
        </div>

        {/* Colonne 2 */}
        <div>
          <h2 className="font-bold text-lg mb-4">Resources</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Webinars & Events</a></li>
            <li><a href="#" className="hover:underline">Case Studies</a></li>
          </ul>
        </div>

        {/* Colonne 3 */}
        <div>
          <h2 className="font-bold text-lg mb-4">Support & Contact</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Technical Support</a></li>
            <li><a href="#" className="hover:underline">Feedback</a></li>
            <li><a href="#" className="hover:underline">Community Forum</a></li>
          </ul>
        </div>

        {/* Colonne 4 */}
        <div>
          <h2 className="font-bold text-lg mb-4">Connect</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Instagram className="w-5 h-5 text-pink-500" />
              <a href="#" className="hover:underline">Instagram</a>
            </li>
            <li className="flex items-center gap-2">
              <Facebook className="w-5 h-5 text-blue-600" />
              <a href="#" className="hover:underline">Facebook</a>
            </li>
            <li className="flex items-center gap-2">
              <Twitter className="w-5 h-5 text-blue-500" />
              <a href="#" className="hover:underline">Twitter</a>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin className="w-5 h-5 text-blue-700" />
              <a href="#" className="hover:underline">Linkedin</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Ligne de séparation et copyright */}
      <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Launchpage. All rights reserved.
      </div>
    </footer>
  )
}
