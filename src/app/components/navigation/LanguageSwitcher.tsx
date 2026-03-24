import { useLanguage } from '../../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center bg-sttb-light-grey rounded-md p-1">
      <button
        onClick={() => setLanguage('id')}
        className={`px-3 py-1 rounded text-sm font-medium transition-all ${
          language === 'id'
            ? 'bg-white text-sttb-navy shadow-sm'
            : 'text-sttb-dark-slate hover:text-sttb-navy'
        }`}
      >
        ID
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded text-sm font-medium transition-all ${
          language === 'en'
            ? 'bg-white text-sttb-navy shadow-sm'
            : 'text-sttb-dark-slate hover:text-sttb-navy'
        }`}
      >
        EN
      </button>
    </div>
  );
}
