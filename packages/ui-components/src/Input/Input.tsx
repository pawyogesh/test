import React from "react";
import { colors, spacing, typography, shadows, borderRadius } from "@societyhub/design-tokens";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: "default" | "filled";
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  variant = "default",
  className,
  id,
  ...props
}) => {
  const inputId = id || `input-${Math.random()}`;

  const inputStyles = {
    width: "100%",
    padding: `${spacing[3]} ${spacing[4]}`,
    fontSize: typography.fontSize.base,
    fontFamily: typography.fontFamily.base,
    borderRadius: borderRadius.md,
    border: error
      ? `2px solid ${colors.danger[600]}`
      : `1px solid ${colors.neutral[300]}`,
    backgroundColor: variant === "filled" ? colors.neutral[100] : colors.card,
    transition: "all 200ms ease-in-out",
    boxShadow: "none",
    outline: "none",
    ":focus": {
      borderColor: colors.primary[600],
      boxShadow: `0 0 0 3px ${colors.primary[50]}`,
    },
  } as React.CSSProperties;

  const containerStyles = {
    display: "flex",
    flexDirection: "column" as const,
    gap: spacing[2],
    marginBottom: spacing[4],
  };

  const labelStyles = {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    color: colors.neutral[700],
  } as React.CSSProperties;

  const errorStyles = {
    fontSize: typography.fontSize.sm,
    color: colors.danger[600],
    fontWeight: typography.fontWeight.medium,
  } as React.CSSProperties;

  const helperStyles = {
    fontSize: typography.fontSize.sm,
    color: colors.neutral[500],
  } as React.CSSProperties;

  return (
    <div style={containerStyles}>
      {label && (
        <label htmlFor={inputId} style={labelStyles}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        style={inputStyles}
        className={className}
        {...props}
      />
      {error && <span style={errorStyles}>{error}</span>}
      {helperText && !error && <span style={helperStyles}>{helperText}</span>}
    </div>
  );
};
