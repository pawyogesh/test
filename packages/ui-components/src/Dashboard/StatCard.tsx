import React from "react";
import { colors, spacing, typography, borderRadius, shadows } from "@societyhub/design-tokens";

interface StatCardProps {
  label: string;
  value: string | number;
  subtext?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  icon?: React.ReactNode;
}

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  subtext,
  trend,
  icon,
}) => {
  const containerStyles = {
    backgroundColor: colors.card,
    borderRadius: borderRadius.lg,
    padding: spacing[6],
    boxShadow: shadows.md,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  } as React.CSSProperties;

  const contentStyles = {
    flex: 1,
  };

  const labelStyles = {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    color: colors.neutral[600],
    margin: 0,
    marginBottom: spacing[2],
  } as React.CSSProperties;

  const valueStyles = {
    fontSize: typography.fontSize["3xl"],
    fontWeight: typography.fontWeight.bold,
    color: colors.neutral[900],
    margin: 0,
    marginBottom: spacing[2],
  } as React.CSSProperties;

  const subtextStyles = {
    fontSize: typography.fontSize.sm,
    color: colors.neutral[500],
    margin: 0,
  } as React.CSSProperties;

  const trendStyles = {
    padding: spacing[2],
    backgroundColor: trend?.isPositive ? colors.success[50] : colors.danger[50],
    color: trend?.isPositive ? colors.success[700] : colors.danger[700],
    borderRadius: borderRadius.md,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
  } as React.CSSProperties;

  return (
    <div style={containerStyles}>
      <div style={contentStyles}>
        <p style={labelStyles}>{label}</p>
        <h3 style={valueStyles}>{value}</h3>
        {subtext && <p style={subtextStyles}>{subtext}</p>}
      </div>
      {trend && (
        <div style={trendStyles}>
          {trend.isPositive ? "+" : ""}{trend.value}%
        </div>
      )}
      {icon && <div style={{ fontSize: "32px", marginLeft: spacing[4] }}>{icon}</div>}
    </div>
  );
};
