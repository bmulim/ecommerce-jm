import type { ReactNode } from "react";

interface FormFieldProps {
  label: string;
  helper?: string;
  required?: boolean;
  children: ReactNode;
}

export function FormField({
  label,
  helper,
  required,
  children,
}: FormFieldProps) {
  return (
    <label className="text-sm text-zinc-400">
      <span className="mb-1 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-white uppercase">
        {label}
        {required && <span className="text-primary">*</span>}
      </span>
      {children}
      {helper && (
        <span className="mt-1 block text-xs text-zinc-500">{helper}</span>
      )}
    </label>
  );
}
