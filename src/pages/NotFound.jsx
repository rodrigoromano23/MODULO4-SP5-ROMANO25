import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center text-white">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-xl mb-6">Página no encontrada</p>
      <Link
        to="/"
        className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-500 transition"
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
