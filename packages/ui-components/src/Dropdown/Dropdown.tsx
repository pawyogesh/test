import React from "react";
import { colors, spacing, borderRadius, typography, shadows } from "@societyhub/design-tokens";

interface DropdownProps {
  trigger: React.ReactNode;
  items: Array<{
    label: string;
    value: string;
    onClick: () => void;
  }>;
}

export const Dropdown: React.FC<DropdownProps> = ({ trigger, items }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const containerStyles = {
    position: "relative" as const,
  };

  const menuStyles = {
    position: "absolute" as const,
    top: "100%",
    left: 0,
    marginTop: spacing[2],
    backgroundColor: colors.card,
    border: `1px solid ${colors.neutral[200]}`,
    borderRadius: borderRadius.md,
    boxShadow: shadows.lg,
    minWidth: "200px",
    zIndex: 100,
  } as React.CSSProperties;

  const itemStyles = {
    padding: `${spacing[3]} ${spacing[4]}`,
    fontSize: typography.fontSize.base,
    color: colors.neutral[700],
    cursor: "pointer",
    transition: "all 200ms ease-in-out",
    borderBottom: `1px solid ${colors.neutral[100]}`,
    ":hover": {
      backgroundColor: colors.neutral[50],
    },
  } as React.CSSProperties;

  return (
    <div style={containerStyles}>
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
      {isOpen && (
        <div style={menuStyles}>
          {items.map((item, idx) => (
            <div
              key={idx}
              style={itemStyles}
              onClick={() => {
                item.onClick();
                setIsOpen(false);
              }}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};