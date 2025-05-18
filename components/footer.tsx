import React from 'react'
import {Instagram , Facebook, Twitter, Linkedin} from 'lucide-react'


export default function Footer() {
  return (
    // Élément HTML <footer> : sémantique pour indiquer qu’il s’agit du pied de page
    <footer className="flex flex-col bg-gray-100 text-gray-cols-2 md:grid-cols-4 gap-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* column 1*/}
        </div>
        <div>
            <h2 className="font-bold text-lg mb-4">Launchpage</h2>
                <ul className="space-y-2 text-sm">
                    <li> <a href="#"className="hover:underline">Company Overview</a></li>
                    <li><a href="#"className="hover:underline">Careers</a></li>
                    <li><a href="#"className="hover:underline">Press & Media</a></li>
                    <li><a href="#"className="hover:underline">Testimonials</a></li>
                </ul>
        </div>

            {/* column 2*/}
        <div>
            <h2 className="font-bold text-lg mb-4"></h2>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:underline">Blog</a></li>
                    <li><a href="#" className="hover:underline">Help center</a></li>
                    <li><a href="#" className="hover:underline">Webinars & Events</a></li>
                    <li><a href="#" className="hover:underline">Case Studies</a></li>
                </ul>
        </div>

            {/* column 3*/}
        <div>
            <h2 className="font-bold text-lg mb-4">Support & Contact</h2>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:underline">Contact Us</a></li>
                    <li><a href="#" className="hover:underline">Technical Support</a></li>
                    <li><a href="#" className="hover:underline">Feedback</a></li>
                    <li><a href="#" className="hover:underline">Community Forum</a></li>
                </ul>
        </div>

            {/* column 4*/} 
        <div>  
            <h2 className="font-bold text-lg mb-4">Connect</h2>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:underline w-6 h-6 text-pink-500 hover:text-pink-700 transition">Instagram</a></li>
                    <li><a href="#" className="hover:underline w-6 h-6 text-blue-600">Facebook</a></li>
                    <li><a href="#" className="hover:underline w-6 h-6 text-blue-500 hover:text-blue-700">Twitter</a></li>
                    <li><a href="#" className="hover:underline w-6 h-6 text-blue-700 hover:text-blue-900">Linkedin</a></li>
                </ul> 
        </div>
    </footer> 
  )
}
    







       