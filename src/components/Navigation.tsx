import { Link, useLocation } from 'react-router-dom';
import { Film, Plus, LogIn, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

export function Navigation() {
  const location = useLocation();
  const { user, signOut } = useAuth();

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <Film className="w-6 h-6 text-primary" />
          <span className="text-gradient">CineReview</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link to="/">
            <Button 
              variant={location.pathname === '/' ? 'default' : 'ghost'}
              className="gap-2"
            >
              <Film className="w-4 h-4" />
              Reviews
            </Button>
          </Link>

          {user ? (
            <>
              <Link to="/submit">
                <Button 
                  variant={location.pathname === '/submit' ? 'default' : 'ghost'}
                  className="gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Submit Review
                </Button>
              </Link>
              <Button 
                variant="ghost" 
                onClick={signOut}
                className="gap-2"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </Button>
            </>
          ) : (
            <Link to="/auth">
              <Button 
                variant={location.pathname === '/auth' ? 'default' : 'ghost'}
                className="gap-2"
              >
                <LogIn className="w-4 h-4" />
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
