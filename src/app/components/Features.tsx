import { motion } from 'motion/react';
import { Link2, QrCode, BarChart3, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Link2,
    title: 'Custom Short Links',
    description: 'Create branded short links with custom aliases that reflect your brand identity.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: QrCode,
    title: 'QR Code Generation',
    description: 'Instantly generate QR codes for your short links, perfect for print and offline marketing.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: BarChart3,
    title: 'Click Analytics',
    description: 'Track engagement with detailed analytics and insights on every link you create.',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    icon: Shield,
    title: 'Risk Monitoring',
    description: 'Automatic security scanning to protect your audience from malicious links.',
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Zap,
    title: 'Category Detection',
    description: 'Intelligent categorization of your links for better organization and management.',
    gradient: 'from-fuchsia-500 to-purple-500',
  },
];

export function Features() {
  return (
    <div className="w-full px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Everything you need to manage links
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Powerful features to create, track, and optimize your links
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl from-purple-500/20 to-blue-500/20"></div>

              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 h-full group-hover:border-white/20 transition-colors">
                <div className="mb-6">
                  <div className={`inline-flex p-3 bg-gradient-to-r ${feature.gradient} rounded-xl shadow-lg`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
