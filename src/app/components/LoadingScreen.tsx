// components/LoadingScreen.jsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 flex items-center justify-center bg-white z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.h1
              className="text-4xl font-bold mb-4"
              animate={{
                color: ['#000000', '#3b82f6', '#000000'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              Pioneering Creating Excellence
            </motion.h1>
            <motion.div
              className="h-2 bg-blue-500 rounded-full mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 200 }}
              transition={{ duration: 3 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}