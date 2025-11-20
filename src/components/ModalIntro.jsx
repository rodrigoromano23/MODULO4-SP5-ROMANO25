import { useEffect, useState } from "react";

const ModalIntro = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <img
        src="/fn.png"
        alt="Superhéroe introducción"
        className="
          w-4/5        /* Mobile */
          sm:w-3/5     /* Tablets */
          md:w-1/3     /* Desktop */
          lg:w-1/4
          rounded-2xl shadow-2xl object-contain
          transition-all duration-500
        "
      />
    </div>
  );
};

export default ModalIntro;


