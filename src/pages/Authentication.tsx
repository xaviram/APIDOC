import React from 'react';
import { useTranslation } from 'react-i18next';

const Authentication: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{t('authentication.title')}</h1>
      <p>{t('authentication.description')}</p>
    </div>
  );
};

export default Authentication;