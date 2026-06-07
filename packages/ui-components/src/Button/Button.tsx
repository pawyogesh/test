import React from "react";
import { colors, spacing, borderRadius, shadows, typography } from "@societyhub/design-tokens";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  isLoading = false,
  children,
  className,
  disabled,
  ...props
}) => {
  const baseStyles = {
    fontFamily: typography.fontFamily.base,
    fontWeight: typography.fontWeight.semibold,
    borderRadius: borderRadius.md,
    border: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: `all 200ms ease-in-out`,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing[2],
    opacity: disabled ? 0.6 : 1,
  };

  const sizeStyles = {
    sm: {
      padding: `${spacing[2]} ${spacing[3]}`,
      fontSize: typography.fontSize.sm,
    },
    md: {
      padding: `${spacing[3]} ${spacing[4]}`,
      fontSize: typography.fontSize.base,
    },
    lg: {
      padding: `${spacing[4]} ${spacing[6]}`,
      fontSize: typography.fontSize.lg,
    },
  };

  const variantStyles = {
    primary: {
      backgroundColor: colors.primary[600],
      color: "white",
      boxShadow: shadows.md,
      ":hover": {
        backgroundColor: colors.primary[700],
        boxShadow: shadows.lg,
      },
    },
    secondary: {
      backgroundColor: colors.secondary[600],
      color: "white",
      boxShadow: shadows.md,
      ":hover": {
        backgroundColor: colors.secondary[700],
        boxShadow: shadows.lg,
      },
    },
    danger: {
      backgroundColor: colors.danger[600],
      color: "white",
      ":hover": {
        backgroundColor: colors.danger[700],
      },
    },
    ghost: {
      backgroundColor: "transparent",
      color: colors.primary[600],
      border: `1px solid ${colors.neutral[300]}`,
      ":hover": {
        backgroundColor: colors.neutral[50],
      },
    },
  };

  const styles = {
    ...baseStyles,
    ...sizeStyles[size],
    ...variantStyles[variant],
  } as React.CSSProperties;

  return (
    <button
      style={styles}
      disabled={disabled || isLoading}
      className={className}
      {...props}
    >
      {isLoading && <span>⟳</span>}
      {children}
    </button>
  );
};
