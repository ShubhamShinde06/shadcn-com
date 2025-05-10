export const Badge = ({ children, variant }) => {
  const baseClass = "inline-block px-2 py-1 text-xs rounded";
  const variantClass =
    variant === "secondary"
      ? "bg-gray-200 text-gray-800"
      : "bg-blue-500 text-white";

  return <span className={`${baseClass} ${variantClass}`}>{children}</span>;
};
