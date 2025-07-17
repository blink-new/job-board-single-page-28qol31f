# Job Board External API Integration - Complete Solution

## 🚀 Quick Start

This project provides a complete job board component with external API integration capabilities. You can easily integrate it with any job API to display real-time job listings.

## 📋 Job Data Structure Required

Your API should return job data in the following format (or any of the supported variations):

```typescript
interface Job {
  id: string;                    // Unique job identifier
  title: string;                 // Job title
  company: string;               // Company name
  location: string;              // Job location
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  salary: string;                // Salary range or amount
  description: string;           // Job description
  requirements: string[];        // Array of job requirements
  benefits: string[];            // Array of job benefits
  category: string;              // Job category (e.g., "Technology", "Marketing")
  postedDate: string;            // Date posted (YYYY-MM-DD format)
  featured: boolean;             // Whether the job is featured
  companyLogo?: string;          // Optional company logo URL
}
```

## 🔧 Supported API Response Formats

The component automatically handles these common API response formats:

### Format 1: Direct Array
```json
[
  {
    "id": "job_001",
    "title": "Senior Developer",
    "company": "TechCorp",
    "location": "San Francisco, CA",
    "type": "full-time",
    "salary": "$120,000 - $160,000",
    "description": "We are looking for...",
    "requirements": ["5+ years experience", "React expertise"],
    "benefits": ["Health insurance", "401k"],
    "category": "Technology",
    "posted_date": "2024-01-15",
    "featured": true,
    "company_logo": "https://example.com/logo.png"
  }
]
```

### Format 2: Wrapped in 'jobs' Property
```json
{
  "jobs": [...],
  "total": 50,
  "page": 1
}
```

### Format 3: Wrapped in 'data' Property
```json
{
  "data": [...],
  "status": "success",
  "count": 25
}
```

## 🎯 Alternative Field Names Supported

The component automatically maps these alternative field names:

| Standard Field | Alternative Names |
|----------------|-------------------|
| `id` | `_id` |
| `title` | `job_title`, `position` |
| `company` | `company_name`, `employer` |
| `location` | `city`, `address` |
| `type` | `job_type`, `employment_type` |
| `salary` | `salary_range`, `compensation` |
| `description` | `job_description`, `details` |
| `category` | `department`, `field` |
| `postedDate` | `posted_date`, `created_at`, `date_posted` |
| `featured` | `is_featured`, `premium` |
| `companyLogo` | `company_logo`, `logo`, `company_image` |

## 💻 Implementation Examples

### Basic Integration
```tsx
import ExternalJobBoard from './components/ExternalJobBoard';

function App() {
  return (
    <ExternalJobBoard
      apiEndpoint="https://your-api.com/jobs"
      onError={(error) => console.error('API Error:', error)}
    />
  );
}
```

### Advanced Integration with Authentication
```tsx
import ExternalJobBoard from './components/ExternalJobBoard';

function App() {
  const handleApiError = (error: string) => {
    console.error('Job API Error:', error);
    // Handle errors: show notifications, log to analytics, etc.
  };

  return (
    <ExternalJobBoard
      apiEndpoint="https://your-secure-api.com/jobs"
      apiKey="your-api-key-here"
      refreshInterval={300000} // 5 minutes
      onError={handleApiError}
      customHeaders={{
        'X-Client-Version': '1.0.0',
        'X-Request-Source': 'job-board-widget'
      }}
    />
  );
}
```

## 🔐 Authentication Methods

### API Key Authentication
```tsx
<ExternalJobBoard
  apiEndpoint="https://api.example.com/jobs"
  apiKey="your-api-key"
  // API key is sent as: Authorization: Bearer your-api-key
/>
```

### Custom Headers
```tsx
<ExternalJobBoard
  apiEndpoint="https://api.example.com/jobs"
  customHeaders={{
    'X-API-Key': 'your-api-key',
    'X-Client-ID': 'your-client-id',
    'Authorization': 'Bearer your-token'
  }}
/>
```

## ⚙️ Configuration Options

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `apiEndpoint` | `string` | ✅ | - | Your job API endpoint URL |
| `apiKey` | `string` | ❌ | - | API key for authentication |
| `refreshInterval` | `number` | ❌ | `300000` | Auto-refresh interval (milliseconds) |
| `onError` | `function` | ❌ | - | Error handling callback |
| `customHeaders` | `object` | ❌ | `{}` | Custom HTTP headers |

## 🛠️ Integration Steps

### Step 1: Copy the Component Files
Copy these files to your project:
- `src/components/ExternalJobBoard.tsx`
- `src/types/job.ts` (if not already present)

### Step 2: Install Dependencies
```bash
npm install lucide-react
```

### Step 3: Import and Use
```tsx
import ExternalJobBoard from './components/ExternalJobBoard';

function YourApp() {
  return (
    <ExternalJobBoard
      apiEndpoint="YOUR_API_ENDPOINT_HERE"
      apiKey="YOUR_API_KEY_HERE" // Optional
      onError={(error) => {
        // Your error handling logic
        console.error('Job API Error:', error);
      }}
    />
  );
}
```

### Step 4: Configure Your API
Replace `YOUR_API_ENDPOINT_HERE` with your actual job API endpoint.

## 🔍 Popular Job APIs You Can Use

### 1. Indeed API
```tsx
<ExternalJobBoard
  apiEndpoint="https://api.indeed.com/ads/apisearch"
  customHeaders={{
    'User-Agent': 'YourApp/1.0 (your-email@example.com)'
  }}
/>
```

### 2. Adzuna API
```tsx
<ExternalJobBoard
  apiEndpoint="https://api.adzuna.com/v1/api/jobs/us/search/1"
  customHeaders={{
    'X-RapidAPI-Key': 'your-rapidapi-key'
  }}
/>
```

### 3. JSearch API (RapidAPI)
```tsx
<ExternalJobBoard
  apiEndpoint="https://jsearch.p.rapidapi.com/search"
  customHeaders={{
    'X-RapidAPI-Key': 'your-rapidapi-key',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  }}
/>
```

### 4. Custom Company API
```tsx
<ExternalJobBoard
  apiEndpoint="https://careers-api.yourcompany.com/jobs"
  apiKey="your-company-api-key"
  customHeaders={{
    'X-Company-ID': 'your-company-id'
  }}
/>
```

## 🚨 Error Handling

### Basic Error Handling
```tsx
const handleApiError = (error: string) => {
  console.error('API Error:', error);
  
  // Show user-friendly message
  alert('Unable to load jobs. Please try again later.');
};
```

### Advanced Error Handling
```tsx
const handleApiError = (error: string) => {
  console.error('API Error:', error);
  
  // Handle different error types
  if (error.includes('401')) {
    // Authentication error
    console.error('API key is invalid or expired');
  } else if (error.includes('429')) {
    // Rate limiting
    console.error('Too many requests. Please wait before trying again.');
  } else if (error.includes('500')) {
    // Server error
    console.error('Server error. Please try again later.');
  }
  
  // Log to analytics
  analytics.track('job_api_error', {
    error: error,
    timestamp: new Date().toISOString()
  });
  
  // Show toast notification
  toast.error('Unable to load jobs. Please try again later.');
};
```

## 🎨 Customization

### Styling
The component uses Tailwind CSS. You can customize the appearance by:

1. **Modifying Tailwind classes** in the component
2. **Adding custom CSS** for specific elements
3. **Using CSS variables** for theme colors

### Adding Custom Filters
You can extend the component to add custom filters:

```tsx
// Example: Add experience level filter
const customFilters = {
  ...filters,
  experienceLevel: 'senior',
  remote: true,
  salaryMin: 100000
};
```

## 🔧 Troubleshooting

### Common Issues

#### 1. CORS Errors
**Problem**: Browser blocks API requests due to CORS policy

**Solutions**:
- Configure CORS headers on your API server
- Use a proxy server for development
- Make API calls from your backend instead

#### 2. API Rate Limiting
**Problem**: Getting 429 (Too Many Requests) errors

**Solutions**:
- Increase the `refreshInterval` prop
- Implement caching
- Use multiple API keys with rotation

#### 3. Invalid Data Format
**Problem**: Jobs not displaying correctly

**Solutions**:
- Check your API response format
- Verify field names match supported alternatives
- Add console.log to debug data transformation

#### 4. Authentication Issues
**Problem**: Getting 401 (Unauthorized) errors

**Solutions**:
- Verify your API key is correct
- Check if the API key has proper permissions
- Ensure headers are formatted correctly

### Debug Mode
Add this to see what data is being processed:

```tsx
<ExternalJobBoard
  apiEndpoint="your-api-endpoint"
  onError={(error) => {
    console.error('API Error:', error);
    // Add debugging info
    console.log('Full error details:', error);
  }}
/>
```

## 📱 Mobile Responsiveness

The component is fully responsive and works on:
- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobile (320px - 767px)

## 🚀 Performance Tips

1. **Caching**: Implement local caching to reduce API calls
2. **Pagination**: Use server-side pagination for large datasets
3. **Debouncing**: Debounce search inputs to reduce API requests
4. **Lazy Loading**: Load job details on demand

## 📄 Example API Responses

See `src/examples/ExternalApiExample.tsx` for complete examples of:
- Different API response formats
- Error handling patterns
- Multiple API source integration
- Custom header configurations

## 🤝 Support

If you need help with integration:

1. Check the troubleshooting section above
2. Review the example implementations
3. Ensure your API returns data in a supported format
4. Test with the provided demo endpoint first

## 📝 License

This component is provided as-is for integration into your projects. Modify as needed for your specific requirements.

---

**Ready to integrate?** Replace the demo API endpoint with your actual job API and start displaying real job listings! 🎉