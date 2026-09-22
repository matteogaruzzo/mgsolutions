export default function TextLink({ as: Tag = 'a', children, className = '', ...props }) {
  return (
    <Tag
      className={`group inline-flex items-center gap-1.5 font-agria-sans text-agria-body font-medium text-agria-green-dark underline-offset-4 hover:text-agria-graphite hover:underline transition-colors duration-200 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agria-green-dark focus-visible:ring-offset-2 ${className}`}
      {...props}
    >
      <span>{children}</span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
      >
        <path
          d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Tag>
  );
}
