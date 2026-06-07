import React from "react";
import { colors, spacing, typography, borderRadius } from "@societyhub/design-tokens";

interface PaymentMethodProps {
  icon: string;
  name: string;
  description: string;
  selected?: boolean;
  onSelect?: () => void;
}

export const PaymentMethod: React.FC<PaymentMethodProps> = ({
  icon,
  name,
  description,
  selected,
  onSelect,
}) => {
  const containerStyles = {
    backgroundColor: colors.card,
    border: selected
      ? `2px solid ${colors.primary[600]}`
      : `1px solid ${colors.neutral[200]}`,
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    cursor: "pointer",
    transition: "all 200ms ease-in-out",
  } as React.CSSProperties;

  const iconStyles = {
    fontSize: "32px",
    marginBottom: spacing[2],
  };

  const nameStyles = {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    color: colors.neutral[900],
    margin: 0,
    marginBottom: spacing[1],
  } as React.CSSProperties;

  const descStyles = {
    fontSize: typography.fontSize.sm,
    color: colors.neutral[600],
    margin: 0,
  } as React.CSSProperties;

  return (
    <div style={containerStyles} onClick={onSelect}>
      <div style={iconStyles}>{icon}</div>
      <h4 style={nameStyles}>{name}</h4>
      <p style={descStyles}>{description}</p>
    </div>
  );
};
