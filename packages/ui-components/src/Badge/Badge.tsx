import React from "react";
import { colors, spacing, borderRadius, typography } from "@societyhub/design-tokens";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "success" | "warning" | "danger" | "neutral";
  size?: "sm" | "md";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}) => {
  const variantMap = {
    primary: { bg: colors.primary[100], text: colors.primary[700] },
    secondary: { bg: colors.secondary[100], text: colors.secondary[700] },
    success: { bg: colors.success[100], text: colors.success[700] },
    warning: { bg: colors.warning[100], text: colors.warning[700] },
    danger: { bg: colors.danger[100], text: colors.danger[700] },
    neutral: { bg: colors.neutral[100], text: colors.neutral[700] },
  };

  const sizeMap = {
    sm: {
      padding: `${spacing[1]} ${spacing[2]}`,
      fontSize: typography.fontSize.xs,
    },
    md: {
      padding: `${spacing[2]} ${spacing[3]}`,
      fontSize: typography.fontSize.sm,
    },
  };

  const styles = {
    display: "inline-block",
    padding: sizeMap[size].padding,
    fontSize: sizeMap[size].fontSize,
    fontWeight: typography.fontWeight.semibold,
    borderRadius: borderRadius.full,
    backgroundColor: variantMap[variant].bg,
    color: variantMap[variant].text,
  } as React.CSSProperties;

  return (
    <span style={styles} className={className} {...props}>
      {children}
    </span>
  );
};
