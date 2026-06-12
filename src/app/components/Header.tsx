import { Link2 } from 'lucide-react';
import { motion } from 'motion/react';

export function Header() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-3">

            <div className="relative">
              <div className="absolute inset-0 bg-purple-500 blur-xl opacity-60 rounded-full"></div>

              <div className="relative p-3 rounded-xl bg-gradient-to-r from-purple-600 to-purple-400">
                <Link2 className="w-6 h-6 text-white" />
              </div>
            </div>

            <span className="text-3xl font-bold text-white tracking-wide">
              URL Shortener
            </span>

          </div>
        </div>
      </div>
    </motion.header>
  );
}