import React from 'react';
import { useTranslation } from 'react-i18next';

const Endpoints: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{t('endpoints.title')}</h1>
      <p>{t('endpoints.description')}</p>
    </div>
  );
};

export default Endpoints;