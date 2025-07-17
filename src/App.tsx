import { useState } from 'react';
import JobBoard from './components/JobBoard';
import ExternalJobBoard from './components/ExternalJobBoard';
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';

function App() {
  const [mode, setMode] = useState<'mock' | 'external'>('mock');

  const handleApiError = (error: string) => {
    console.error('External API Error:', error);
    // In a real implementation, you might want to:
    // - Show a toast notification
    // - Log to analytics
    // - Fall back to cached data
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mode Selector */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Card>
            <CardHeader>
              <CardTitle>Job Board Demo - Choose Data Source</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Button
                  variant={mode === 'mock' ? 'default' : 'outline'}
                  onClick={() => setMode('mock')}
                >
                  Mock Data (Demo)
                </Button>
                <Button
                  variant={mode === 'external' ? 'default' : 'outline'}
                  onClick={() => setMode('external')}
                >
                  External API Integration
                </Button>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                {mode === 'mock' 
                  ? 'Showing demo with mock job data' 
                  : 'Ready for external API integration - configure your API endpoint below'
                }
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Job Board Content */}
      {mode === 'mock' ? (
        <JobBoard />
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>External API Configuration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">To use external API integration:</h3>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600">
                    <li>Replace the demo API endpoint below with your actual job API</li>
                    <li>Add your API key if authentication is required</li>
                    <li>Configure custom headers as needed</li>
                    <li>Test the integration and handle errors appropriately</li>
                  </ol>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <code className="text-sm">
                    {`<ExternalJobBoard
  apiEndpoint="https://your-api.com/jobs"
  apiKey="your-api-key-here"
  refreshInterval={300000}
  onError={handleApiError}
  customHeaders={{
    'X-Client-Version': '1.0.0'
  }}
/>`}
                  </code>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Demo External Job Board with placeholder API */}
          <ExternalJobBoard
            apiEndpoint="https://jsonplaceholder.typicode.com/posts" // Demo endpoint
            onError={handleApiError}
            refreshInterval={300000}
            customHeaders={{
              'X-Demo-Mode': 'true'
            }}
          />
        </div>
      )}
    </div>
  );
}

export default App;