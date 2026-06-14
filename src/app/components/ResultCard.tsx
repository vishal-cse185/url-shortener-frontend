import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Copy, ExternalLink, QrCode, TrendingUp, Shield, Tag, Check } from 'lucide-react';
import axios from 'axios';

interface ResultCardProps {
  data: any;
}

export function ResultCard({ data }: ResultCardProps) {
  const [copied, setCopied] = useState(false);
  const [stats, setStats] = useState<any>(null);
  const [qrCode, setQrCode] = useState<string>('');

  useEffect(() => {
    if (data?.shortCode) {
      fetchStats();
      fetchQrCode();
    }
  }, [data]);

  const fetchStats = async () => {
    try {
      const response = await axios.get(`https://url-shortener-backend-s2uq.onrender.com/api/url/stats/${data.shortCode}`);
      setStats(response.data);
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const fetchQrCode = async () => {
    try {
      const response = await axios.get(`https://url-shortener-backend-s2uq.onrender.com/api/url/qr/${data.shortCode}`, {
        responseType: 'blob',
      });
      const qrUrl = URL.createObjectURL(response.data);
      setQrCode(qrUrl);
    } catch (error) {
      console.error('Error fetching QR code:', error);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(data.shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getRiskColor = (risk: string) => {
    switch (risk?.toLowerCase()) {
      case 'low':
        return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'medium':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'high':
        return 'text-red-400 bg-red-400/10 border-red-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  if (!data) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-5xl mx-auto mt-8"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>

        <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-white">Your Short Link</h3>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-3 h-3 bg-green-400 rounded-full shadow-lg shadow-green-400/50"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <div className="relative group">
                <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg group-hover:border-purple-500/30 transition-colors">
                  <input
                    type="text"
                    value={data.shortUrl || ''}
                    readOnly
                    className="flex-1 bg-transparent text-white outline-none text-lg"
                  />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleCopy}
                    className="p-2 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg transition-colors"
                  >
                    {copied ? (
                      <Check className="w-5 h-5 text-green-400" />
                    ) : (
                      <Copy className="w-5 h-5 text-purple-400" />
                    )}
                  </motion.button>
                  <motion.a
                    href={data.shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-blue-400" />
                  </motion.a>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-4 bg-white/5 border border-white/10 rounded-lg"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Tag className="w-4 h-4 text-purple-400" />
                    <span className="text-xs text-gray-400">Category</span>
                  </div>
                  <p className="text-lg font-semibold text-white capitalize">
                    {stats?.category || data.category || 'General'}
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-4 bg-white/5 border border-white/10 rounded-lg"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4 text-blue-400" />
                    <span className="text-xs text-gray-400">Risk Level</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-sm font-semibold border ${getRiskColor(stats?.riskLevel || data.riskLevel || 'low')}`}>
                      {stats?.riskLevel || data.riskLevel || 'Low'}
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-4 bg-white/5 border border-white/10 rounded-lg"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-xs text-gray-400">Clicks</span>
                  </div>
                  <p className="text-lg font-semibold text-white">
                    {stats?.clickCount || data.clickCount || 0}
                  </p>
                </motion.div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <QrCode className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-medium text-gray-300">QR Code</span>
              </div>
              {qrCode ? (
                <motion.img
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  src={qrCode}
                  alt="QR Code"
                  className="w-40 h-40 rounded-lg bg-white p-2"
                />
              ) : (
                <div className="w-40 h-40 rounded-lg bg-white/10 animate-pulse"></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
