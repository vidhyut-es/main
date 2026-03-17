import Link from "next/link";
import { 
  Zap, 
  MapPin, 
  PhoneCall, 
  Mail, 
  ArrowRight,
  Twitter,
  Linkedin,
  Instagram,
  Facebook
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#040a10] text-gray-300 pt-20 pb-10 overflow-hidden relative border-t border-white/10">
      
      {/* Decorative Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#FFB800] to-transparent opacity-40"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Newsletter / CTA Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center bg-[#0a151f] p-8 lg:p-12 rounded-[24px] mb-20 shadow-2xl border border-white/5">
          <div className="mb-8 lg:mb-0 max-w-xl text-center lg:text-left">
            <h3 className="text-3xl font-bold text-white mb-3">Power your journey today.</h3>
            <p className="text-gray-400 text-lg">
              Join thousands of EV owners and station operators building the future of mobility with Vidhyut.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-gray-500 min-w-[300px] focus:outline-none focus:border-[#FFB800]/50 transition-colors"
            />
            <button className="bg-[#FFB800] text-[#0a151f] px-8 py-4 rounded-full font-bold tracking-wide hover:bg-[#ffca42] transition-colors shadow-lg shadow-[#FFB800]/20 active:scale-95 flex items-center justify-center gap-2">
              Subscribe <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          
          {/* Brand & Contact Column */}
          <div className="lg:col-span-2 flex flex-col items-start pr-0 lg:pr-12">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
                <div className="bg-[#FFB800] p-2 rounded-lg group-hover:bg-[#ffca42] transition-colors shadow-lg shadow-[#FFB800]/20">
                    <Zap size={24} className="text-[#0a2540] fill-current" />
                </div>
                <span className="text-2xl font-black tracking-tight text-white">Vidhyut</span>
            </Link>
            <p className="text-gray-400 mb-8 leading-relaxed max-w-sm">
              We are building the essential digital infrastructure to make EV ownership convenient, stress-free, and hyper-connected across India and beyond.
            </p>
            
            <div className="flex flex-col gap-4 text-sm font-medium">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-[#FFB800]" />
                <span className="text-gray-300">Vidhyut Tower, Indiranagar, Bengaluru, KA 560038</span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneCall size={18} className="text-[#FFB800]" />
                <span className="text-gray-300">+91 1800-419-8800</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#FFB800]" />
                <span className="text-gray-300">hello@vidhyut.in</span>
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-[#FFB800]/30 transition-all">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-[#FFB800]/30 transition-all">
                <Linkedin size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-[#FFB800]/30 transition-all">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-[#FFB800]/30 transition-all">
                <Facebook size={18} />
              </Link>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Platform</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400 font-medium">
              <li><Link href="#" className="hover:text-[#FFB800] transition-colors">Charging Network</Link></li>
              <li><Link href="#" className="hover:text-[#FFB800] transition-colors">Route Planner</Link></li>
              <li><Link href="#" className="hover:text-[#FFB800] transition-colors">Virtual Wallet</Link></li>
              <li><Link href="#" className="hover:text-[#FFB800] transition-colors">Mobile App</Link></li>
              <li><Link href="#" className="hover:text-[#FFB800] transition-colors">Station Analytics</Link></li>
              <li><Link href="#" className="hover:text-[#FFB800] transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Solutions</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400 font-medium">
              <li><Link href="#" className="hover:text-[#FFB800] transition-colors">For EV Drivers</Link></li>
              <li><Link href="#" className="hover:text-[#FFB800] transition-colors">For Station Hosts</Link></li>
              <li><Link href="#" className="hover:text-[#FFB800] transition-colors">For Commercial Fleets</Link></li>
              <li><Link href="#" className="hover:text-[#FFB800] transition-colors">For Automakers (OEM)</Link></li>
              <li><Link href="#" className="hover:text-[#FFB800] transition-colors">For Governments</Link></li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Company</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400 font-medium">
              <li><Link href="#" className="hover:text-[#FFB800] transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-[#FFB800] transition-colors">Careers & Culture</Link></li>
              <li><Link href="#" className="hover:text-[#FFB800] transition-colors">News & Media</Link></li>
              <li><Link href="#" className="hover:text-[#FFB800] transition-colors">Developer API</Link></li>
              <li><Link href="#" className="hover:text-[#FFB800] transition-colors">Contact Support</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-medium">
            &copy; {currentYear} Vidhyut Energies Solutions Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500 font-medium">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
