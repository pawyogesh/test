# Design System Guidelines

Comprehensive guidelines for building SocietyHub user interfaces.

## Design Philosophy

**SocietyHub** is a modern, enterprise-grade SaaS platform designed for property management with three core user personas:
- **Residents**: Easy self-service for payments and complaints
- **Committee Members**: Oversight and management tools
- **Administrators**: Full system control and configuration

Our design reflects these needs through:
- Clean, minimal interface
- Fast navigation and discovery
- Professional, trustworthy appearance
- Enterprise-grade performance

## Design Principles

### 1. Clarity
- Clear visual hierarchy through typography and spacing
- Obvious call-to-action buttons
- Status indicators that are immediately understandable
- Minimal cognitive load

### 2. Efficiency
- Fast navigation paths (max 3 clicks to any feature)
- Keyboard shortcuts for power users
- Smart defaults and autocomplete
- Progressive disclosure of complex options

### 3. Consistency
- Unified component library
- Consistent spacing and alignment
- Standardized color usage
- Predictable interaction patterns

### 4. Accessibility
- WCAG AA compliant
- Keyboard navigation support
- Screen reader friendly
- Sufficient color contrast ratios

### 5. Responsiveness
- Mobile-first approach
- Adaptable to all screen sizes
- Touch-friendly controls
- Fast load times

## Color Usage Guidelines

### Primary Blue (#2563EB)
**Use for:**
- Main call-to-action buttons
- Primary navigation
- Focus states
- Primary interactive elements

**Avoid:**
- Large background areas
- Text on light backgrounds (use dark colors instead)

### Secondary Teal (#14B8A6)
**Use for:**
- Secondary actions
- Alternative CTAs
- Accent highlights
- Interactive feedback

### Success Green (#22C55E)
**Use for:**
- Positive confirmations
- Successful transactions
- Completed tasks
- Approved status

### Warning Amber (#F59E0B)
**Use for:**
- Pending statuses
- Caution messages
- In-progress states
- Warnings

### Danger Red (#EF4444)
**Use for:**
- Error messages
- Destructive actions
- Failed transactions
- Rejected/declined status

### Neutral Gray
**Use for:**
- Text content
- Backgrounds
- Borders and dividers
- Disabled states

## Typography Hierarchy

### Page Title (36px - Bold)
```
Main heading for page content
```

### Section Heading (24px - Semibold)
```
Major section divisions
```

### Subsection (18px - Semibold)
```
Group headings within sections
```

### Body Text (16px - Regular)
```
Primary content and descriptions
```

### Secondary Text (14px - Regular)
```
Metadata, timestamps, descriptions
```

### Labels (14px - Medium)
```
Form labels, tags
```

### Captions (12px - Regular)
```
Hints, helper text, small info
```

## Spacing Standards

### Horizontal Spacing
- 16px (4) - Default padding for cards and containers
- 24px (6) - Larger sections
- 32px (8) - Major section gaps

### Vertical Spacing
- 8px (2) - Tight spacing between related elements
- 16px (4) - Standard paragraph/component spacing
- 24px (6) - Section separation
- 32px (8) - Major layout divisions

### Component Padding
- Small buttons: 8px × 12px
- Medium buttons: 12px × 16px
- Large buttons: 16px × 24px
- Card padding: 24px (default)

## Button Guidelines

### Primary Button
```
Background: #2563EB
Text: White, semibold
Padding: 12px 16px (md size)
Border radius: 8px
Shadow: md (default)
Shadow: lg (hover)
```

**Use for:**
- Main actions (Save, Submit, Continue)
- Important CTAs
- Primary navigation

### Secondary Button
```
Background: #14B8A6
Text: White
```

**Use for:**
- Alternative actions
- Less important CTAs

### Ghost Button
```
Background: Transparent
Text: #2563EB
Border: 1px solid #d1d5db
```

**Use for:**
- Cancel, Dismiss
- Tertiary actions
- Navigation alternatives

### Danger Button
```
Background: #EF4444
Text: White
```

**Use for:**
- Delete confirmations
- Irreversible actions

## Card Design

**Standard Card:**
- Background: White
- Border radius: 12px
- Shadow: 0 4px 6px rgba(0,0,0,0.1)
- Padding: 24px
- Border: None

**Outline Card:**
- Background: White
- Border: 1px solid #e5e7eb
- Shadow: None
- Padding: 24px

**Use for:**
- Grouped content
- Distinct sections
- Widgets and dashboards
- Modal content

## Form Design

### Input Fields
- Height: 40px
- Padding: 12px 16px
- Border: 1px solid #d1d5db
- Border radius: 8px
- Focus: 2px solid #2563eb + light blue background
- Error: 2px solid #ef4444

### Labels
- Position: Above input
- Font: 14px, medium weight
- Color: #374151
- Margin bottom: 8px
- Required indicator: * (danger red)

### Helper Text
- Font: 12px, regular
- Color: #6b7280
- Margin top: 4px

### Error Messages
- Font: 12px, medium
- Color: #ef4444
- Icon: ✕
- Position: Below input

## Modal Design

### Small Modal (400px)
**Use for:**
- Confirmations
- Quick forms
- Alerts

### Medium Modal (600px)
**Use for:**
- Standard forms
- Details view
- Dialogs

### Large Modal (800px)
**Use for:**
- Complex forms
- Full content views
- Multi-step processes

**Features:**
- Backdrop: Dark overlay (50% opacity)
- Header: Title + close button
- Body: Scrollable content
- Footer: Actions

## Table Design

- **Header**: Light gray background (#f3f4f6)
- **Rows**: White with border bottom
- **Hover**: Light gray background (#f9fafb)
- **Padding**: 16px per cell
- **Text alignment**: Left-aligned text, right-aligned numbers
- **Alternating rows**: Optional light backgrounds for clarity

## Status Indicators

### Open/Pending
```
Background: #fef3c7 (warning light)
Text: #92400e (warning dark)
Badge: "Open"
```

### In Progress
```
Background: #fef3c7
Text: #92400e
Badge: "In Progress"
```

### Resolved/Complete
```
Background: #dcfce7 (success light)
Text: #15803d (success dark)
Badge: "Resolved"
```

### Closed/Completed
```
Background: #f3f4f6
Text: #374151
Badge: "Closed"
```

## Navigation Patterns

### Sidebar Navigation
- Width: 280px
- Background: White
- Items: 40px height, 16px padding
- Active: Blue left border + light background
- Icons: 20px, left-aligned

### Top Navigation Bar
- Height: 64px
- Background: White
- Padding: 16px
- Logo: Left side
- Actions: Right side (notifications, profile)

## Mobile Adaptations

### Layout Changes
- Sidebar → Bottom navigation or hamburger menu
- Modals: Full screen or 90% viewport
- Cards: Stack vertically
- Grids: 1-2 columns instead of 3-4

### Touch Targets
- Minimum 44px × 44px for interactive elements
- 12px spacing between touch targets
- Larger tap areas for important actions

### Typography
- Slightly larger for readability (16px base)
- Increased line height (1.5+)
- Better contrast ratios

## Dark Mode Support

When implementing dark mode:
- Primary text: Light gray (#f3f4f6)
- Secondary text: Medium gray (#d1d5db)
- Backgrounds: Dark gray (#1f2937)
- Cards: Slightly lighter (#111827)
- Borders: Dark gray (#4b5563)
- Shadows: Increase opacity

## Animation Guidelines

### Transitions
- **Fast (150ms)**: Hover states, small interactions
- **Base (200ms)**: Standard state changes
- **Slow (300ms)**: Page transitions, complex animations
- **Slower (500ms)**: Attention-grabbing animations

### Easing
- Standard: ease-in-out
- Entrance: ease-out
- Exit: ease-in

### Avoid
- Animations > 500ms for standard interactions
- Multiple simultaneous animations
- Jank or stuttering
- Auto-playing animations

## Accessibility Checklist

- [ ] Color not the only differentiator
- [ ] 4.5:1 contrast ratio for text
- [ ] 3:1 contrast ratio for UI components
- [ ] Keyboard navigation supported
- [ ] Focus indicators visible
- [ ] Alt text for images
- [ ] ARIA labels where needed
- [ ] Semantic HTML structure
- [ ] Form labels associated with inputs
- [ ] Error messages linked to inputs

## Component Implementation Checklist

When creating new components:

- [ ] Follows design tokens
- [ ] TypeScript interfaces defined
- [ ] Props documented
- [ ] Responsive variants included
- [ ] Accessibility considered
- [ ] Loading states shown
- [ ] Error states handled
- [ ] Exported from index
- [ ] README documentation added
- [ ] Mobile support verified

## Best Practices

### Do's
✅ Use design tokens consistently
✅ Keep layouts clean and minimal
✅ Provide clear feedback for user actions
✅ Make important actions obvious
✅ Test on real devices
✅ Prioritize readability
✅ Use consistent terminology

### Don'ts
❌ Mix different component styles
❌ Use excessive color
❌ Hide important information
❌ Create confusing navigation
❌ Ignore performance
❌ Assume desktop-only usage
❌ Break established patterns

## Resources

- Design Tokens: `packages/design-tokens/`
- Component Library: `packages/ui-components/`
- Figma Design File: (link)
- Implementation Examples: (link)

