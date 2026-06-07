import React from "react";
import { colors, spacing, borderRadius, typography } from "@societyhub/design-tokens";

interface AlertProps {
  type?: "info" | "success" | "warning" | "danger";
  title?: string;
  message: string;
  onClose?: () => void;
}

export const Alert: React.FC<AlertProps> = ({
  type = "info",
  title,
  message,
  onClose,
}) => {
  const typeMap = {
    info: { bg: colors.primary[50], border: colors.primary[200], text: colors.primary[700], icon: "ℹ" },
    success: { bg: colors.success[50], border: colors.success[200], text: colors.success[700], icon: "✓" },
    warning: { bg: colors.warning[50], border: colors.warning[200], text: colors.warning[700], icon: "⚠" },
    danger: { bg: colors.danger[50], border: colors.danger[200], text: colors.danger[700], icon: "✕" },
  };

  const alertStyles = {
    backgroundColor: typeMap[type].bg,
    border: `1px solid ${typeMap[type].border}`,
    borderRadius: borderRadius.md,
    padding: spacing[4],
    marginBottom: spacing[4],
    display: "flex",
    gap: spacing[3],
    alignItems: "flex-start",
  } as React.CSSProperties;

  const contentStyles = {
    flex: 1,
  };

  const titleStyles = {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    color: typeMap[type].text,
    margin: 0,
    marginBottom: title ? spacing[1] : 0,
  } as React.CSSProperties;

  const messageStyles = {
    fontSize: typography.fontSize.base,
    color: typeMap[type].text,
    margin: 0,
  } as React.CSSProperties;

  const closeStyles = {
    background: "none",
    border: "none",
    fontSize: typography.fontSize.lg,
    cursor: "pointer",
    color: typeMap[type].text,
    padding: 0,
  } as React.CSSProperties;

  return (
    <div style={alertStyles}>
      <span style={{ fontSize: "20px" }}>{typeMap[type].icon}</span>
      <div style={contentStyles}>
        {title && <h4 style={titleStyles}>{title}</h4>}
        <p style={messageStyles}>{message}</p>
      </div>
      {onClose && (
        <button style={closeStyles} onClick={onClose}>
          ✕
        </button>
      )}
    </div>
  );
};