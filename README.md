# SocietyHub - Housing Society Management SaaS

A modern, enterprise-grade design system and React component library for a comprehensive Housing Society Management Platform.

## 📋 Overview

SocietyHub is a complete SaaS solution for managing residential societies with support for:
- **Residents**: Maintenance payments, complaints, notices, documents
- **Committee Members**: Complaint review, notice publishing, financial reports
- **Administrators**: Full system configuration and reporting

## 🎨 Design System

### Color Palette
- **Primary**: `#2563EB` (Blue)
- **Secondary**: `#14B8A6` (Teal)
- **Success**: `#22C55E` (Green)
- **Warning**: `#F59E0B` (Amber)
- **Danger**: `#EF4444` (Red)
- **Background**: `#F8FAFC` (Slate)

### Typography
- **Font Family**: Inter, system-ui, sans-serif
- **Headings**: Bold weights (700)
- **Body**: Regular weights (400, 500)

## 📦 Package Structure

```
societyhub-design-system/
├── packages/
│   ├── design-tokens/          # Design tokens (colors, typography, spacing)
│   ├── ui-components/          # React component library
│   ├── forms/                  # Form components & validation
│   ├── layouts/                # Page layouts & templates
│   └── themes/                 # Light & dark mode themes
├── apps/
│   └── storybook/             # Component documentation
└── docs/
    └── design-system.md       # Design system guidelines
```

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development
npm run dev

# Build all packages
npm run build

# Run Storybook
npm run storybook
```

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px+

## 🔑 Key Features

- ✅ Fully responsive (Mobile, Tablet, Desktop)
- ✅ Light & Dark mode support
- ✅ Accessibility compliant
- ✅ TypeScript support
- ✅ Reusable component architecture
- ✅ Production-ready SaaS UI

## 📚 Documentation

- [Design System Guidelines](./docs/design-system.md)
- [Component Library](./packages/ui-components/README.md)
- [Design Tokens](./packages/design-tokens/README.md)

## 📄 License

MIT
