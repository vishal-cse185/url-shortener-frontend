import { motion } from "motion/react";

export function Hero() {
  const sites = [
    "github.com",
    "youtube.com",
    "linkedin.com",
    "amazon.in",
    "stackoverflow.com",
    "coursera.org",
  ];

  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-20">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-purple-600/20 rounded-full blur-[180px]" />

        <div className="absolute top-40 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />

      </div>

      <div className="relative max-w-7xl mx-auto text-center">

        {/* Logo Text */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <span className="px-5 py-2 rounded-full border border-purple-500/20 bg-black/40 backdrop-blur-xl text-purple-300">
            URL Shortener Platform
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-black leading-tight mb-8"
        >
          <span className="text-white">
            Shorten URLs.
          </span>

          <br />

          <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 bg-clip-text text-transparent">
            Track Analytics.
          </span>

          <br />

          <span className="text-gray-300 text-5xl md:text-6xl">
            Generate QR Codes.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-400 max-w-3xl mx-auto mb-14"
        >
          Create branded short links, generate QR codes,
          monitor clicks and manage all your URLs
          from one modern dashboard.
        </motion.p>

        {/* Floating URL Chips */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">

          {sites.map((site, index) => (
            <motion.div
              key={site}
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 2 + index * 0.3,
                repeat: Infinity,
              }}
              className="px-5 py-3 rounded-full border border-purple-500/20 bg-black/40 backdrop-blur-xl text-purple-300"
            >
              🔗 {site}
            </motion.div>
          ))}

        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="rounded-3xl border border-purple-500/20 bg-black/40 backdrop-blur-xl p-8"
          >
            <h3 className="text-5xl font-bold text-purple-400">
              10+
            </h3>

            <p className="text-gray-400 mt-3">
              Links Created
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="rounded-3xl border border-purple-500/20 bg-black/40 backdrop-blur-xl p-8"
          >
            <h3 className="text-5xl font-bold text-blue-400">
              500+
            </h3>

            <p className="text-gray-400 mt-3">
              Redirects
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="rounded-3xl border border-purple-500/20 bg-black/40 backdrop-blur-xl p-8"
          >
            <h3 className="text-5xl font-bold text-green-400">
              100%
            </h3>

            <p className="text-gray-400 mt-3">
              QR Support
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}