import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '918999895516';
    const message = encodeURIComponent('Hello! I need help with mobile repair services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};

export default WhatsAppFloat;