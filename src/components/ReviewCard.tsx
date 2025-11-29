import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { MovieReview } from '@/lib/supabase';
import { format } from 'date-fns';

type ReviewCardProps = {
  review: MovieReview;
};

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card className="card-glow bg-gradient-card border-border/50">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground mb-1">
              {review.movie_name}
            </h3>
            <p className="text-sm text-muted-foreground">
              Reviewed by {review.reviewer_name}
            </p>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < review.rating
                    ? 'fill-primary text-primary'
                    : 'text-muted-foreground'
                }`}
              />
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/90 mb-3 leading-relaxed">
          {review.review_text}
        </p>
        <p className="text-xs text-muted-foreground">
          {format(new Date(review.date_submitted), 'MMMM d, yyyy')}
        </p>
      </CardContent>
    </Card>
  );
}
