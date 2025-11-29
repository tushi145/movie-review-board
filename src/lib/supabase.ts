import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xuekjboxwtkubscqzygm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1ZWtqYm94d3RrdWJzY3F6eWdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQzOTg3NTgsImV4cCI6MjA3OTk3NDc1OH0.shdErrRDroL6UmbS-23M4RQA7WKkYPdyXY7ZIuJkMQ4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type MovieReview = {
  id: string;
  movie_name: string;
  reviewer_name: string;
  review_text: string;
  rating: number;
  date_submitted: string;
};
