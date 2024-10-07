import React from 'react';
import { useTranslation } from 'react-i18next';

const Introduction: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{t('introduction.title')}</h1>
      <p>{t('introduction.description')}</p>
    </div>
  );
};

export default Introduction;