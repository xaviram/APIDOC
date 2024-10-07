import React from 'react';
import { useTranslation } from 'react-i18next';

const ErrorHandling: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{t('errorHandling.title')}</h1>
      <p>{t('errorHandling.description')}</p>
    </div>
  );
};

export default ErrorHandling;