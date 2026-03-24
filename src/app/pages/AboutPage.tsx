import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function AboutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to history page as default
    navigate('/about/history', { replace: true });
  }, [navigate]);

  return null;
}
