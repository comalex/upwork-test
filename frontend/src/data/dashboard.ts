export interface Metric {
  id: string;
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
}

export interface FilterOption {
  id: string;
  label: string;
  active?: boolean;
}

export interface Candidate {
  id: string;
  name: string;
  title: string;
  location: string;
  matchScore: number;
  hourlyRate: string;
  skills: string[];
  availability: string;
}

export interface PipelineStage {
  id: string;
  name: string;
  count: number;
  status: 'pending' | 'in-progress' | 'completed';
  description: string;
}

export interface ActivityItem {
  id: string;
  type: 'message' | 'interview' | 'note';
  actor: string;
  timeAgo: string;
  summary: string;
  details: string;
}

export interface QuickAction {
  id: string;
  label: string;
  description: string;
  cta: string;
}

export const metrics: Metric[] = [
  {
    id: 'candidates',
    label: 'Qualified Candidates',
    value: '28',
    change: '+12% vs last week',
    trend: 'up'
  },
  {
    id: 'interviews',
    label: 'Interviews Scheduled',
    value: '9',
    change: '+3 upcoming',
    trend: 'neutral'
  },
  {
    id: 'offers',
    label: 'Offers Extended',
    value: '3',
    change: '1 awaiting response',
    trend: 'down'
  }
];

export const filters: FilterOption[] = [
  { id: 'design', label: 'Product Design', active: true },
  { id: 'ux', label: 'UX Research' },
  { id: 'contract', label: 'Contract' },
  { id: 'us-only', label: 'US Only' },
  { id: 'available', label: 'Immediate Availability' }
];

export const candidates: Candidate[] = [
  {
    id: 'cand-1',
    name: 'Amelia Thornton',
    title: 'Senior Product Designer',
    location: 'Austin, USA',
    matchScore: 94,
    hourlyRate: '$95/hr',
    skills: ['Design Systems', 'Figma', 'User Interviews'],
    availability: 'Available 30 hrs/week'
  },
  {
    id: 'cand-2',
    name: 'Haruto Sato',
    title: 'UX Research Lead',
    location: 'Tokyo, Japan',
    matchScore: 88,
    hourlyRate: '$85/hr',
    skills: ['Field Studies', 'Journey Mapping', 'Quantitative Analysis'],
    availability: 'Available 20 hrs/week'
  },
  {
    id: 'cand-3',
    name: 'Sofia Martín',
    title: 'Product Designer',
    location: 'Barcelona, Spain',
    matchScore: 82,
    hourlyRate: '$70/hr',
    skills: ['Prototyping', 'Design Sprints', 'Accessibility'],
    availability: 'Next availability in 1 week'
  }
];

export const pipeline: PipelineStage[] = [
  {
    id: 'sourcing',
    name: 'Sourcing',
    count: 16,
    status: 'completed',
    description: 'Screened and shortlisted by recruiting team.'
  },
  {
    id: 'review',
    name: 'Hiring Manager Review',
    count: 8,
    status: 'in-progress',
    description: 'Awaiting portfolio feedback from hiring manager.'
  },
  {
    id: 'interview',
    name: 'Interview',
    count: 4,
    status: 'in-progress',
    description: 'Interviews scheduled this week with design panel.'
  },
  {
    id: 'offer',
    name: 'Offer',
    count: 2,
    status: 'pending',
    description: 'Compensation packages drafted and pending approval.'
  }
];

export const activities: ActivityItem[] = [
  {
    id: 'act-1',
    type: 'message',
    actor: 'Kelly (Recruiter)',
    timeAgo: '15 minutes ago',
    summary: 'Shared design challenge with Amelia',
    details: 'Sent case study brief and scheduled follow-up for Friday.'
  },
  {
    id: 'act-2',
    type: 'interview',
    actor: 'Caleb (Hiring Manager)',
    timeAgo: '1 hour ago',
    summary: 'Requested panel review for Haruto',
    details: 'Added research lead and product manager to upcoming session.'
  },
  {
    id: 'act-3',
    type: 'note',
    actor: 'Evelyn (Product Lead)',
    timeAgo: 'Yesterday',
    summary: "Feedback on Sofia's portfolio",
    details: 'Strong storytelling. Would like deeper dive into accessibility work.'
  }
];

export const quickActions: QuickAction[] = [
  {
    id: 'brief',
    label: 'Share Project Brief',
    description: 'Send the latest UX audit brief to shortlisted candidates.',
    cta: 'Send brief'
  },
  {
    id: 'sync',
    label: 'Schedule Team Sync',
    description: 'Coordinate a 30 minute call with design leadership.',
    cta: 'Find time'
  },
  {
    id: 'review',
    label: 'Portfolio Review',
    description: 'Assign remaining candidates for hiring manager review.',
    cta: 'Assign reviewers'
  }
];
