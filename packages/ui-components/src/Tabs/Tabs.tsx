import React from "react";
import { colors, spacing, borderRadius, typography } from "@societyhub/design-tokens";

interface TabsProps {
  tabs: Array<{
    label: string;
    value: string;
    content: React.ReactNode;
  }>;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultValue,
  onChange,
}) => {
  const [activeTab, setActiveTab] = React.useState(defaultValue || tabs[0]?.value);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    onChange?.(value);
  };

  const tabListStyles = {
    display: "flex",
    borderBottom: `2px solid ${colors.neutral[200]}`,
    gap: spacing[1],
  } as React.CSSProperties;

  const tabButtonStyles = (isActive: boolean) => ({
    padding: `${spacing[3]} ${spacing[4]}`,
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    backgroundColor: "transparent",
    border: "none",
    borderBottom: isActive ? `3px solid ${colors.primary[600]}` : "none",
    color: isActive ? colors.primary[600] : colors.neutral[600],
    cursor: "pointer",
    marginBottom: "-2px",
    transition: "all 200ms ease-in-out",
  } as React.CSSProperties);

  const tabContentStyles = {
    padding: spacing[6],
  } as React.CSSProperties;

  return (
    <div>
      <div style={tabListStyles}>
        {tabs.map((tab) => (
          <button
            key={tab.value}
            style={tabButtonStyles(activeTab === tab.value)}
            onClick={() => handleTabChange(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div style={tabContentStyles}>
        {tabs.find((tab) => tab.value === activeTab)?.content}
      </div>
    </div>
  );
};
