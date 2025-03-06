import { EllipsisVertical } from "lucide-react";

export default function CardComponent({
  date,
  title,
  description,
  progress,
  timeLeft,
}) {
  return (
    <div>
      <div className="max-w-[270px] p-3 bg-white rounded-xl shadow-sm dark:bg-white-800 dark:border-gray-700">
        <div className="flex justify-between mb-3">
          <p className="text-custom-sky-blue font-medium text-xs">{date}</p>
          <EllipsisVertical size={16} color="#374957" />
        </div>

        <h5 className="capitalize mb-1 text-base font-semibold tracking-tight text-gray-900 ">
          {title}
        </h5>
        <p className="line-clamp-2 mb-2 font-normal text-justify text-gray-400 dark:text-gray-400 text-xs">
          {description}
        </p>

        <div className="w-full flex justify-between font-medium mb-2 text-xs">
          <p>Progress</p>
          <p>{progress}%</p>
        </div>

        <div className="relative mb-3 w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
          <div
            className="h-2 rounded-full"
            style={{
              width: `${progress}%`,
              backgroundColor:
                progress >= 100
                  ? "#28a745"
                  : progress >= 75
                  ? "#f39c12"
                  : progress >= 50
                  ? "#e67e22"
                  : progress >= 25
                  ? "#f1c40f"
                  : "#3498db",
            }}
          ></div>
        </div>

        <div className="flex justify-end">
          <p className="font-medium bg-light-gray py-1 px-3 rounded-lg max-w-fit text-xs text-gray-500">
            {timeLeft} left
          </p>
        </div>
      </div>
    </div>
  );
}
