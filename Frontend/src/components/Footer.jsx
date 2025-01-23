import React from 'react';
import { Leaf, Mail, MapPin, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-green-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-6 w-6 text-green-600" />
              <h3 className="text-xl font-bold text-green-700">EcoPolis</h3>
            </div>
            <p className="text-gray-600">
              Transforming urban spaces through AI-powered biodiversity planning for sustainable cities.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-green-600">Our Solutions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">Urban Planning</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">Species Database</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">Case Studies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-green-600">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">Research Papers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">Sustainability Reports</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">API Access</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-green-600" />
                <span className="text-gray-600">IIT (ISM) Dhanbad</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-green-600" />
                <a href="mailto:23je0305@iitism.ac.in" target='_blank' className="text-gray-600 hover:text-green-600">
                  email id
                </a>
              </div>
            </div>
            
            <div className="flex space-x-4 pt-2">
              
              <a href="https://github.com/SamarthJ2004/EcoPolis-Agglo" target="_blank" className="text-gray-400 hover:text-green-600">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/devraj-bandopadhyay-366b96288/" target="_blank" className="text-gray-400 hover:text-green-600">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2025 EcoPolis. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-green-600 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-green-600 text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-green-600 text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};