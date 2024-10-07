import React from 'react';
import { useTranslation } from 'react-i18next';

const Users: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{t('users.title')}</h1>
      <p>{t('users.description')}</p>
    </div>
  );
};

export default Users;