import type { Item } from '@/types';
import type React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  item: Item;
}

export const ProductSpecs: React.FC<Props> = ({ item }) => {
  const { t } = useTranslation();

  return (
    <div className="text-sm text-[#919a9e] dark:text-[#75767F] font-semibold ">
      <div className="pb-2 flex justify-between">
        <span>{t('Screen')}</span>

        <span className="text-link-hover-bg dark:text-dark-link-hover-bg">
          {item.screen}
        </span>
      </div>

      <div className="pb-2 flex justify-between">
        <span>{t('Resolution')}</span>

        <span className="text-link-hover-bg dark:text-dark-link-hover-bg">
          {item.resolution}
        </span>
      </div>

      <div className="pb-2 flex justify-between">
        <span>{t('Processor')}</span>

        <span className="text-link-hover-bg dark:text-dark-link-hover-bg">
          {item.processor}
        </span>
      </div>

      <div className="pb-2 flex justify-between">
        <span>{t('RAM')}</span>

        <span className="text-link-hover-bg dark:text-dark-link-hover-bg">
          {item.ram}
        </span>
      </div>

      <div className="pb-2 flex justify-between">
        <span>{t('Built-in-memory')}</span>

        <span className="text-link-hover-bg dark:text-dark-link-hover-bg">
          {item.capacity}
        </span>
      </div>

      {item.camera && (
        <div className="pb-2 flex justify-between">
          <span>{t('Camera')}</span>

          <span className="text-link-hover-bg dark:text-dark-link-hover-bg">
            {item.camera}
          </span>
        </div>
      )}

      {item.zoom && (
        <div className="pb-2 flex justify-between">
          <span>{t('Zoom')}</span>

          <span className="text-link-hover-bg dark:text-dark-link-hover-bg">
            {item.zoom}
          </span>
        </div>
      )}

      <div className="pb-2 flex justify-between">
        <span>{t('Cell')}</span>

        <span className="text-link-hover-bg dark:text-dark-link-hover-bg">
          {item.cell.join(', ')}
        </span>
      </div>
    </div>
  );
};
