// src/components/Button.jsx
export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
    >
      {children}
    </button>
  );
}
