interface ContactFormTextareaProps {
  id: string;
  label: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  error?: string;
}

export default function ContactFormTextarea({
  id,
  label,
  placeholder,
  rows = 3,
  required,
  error,
}: ContactFormTextareaProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-sumi mb-1">
        {label} {required && <span className="text-akane">*</span>}
      </label>
      <textarea
        id={id}
        name={id}
        rows={rows}
        required={required}
        className="w-full px-3 py-2 border border-washi-300 rounded-md focus:outline-none focus:ring-2 focus:ring-asagi"
        placeholder={placeholder}
      />
      {error && <p className="mt-1 text-sm text-akane">{error}</p>}
    </div>
  );
}
