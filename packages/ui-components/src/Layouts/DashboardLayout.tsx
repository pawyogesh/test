import React from "react";
import { colors, spacing, typography } from "@societyhub/design-tokens";

interface DashboardLayoutProps {
  sidebar: React.ReactNode;
  topbar: React.ReactNode;
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  sidebar,
  topbar,
  children,
}) => {
  const containerStyles = {
    display: "flex",
    height: "100vh",
    backgroundColor: colors.background,
  } as React.CSSProperties;

  const sidebarStyles = {
    width: "280px",
    backgroundColor: colors.card,
    borderRight: `1px solid ${colors.neutral[200]}`,
    overflowY: "auto" as const,
  } as React.CSSProperties;

  const mainStyles = {
    flex: 1,
    display: "flex",
    flexDirection: "column" as const,
  };

  const topbarStyles = {
    borderBottom: `1px solid ${colors.neutral[200]}`,
    backgroundColor: colors.card,
  } as React.CSSProperties;

  const contentStyles = {
    flex: 1,
    overflowY: "auto" as const,
    padding: spacing[6],
  } as React.CSSProperties;

  return (
    <div style={containerStyles}>
      <div style={sidebarStyles}>{sidebar}</div>
      <div style={mainStyles}>
        <div style={topbarStyles}>{topbar}</div>
        <div style={contentStyles}>{children}</div>
      </div>
    </div>
  );
};
