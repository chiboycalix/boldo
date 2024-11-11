
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


interface AccordionItemProps {
  item: any;
  isExpanded: boolean;
  onToggle: () => void;
}

const AccordionItem = ({ item, isExpanded, onToggle }: AccordionItemProps) => {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full py-6 flex justify-between items-center text-left"
        aria-expanded={isExpanded}
      >
        <h3 className="text-md font-medium text-gray-900">{item.question}</h3>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 ml-4 bg-[#0A2640] rounded-full"
        >
          <ChevronDown className="w-6 h-6 text-white" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-600">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;