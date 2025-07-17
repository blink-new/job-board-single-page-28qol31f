# Integration Examples for consultmein.com

## Quick Integration Examples

### 1. Simple iframe Integration (Easiest)

Add this HTML to any page on consultmein.com:

```html
<!-- Full-width job board -->
<div style="width: 100%; min-height: 800px;">
  <iframe 
    src="https://job-board-single-page-28qol31f.sites.blink.new" 
    width="100%" 
    height="800px" 
    frameborder="0"
    style="border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
  </iframe>
</div>
```

### 2. React Component Integration

If consultmein.com uses React, you can integrate the component directly:

```jsx
// In your consultmein.com React app
import StandaloneJobBoard from './components/StandaloneJobBoard';

function JobsPage() {
  return (
    <div>
      {/* Your existing header */}
      <header>
        <nav>Your navigation</nav>
      </header>

      {/* Job board component */}
      <StandaloneJobBoard
        title="Find Jobs at ConsultMeIn Partners"
        subtitle="Discover opportunities with our trusted consulting partners"
        showHero={true}
        onJobApplication={(jobId, applicationData) => {
          // Handle job applications
          console.log('Application submitted:', { jobId, applicationData });
          // Send to your backend API
        }}
        brandColors={{
          primary: '#your-brand-color',
          accent: '#your-accent-color',
          background: '#ffffff'
        }}
      />

      {/* Your existing footer */}
      <footer>Your footer</footer>
    </div>
  );
}
```

### 3. WordPress Integration

For WordPress sites, add this to a page or post:

```html
<!-- Add to WordPress page/post content -->
<div class="job-board-container">
  <iframe 
    src="https://job-board-single-page-28qol31f.sites.blink.new" 
    width="100%" 
    height="900px" 
    frameborder="0"
    style="border: none; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
  </iframe>
</div>

<style>
.job-board-container {
  margin: 2rem 0;
  padding: 0;
}

@media (max-width: 768px) {
  .job-board-container iframe {
    height: 1200px; /* More height for mobile */
  }
}
</style>
```

### 4. Custom Styling to Match Your Brand

If using the iframe approach, you can customize the appearance by passing URL parameters:

```html
<iframe 
  src="https://job-board-single-page-28qol31f.sites.blink.new?theme=consultmein&hideHero=false" 
  width="100%" 
  height="800px" 
  frameborder="0">
</iframe>
```

### 5. Subdomain Integration

1. **Set up subdomain**: Create `jobs.consultmein.com`
2. **Deploy the job board**: Upload the built files to your subdomain
3. **Link from main site**: Add navigation link to the job board

```html
<!-- In your main consultmein.com navigation -->
<nav>
  <a href="https://consultmein.com">Home</a>
  <a href="https://consultmein.com/about">About</a>
  <a href="https://consultmein.com/services">Services</a>
  <a href="https://jobs.consultmein.com">Jobs</a> <!-- New job board link -->
  <a href="https://consultmein.com/contact">Contact</a>
</nav>
```

## Customization Options

### Branding
- Update colors to match consultmein.com
- Change fonts to match your site
- Customize the hero section text
- Add your logo

### Data Integration
- Replace mock data with real job listings
- Connect to your job database/API
- Integrate with job posting services
- Add application tracking

### Features
- User authentication integration
- Email notifications for applications
- Advanced filtering options
- Employer dashboard
- Analytics and reporting

## Technical Requirements

### For iframe Integration:
- No technical requirements
- Works with any website
- Responsive design included

### For Component Integration:
- React 18+
- TypeScript (optional but recommended)
- Tailwind CSS
- Node.js for build process

### Dependencies:
```json
{
  "@radix-ui/react-dialog": "^1.1.14",
  "@radix-ui/react-select": "^2.2.5",
  "@radix-ui/react-slider": "^1.3.5",
  "lucide-react": "^0.525.0",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "tailwind-merge": "^3.3.1",
  "tailwindcss-animate": "^1.0.7"
}
```

## Next Steps

1. **Choose your integration method** based on your technical setup
2. **Test the integration** on a staging environment
3. **Customize branding** to match consultmein.com
4. **Connect real data** sources
5. **Add tracking and analytics**
6. **Launch and monitor** performance

## Support

The job board is built with modern, maintainable code and can be easily extended with additional features as your needs grow.

Would you like help with any specific integration approach?