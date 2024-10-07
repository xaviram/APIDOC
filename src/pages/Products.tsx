import React from 'react';
import { useTranslation } from 'react-i18next';

const Products: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{t('products.title')}</h1>
      <p>{t('products.description')}</p>
    </div>
  );
};

export default Products;