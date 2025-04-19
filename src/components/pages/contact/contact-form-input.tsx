interface ContactFormInputProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
}

export default function ContactFormInput({
  id,
  label,
  type = "text",
  placeholder,
  required,
  error,
}: ContactFormInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-sumi mb-1">
        {label} {required && <span className="text-akane">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required={required}
        className="w-full px-3 py-2 border border-washi-300 rounded-md focus:outline-none focus:ring-2 focus:ring-asagi"
        placeholder={placeholder}
      />
      {error && <p className="mt-1 text-sm text-akane">{error}</p>}
    </div>
  );
}
