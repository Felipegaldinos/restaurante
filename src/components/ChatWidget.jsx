import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      toast({
        title: "🚧 Funcionalidade em construção!",
        description: "O chat ainda não está disponível, mas você pode solicitar essa funcionalidade no próximo prompt! 🚀",
      });
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={handleOpen}
          className="w-16 h-16 bg-brand-red text-white rounded-full flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={32} /> : <MessageSquare size={32} />}
        </motion.button>
      </div>
    </>
  );
};

export default ChatWidget;