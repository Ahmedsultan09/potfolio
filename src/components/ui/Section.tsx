import { cn } from "../../lib/utils";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  containerClassName?: string;
};

export function Section({
  id,
  className,
  children,
  containerClassName,
}: SectionProps) {
  return (
    <section id={id} className={cn("section", className)}>
      <div className={cn("container-page", containerClassName)}>{children}</div>
    </section>
  );
}
