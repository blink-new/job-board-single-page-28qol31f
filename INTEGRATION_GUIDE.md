# Job Board Integration Guide for consultmein.com

## Overview
This job board component is built with React, TypeScript, and Tailwind CSS. It's designed to be easily integrated into your existing consultmein.com website.

## Integration Options

### Option 1: Component Integration (Recommended)

#### Step 1: Copy Required Files
Copy these files to your consultmein.com project:

**Components:**
- `src/components/JobBoard.tsx` - Main job board component
- `src/components/JobDetailModal.tsx` - Job details modal
- `src/components/ApplicationModal.tsx` - Application form modal
- `src/components/ui/` - All UI components (button, card, input, etc.)

**Data & Types:**
- `src/types/job.ts` - TypeScript interfaces
- `src/data/mockJobs.ts` - Sample job data
- `src/lib/utils.ts` - Utility functions

**Styles:**
- `src/index.css` - Tailwind CSS configuration
- `tailwind.config.cjs` - Tailwind configuration

#### Step 2: Install Dependencies
```bash
npm install @radix-ui/react-dialog @radix-ui/react-select @radix-ui/react-slider
npm install lucide-react class-variance-authority clsx tailwind-merge
npm install tailwindcss-animate
```

#### Step 3: Usage in Your Site
```jsx
import JobBoard from './components/JobBoard';

function JobsPage() {
  return (
    <div>
      {/* Your existing header/navigation */}
      <JobBoard />
      {/* Your existing footer */}
    </div>
  );
}
```

### Option 2: iframe Embedding

Add this to any page on consultmein.com:

```html
<iframe 
  src="https://job-board-single-page-28qol31f.sites.blink.new" 
  width="100%" 
  height="800px" 
  frameborder="0"
  style="border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
</iframe>
```

### Option 3: Subdomain Integration

1. Download the complete code from this Blink project
2. Deploy to a subdomain like `jobs.consultmein.com`
3. Link to it from your main site

## Customization

### Branding
Update colors in `tailwind.config.cjs` to match consultmein.com:
```javascript
colors: {
  primary: {
    DEFAULT: '#your-brand-color',
    // ... other shades
  }
}
```

### Data Source
Replace `src/data/mockJobs.ts` with:
- API calls to your job database
- Integration with job posting services
- CMS integration

### Styling
The component uses Tailwind CSS classes. Customize:
- Colors and fonts in `tailwind.config.cjs`
- Component styles in individual component files
- Global styles in `src/index.css`

## Features Included

✅ **Search & Filtering**
- Text search (job title, company)
- Location filtering
- Category filtering
- Job type filtering (Full-time, Part-time, Remote)
- Salary range filtering

✅ **Job Management**
- Job listings with company logos
- Featured jobs section
- Job bookmarking
- Detailed job view modal
- Application form modal

✅ **Responsive Design**
- Mobile-friendly layout
- Touch-optimized interactions
- Responsive grid system

✅ **Professional UI**
- Clean, modern design
- Smooth animations
- Accessible components
- Loading states

## Next Steps

1. **Choose Integration Method**: Component integration offers the most flexibility
2. **Customize Branding**: Update colors, fonts, and styling to match your site
3. **Connect Real Data**: Replace mock data with your job database/API
4. **Add Authentication**: Integrate with your user system for applications
5. **SEO Optimization**: Add meta tags, structured data for job listings

## Support

This component is production-ready and can be easily maintained as part of your existing codebase. The modular structure makes it easy to extend with additional features like:

- User authentication
- Application tracking
- Employer dashboard
- Email notifications
- Advanced analytics

Would you like me to help with any specific integration approach?