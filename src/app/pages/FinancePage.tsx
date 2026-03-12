import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function FinancePage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/finance/biaya-studi', { replace: true });
  }, [navigate]);

  return null;
}