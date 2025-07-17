import { MapPin, Briefcase, DollarSign, Clock, Star, Building, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Separator } from './ui/separator';
import { Job } from '../types/job';

interface JobDetailModalProps {
  job: Job;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onApply: () => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
}

export default function JobDetailModal({
  job,
  open,
  onOpenChange,
  onApply,
  isBookmarked,
  onToggleBookmark
}: JobDetailModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              {job.companyLogo && (
                <img
                  src={job.companyLogo}
                  alt={job.company}
                  className="w-16 h-16 rounded-lg object-cover"
                />
              )}
              <div>
                <DialogTitle className="text-2xl font-bold text-gray-900 mb-1">
                  {job.title}
                </DialogTitle>
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-gray-500" />
                  <span className="text-lg text-gray-600 font-medium">{job.company}</span>
                  {job.featured && (
                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  )}
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggleBookmark}
            >
              <Star className={`h-5 w-5 ${isBookmarked ? 'fill-yellow-500 text-yellow-500' : 'text-gray-400'}`} />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Job Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">{job.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Job Type</p>
                <p className="font-medium">{job.type}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Salary</p>
                <p className="font-medium">{job.salary}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Posted</p>
                <p className="font-medium">{new Date(job.postedDate).toLocaleDateString()}</p>
              </div>
            </div>
          </div>

          {/* Category Badge */}
          <div>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              {job.category}
            </Badge>
          </div>

          <Separator />

          {/* Job Description */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Job Description</h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {job.description}
            </p>
          </div>

          <Separator />

          {/* Requirements */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Requirements</h3>
            <ul className="space-y-2">
              {job.requirements.map((requirement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          {/* Benefits */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
            <ul className="space-y-2">
              {job.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Apply Button */}
          <div className="flex justify-center pt-4">
            <Button
              size="lg"
              onClick={onApply}
              className="px-8"
            >
              Apply for this Position
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}