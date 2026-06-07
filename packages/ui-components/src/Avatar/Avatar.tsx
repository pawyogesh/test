import React from "react";
import { colors, spacing, borderRadius, typography, shadows } from "@societyhub/design-tokens";

interface AvatarProps {
  src?: string;
  initials?: string;
  size?: "sm" | "md" | "lg";
  variant?: "circle" | "square";
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  initials,
  size = "md",
  variant = "circle",
}) => {
  const sizeMap = {
    sm: "32px",
    md: "48px",
    lg: "64px",
  };

  const containerStyles = {
    width: sizeMap[size],
    height: sizeMap[size],
    borderRadius: variant === "circle" ? "50%" : borderRadius.lg,
    backgroundColor: colors.primary[600],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden" as const,
    boxShadow: shadows.md,
  } as React.CSSProperties;

  const fontSizeMap = {
    sm: typography.fontSize.xs,
    md: typography.fontSize.base,
    lg: typography.fontSize.lg,
  };

  const initialsStyles = {
    color: "white",
    fontSize: fontSizeMap[size],
    fontWeight: typography.fontWeight.semibold,
  } as React.CSSProperties;

  const imgStyles = {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
  };

  return (
    <div style={containerStyles}>
      {src ? (
        <img src={src} alt={initials} style={imgStyles} />
      ) : (
        <span style={initialsStyles}>{initials}</span>
      )}
    </div>
  );
};