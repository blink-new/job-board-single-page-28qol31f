import { useState, useMemo } from 'react';
import { Search, MapPin, Filter, Briefcase, Clock, DollarSign, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Slider } from './ui/slider';
import { Separator } from './ui/separator';
import { Job, JobFilters } from '../types/job';
import { mockJobs, jobCategories, jobTypes } from '../data/mockJobs';
import JobDetailModal from './JobDetailModal';
import ApplicationModal from './ApplicationModal';

export default function JobBoard() {
  const [filters, setFilters] = useState<JobFilters>({
    search: '',
    location: '',
    category: 'All Categories',
    type: 'All Types',
    salaryRange: [0, 3000000]
  });
  
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showJobDetail, setShowJobDetail] = useState(false);
  const [showApplication, setShowApplication] = useState(false);
  const [bookmarkedJobs, setBookmarkedJobs] = useState<Set<string>>(new Set());

  const filteredJobs = useMemo(() => {
    return mockJobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                           job.company.toLowerCase().includes(filters.search.toLowerCase());
      const matchesLocation = !filters.location || 
                             job.location.toLowerCase().includes(filters.location.toLowerCase());
      const matchesCategory = filters.category === 'All Categories' || 
                             job.category === filters.category;
      const matchesType = filters.type === 'All Types' || job.type === filters.type;
      
      // Simple salary range check (extract numbers from salary string for INR)
      const salaryNumbers = job.salary.match(/[\d,]+/g);
      const minSalary = salaryNumbers ? parseInt(salaryNumbers[0].replace(/,/g, '')) : 0;
      const matchesSalary = minSalary >= filters.salaryRange[0] && minSalary <= filters.salaryRange[1];
      
      return matchesSearch && matchesLocation && matchesCategory && matchesType && matchesSalary;
    });
  }, [filters]);

  const featuredJobs = filteredJobs.filter(job => job.featured);

  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
    setShowJobDetail(true);
  };

  const handleApplyClick = (job: Job) => {
    setSelectedJob(job);
    setShowApplication(true);
  };

  const toggleBookmark = (jobId: string) => {
    setBookmarkedJobs(prev => {
      const newBookmarks = new Set(prev);
      if (newBookmarks.has(jobId)) {
        newBookmarks.delete(jobId);
      } else {
        newBookmarks.add(jobId);
      }
      return newBookmarks;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Find Your Dream Job in India
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover thousands of job opportunities from top companies across India
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 p-6 bg-white rounded-xl shadow-lg border">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Job title, keywords, or company"
                  value={filters.search}
                  onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                  className="pl-10 h-12"
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Location"
                  value={filters.location}
                  onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
                  className="pl-10 h-12"
                />
              </div>
              <Button size="lg" className="h-12 px-8">
                <Search className="h-5 w-5 mr-2" />
                Search Jobs
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Category</label>
                  <Select
                    value={filters.category}
                    onValueChange={(value) => setFilters(prev => ({ ...prev, category: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {jobCategories.map(category => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Job Type</label>
                  <Select
                    value={filters.type}
                    onValueChange={(value) => setFilters(prev => ({ ...prev, type: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {jobTypes.map(type => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-4 block">
                    Salary Range: ₹{(filters.salaryRange[0]/100000).toFixed(1)}L - ₹{(filters.salaryRange[1]/100000).toFixed(1)}L
                  </label>
                  <Slider
                    value={filters.salaryRange}
                    onValueChange={(value) => setFilters(prev => ({ ...prev, salaryRange: value as [number, number] }))}
                    max={3000000}
                    min={0}
                    step={100000}
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-8">
            {/* Featured Jobs */}
            {featuredJobs.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Star className="h-6 w-6 text-yellow-500" />
                  Featured Jobs
                </h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {featuredJobs.slice(0, 4).map(job => (
                    <Card key={job.id} className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-yellow-500">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            {job.companyLogo && (
                              <img
                                src={job.companyLogo}
                                alt={job.company}
                                className="w-12 h-12 rounded-lg object-cover"
                              />
                            )}
                            <div>
                              <h3 className="font-semibold text-lg text-gray-900">{job.title}</h3>
                              <p className="text-gray-600">{job.company}</p>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleBookmark(job.id);
                            }}
                          >
                            <Star className={`h-4 w-4 ${bookmarkedJobs.has(job.id) ? 'fill-yellow-500 text-yellow-500' : 'text-gray-400'}`} />
                          </Button>
                        </div>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Briefcase className="h-4 w-4" />
                            {job.type}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <DollarSign className="h-4 w-4" />
                            {job.salary}
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <Badge variant="secondary">{job.category}</Badge>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleJobClick(job)}
                            >
                              View Details
                            </Button>
                            <Button
                              size="sm"
                              onClick={() => handleApplyClick(job)}
                            >
                              Apply Now
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* All Jobs */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  All Jobs ({filteredJobs.length})
                </h2>
              </div>

              <div className="space-y-4">
                {filteredJobs.map(job => (
                  <Card key={job.id} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4 flex-1">
                          {job.companyLogo && (
                            <img
                              src={job.companyLogo}
                              alt={job.company}
                              className="w-16 h-16 rounded-lg object-cover"
                            />
                          )}
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-semibold text-xl text-gray-900">{job.title}</h3>
                              {job.featured && (
                                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                              )}
                            </div>
                            <p className="text-gray-600 font-medium mb-2">{job.company}</p>
                            
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {job.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Briefcase className="h-4 w-4" />
                                {job.type}
                              </div>
                              <div className="flex items-center gap-1">
                                <DollarSign className="h-4 w-4" />
                                {job.salary}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {new Date(job.postedDate).toLocaleDateString()}
                              </div>
                            </div>

                            <p className="text-gray-700 line-clamp-2 mb-3">
                              {job.description}
                            </p>

                            <div className="flex items-center gap-2">
                              <Badge variant="secondary">{job.category}</Badge>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-end gap-2 ml-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleBookmark(job.id);
                            }}
                          >
                            <Star className={`h-4 w-4 ${bookmarkedJobs.has(job.id) ? 'fill-yellow-500 text-yellow-500' : 'text-gray-400'}`} />
                          </Button>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleJobClick(job)}
                            >
                              View Details
                            </Button>
                            <Button
                              size="sm"
                              onClick={() => handleApplyClick(job)}
                            >
                              Apply Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredJobs.length === 0 && (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Briefcase className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
                    <p className="text-gray-600">
                      Try adjusting your search criteria or filters to find more opportunities.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {selectedJob && (
        <>
          <JobDetailModal
            job={selectedJob}
            open={showJobDetail}
            onOpenChange={setShowJobDetail}
            onApply={() => {
              setShowJobDetail(false);
              setShowApplication(true);
            }}
            isBookmarked={bookmarkedJobs.has(selectedJob.id)}
            onToggleBookmark={() => toggleBookmark(selectedJob.id)}
          />
          <ApplicationModal
            job={selectedJob}
            open={showApplication}
            onOpenChange={setShowApplication}
          />
        </>
      )}
    </div>
  );
}