"use client";

interface ControlGroupProps {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

/**
 * A reusable wrapper for organizing control sections.
 */
export function ControlGroup({ title, icon: Icon, children }: ControlGroupProps) {
  return (
    <div className="mt-6">
      <h3 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
        <Icon size={14} />
        {title}
      </h3>
      {children}
    </div>
  );
}