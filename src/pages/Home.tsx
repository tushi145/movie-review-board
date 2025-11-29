import { useEffect, useState } from 'react';
import { supabase, MovieReview } from '@/lib/supabase';
import { ReviewCard } from '@/components/ReviewCard';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Home() {
  const [reviews, setReviews] = useState<MovieReview[]>([]);
  const [filteredReviews, setFilteredReviews] = useState<MovieReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [ratingFilter, setRatingFilter] = useState<string>('all');
  const { toast } = useToast();

  useEffect(() => {
    loadReviews();
  }, []);

  useEffect(() => {
    filterReviews();
  }, [reviews, searchTerm, ratingFilter]);

  const loadReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('movie_reviews')
        .select('*')
        .order('date_submitted', { ascending: false });

      if (error) throw error;

      setReviews(data || []);
    } catch (error: any) {
      toast({
        title: 'Error loading reviews',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const filterReviews = () => {
    let filtered = [...reviews];

    if (searchTerm) {
      filtered = filtered.filter((review) =>
        review.movie_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (ratingFilter !== 'all') {
      const rating = parseInt(ratingFilter);
      filtered = filtered.filter((review) => review.rating === rating);
    }

    setFilteredReviews(filtered);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading reviews...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-gradient">
            Movie Reviews
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover what others think about the latest films
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-8 flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search by movie name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-secondary border-border"
            />
          </div>
          <Select value={ratingFilter} onValueChange={setRatingFilter}>
            <SelectTrigger className="w-[180px] bg-secondary border-border">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Filter by rating" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Ratings</SelectItem>
              <SelectItem value="5">5 Stars</SelectItem>
              <SelectItem value="4">4 Stars</SelectItem>
              <SelectItem value="3">3 Stars</SelectItem>
              <SelectItem value="2">2 Stars</SelectItem>
              <SelectItem value="1">1 Star</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {filteredReviews.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              {searchTerm || ratingFilter !== 'all'
                ? 'No reviews match your filters'
                : 'No reviews yet. Be the first to submit one!'}
            </p>
          </div>
        ) : (
          <div className="grid gap-6 max-w-4xl mx-auto">
            {filteredReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
