// components/ui/button.js

export function Button({ children, className = "", variant = "default", ...props }) {
  let baseStyle =
    "inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded transition";

  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-white text-white hover:bg-white hover:text-black",
  };

  return (
    <button className={`${baseStyle} ${variants[variant] || ""} ${className}`} {...props}>
      {children}
    </button>
  );
}
