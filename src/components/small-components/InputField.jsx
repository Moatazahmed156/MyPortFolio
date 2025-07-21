export default function InputField({ label, type = "text", isTextArea = false, name }) {
  const baseClass =
    "w-full p-3 rounded-lg bg-gray-700/60 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all";

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="text-gray-300 text-sm font-medium">
        Your {label}
      </label>
      {isTextArea ? (
        <textarea
          name={name}
          id={name}
          required
          rows={5}
          className={baseClass}
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          required
          className={baseClass}
        />
      )}
    </div>
  );
}
