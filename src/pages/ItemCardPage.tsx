import { useParams } from 'react-router-dom';

export const ItemCardPage = () => {
  const { category, itemId } = useParams();

  return (
    <div className="bg-pink-200 pt-5 flex-grow flex flex-col gap-y-10">
      <p className="text-gray-600 font-bold text-center">Item Card Body</p>

      <div className="grid grid-cols-2">
        <div className="border bg-pink-300 ml-50 w-[500px] h-[600px] flex flex-col gap-y-15">
          <div className="border bg-pink-600 h-[400px] mx-15 mt-15" />
          <p className="font-bold text-center">{`Product ${itemId} info`}</p>
        </div>

        <div className="font-bold">
          <p>Some info:</p>
          <p>{`*Current category: ${category}`}</p>
          <p>{`*Current number: ${itemId}`}</p>
        </div>
      </div>
    </div>
  );
};
