import React from "react";
import { colors, spacing, borderRadius, shadows, typography } from "@societyhub/design-tokens";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "elevated" | "outline";
  padding?: "sm" | "md" | "lg";
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = "elevated",
  padding = "md",
  className,
  ...props
}) => {
  const paddingMap = {
    sm: spacing[3],
    md: spacing[4],
    lg: spacing[6],
  };

  const variantStyles = {
    elevated: {
      backgroundColor: colors.card,
      boxShadow: shadows.md,
    },
    outline: {
      backgroundColor: colors.card,
      border: `1px solid ${colors.neutral[200]}`,
    },
  };

  const styles = {
    padding: paddingMap[padding],
    borderRadius: borderRadius.lg,
    ...variantStyles[variant],
  } as React.CSSProperties;

  return (
    <div style={styles} className={className} {...props}>
      {children}
    </div>
  );
};
