import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="group relative overflow-hidden rounded-full border-2 border-[#D7E2EA] p-2 flex items-center justify-center cursor-pointer"
    >
      <div className="absolute inset-0 bg-[#D7E2EA] origin-bottom scale-y-0 transition-transform duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-y-100 z-0" />
      <X className="w-5 h-5 relative z-10 text-[#D7E2EA] group-hover:text-[#0C0C0C] transition-colors duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]" />
    </button>
  );
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-[#0C0C0C]/80 backdrop-blur-sm"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ type: 'spring', bounce: 0, duration: 0.5 }}
              className="bg-[#0C0C0C] border border-[#D7E2EA]/20 rounded-[32px] w-full max-w-5xl max-h-[90vh] overflow-y-auto pointer-events-auto flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between p-6 sm:p-8 border-b border-[#D7E2EA]/10 sticky top-0 bg-[#0C0C0C] z-20">
                <h3 className="text-[#D7E2EA] font-medium uppercase text-xl sm:text-2xl tracking-wide">{title}</h3>
                <CloseButton onClick={onClose} />
              </div>
              <div className="p-6 sm:p-8">
                {children}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
