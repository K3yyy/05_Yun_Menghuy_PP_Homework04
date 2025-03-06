import { useState } from "react";
import FilterComponent from "./Filter";
import SubjectComponent from "./SubjectComponent";
import { learningMaterials } from "../data/learningMaterials";

export default function LearningMaterialsComponent() {
  const [sortOrder, setSortOrder] = useState("");

  const sortedMaterials = [...learningMaterials].sort((a, b) => {
    if (sortOrder === "A-Z") {
      return a.title.localeCompare(b.title);
    } else if (sortOrder === "Z-A") {
      return b.title.localeCompare(a.title);
    }
    return 0;
  });

  return (
    <div className="bg-white drop-shadow-lg rounded-2xl overflow-auto h-[84vh] w-[319px] mx-auto ml-4">
      <FilterComponent setSortOrder={setSortOrder} />

      {/* title */}
      <div className="p-3 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Learning Materials</h2>
        <img src="/more.svg" alt="three dot" width={25} height={25} />
      </div>

      <div>
        {sortedMaterials.map((item) => (
          <SubjectComponent
            key={item.id}
            image={item.image}
            title={item.title}
            postedAt={item.postedAt}
            initialFavorite={item.initialFavorite}
          />
        ))}
      </div>
    </div>
  );
}
