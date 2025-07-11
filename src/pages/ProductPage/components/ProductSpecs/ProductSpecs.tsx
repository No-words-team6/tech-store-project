import type { Item } from '@/types';
import type React from 'react';

interface Props {
  item: Item;
}

export const ProductSpecs: React.FC<Props> = ({ item }) => {
  return (
    <div className="text-sm text-[#75767F] font-semibold ">
      <div className="pb-2 flex justify-between">
        <span>Screen</span>

        <span className="text-[#F1F2F9]">{item.screen}</span>
      </div>

      <div className="pb-2 flex justify-between">
        <span>Resolution</span>

        <span className="text-[#F1F2F9]">{item.resolution}</span>
      </div>

      <div className="pb-2 flex justify-between">
        <span>Processor</span>

        <span className="text-[#F1F2F9]">{item.processor}</span>
      </div>

      <div className="pb-2 flex justify-between">
        <span>RAM</span>

        <span className="text-[#F1F2F9]">{item.ram}</span>
      </div>

      <div className="pb-2 flex justify-between">
        <span>Built in memory</span>

        <span className="text-[#F1F2F9]">{item.capacity}</span>
      </div>

      {item.camera && (
        <div className="pb-2 flex justify-between">
          <span>Camera</span>

          <span className="text-[#F1F2F9]">{item.camera}</span>
        </div>
      )}

      {item.zoom && (
        <div className="pb-2 flex justify-between">
          <span>Zoom</span>

          <span className="text-[#F1F2F9]">{item.zoom}</span>
        </div>
      )}

      <div className="pb-2 flex justify-between">
        <span>Cell</span>

        <span className="text-[#F1F2F9]">{item.cell.join(', ')}</span>
      </div>
    </div>
  );
};
