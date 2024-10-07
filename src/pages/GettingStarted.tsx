import React from 'react';
import { useTranslation } from 'react-i18next';

const GettingStarted: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{t('gettingStarted.title')}</h1>
      <p>{t('gettingStarted.description')}</p>
    </div>
  );
};

export default GettingStarted;