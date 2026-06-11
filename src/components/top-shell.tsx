import type { ReactNode } from "react";

type TopShellProps = {
  children: ReactNode;
};

export function TopShell({ children }: TopShellProps) {
  return <div className="surface-hero min-h-svh">{children}</div>;
}
