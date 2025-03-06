import { useState } from "react";
import { Star } from "lucide-react";

export default function HtmlComponent({
  title,
  postedAt,
  image,
  initialFavorite,
}) {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="space-y-2">
      <div className="bg-light-gray px-3 py-2 flex gap-3 items-center">
        <img
          src={image}
          alt={title}
          width={40}
          height={40}
          className="rounded-xl"
        />

        <div className="w-full">
          <div className="flex justify-between">
            <p className="text-sm font-medium">{title}</p>

            <Star
              onClick={handleFavoriteToggle}
              size={18}
              className={
                isFavorite ? "text-yellow-500 fill-yellow-500" : "text-gray-400"
              }
            />
          </div>
          <p className="text-gray-400 text-xs">Posted at: {postedAt}</p>
        </div>
      </div>
    </div>
  );
}
