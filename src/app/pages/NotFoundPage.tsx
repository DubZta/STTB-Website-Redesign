import { Link } from 'react-router';
import { Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-sttb-light-grey px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-sttb-navy mb-4">404</h1>
        <h2 className="text-3xl font-bold text-sttb-dark-slate mb-6">
          Page Not Found
        </h2>
        <p className="text-lg text-sttb-dark-slate/70 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-sttb-red text-white rounded-lg hover:bg-sttb-red/90 transition-colors font-medium"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
