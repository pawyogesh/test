import React from "react";
import { colors, spacing, borderRadius, shadows, typography } from "@societyhub/design-tokens";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = "md",
}) => {
  if (!isOpen) return null;

  const sizeMap = {
    sm: "400px",
    md: "600px",
    lg: "800px",
  };

  const overlayStyles = {
    position: "fixed" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  };

  const contentStyles = {
    backgroundColor: colors.card,
    borderRadius: borderRadius.lg,
    boxShadow: shadows["2xl"],
    maxWidth: sizeMap[size],
    width: "90%",
    maxHeight: "90vh",
    display: "flex",
    flexDirection: "column" as const,
  };

  const headerStyles = {
    padding: spacing[6],
    borderBottom: `1px solid ${colors.neutral[200]}`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  } as React.CSSProperties;

  const titleStyles = {
    fontSize: typography.fontSize["2xl"],
    fontWeight: typography.fontWeight.bold,
    color: colors.neutral[900],
    margin: 0,
  } as React.CSSProperties;

  const closeButtonStyles = {
    background: "none",
    border: "none",
    fontSize: typography.fontSize["2xl"],
    cursor: "pointer",
    color: colors.neutral[500],
  } as React.CSSProperties;

  const bodyStyles = {
    padding: spacing[6],
    overflowY: "auto" as const,
    flex: 1,
  } as React.CSSProperties;

  const footerStyles = {
    padding: spacing[6],
    borderTop: `1px solid ${colors.neutral[200]}`,
    display: "flex",
    gap: spacing[3],
    justifyContent: "flex-end",
  } as React.CSSProperties;

  return (
    <div style={overlayStyles} onClick={onClose}>
      <div style={contentStyles} onClick={(e) => e.stopPropagation()}>
        {title && (
          <div style={headerStyles}>
            <h2 style={titleStyles}>{title}</h2>
            <button style={closeButtonStyles} onClick={onClose}>
              ✕
            </button>
          </div>
        )}
        <div style={bodyStyles}>{children}</div>
        {footer && <div style={footerStyles}>{footer}</div>}
      </div>
    </div>
  );
};
