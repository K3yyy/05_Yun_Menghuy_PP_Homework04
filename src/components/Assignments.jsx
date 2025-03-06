import AddNew from "./AddNew";
import Card from "./Card";
import { useState } from "react";
export default function AssignmentsComponent() {
  const [data, setData] = useState([]);
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Assignments</h2>
        <AddNew setData={setData} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols- gap-6">
        {data.map((add) => (
          <Card
            key={add.id}
            date={add.dueDate}
            title={add.title}
            description={add.description}
            progress={add.progress}
            timeLeft={add.timeLeft}
          />
        ))}
      </div>
    </div>
  );
}
