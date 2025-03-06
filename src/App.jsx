// In App.jsx

import React from "react";
import Sidebar from "./components/Sidebar";
import LearningMaterials from "./components/LearningMaterials";
import TopNavbar from "./components/TopNavbar";
import Dashboard from "./components/Dashboard";
import { dashboard } from "./data/dashboard";
import Card from "./components/Card";
import AddNew from "./components/AddNew";
import Assignments from "./components/Assignments";
import { cardData } from "./data/cardData";

function App() {
  return (
    <>
      <section className="flex justify-center">
        <div className="w-[18%] h-[920px] ">
          <Sidebar />
        </div>
        <div className="w-[80%] h-[920px]  flex flex-col justify-between">
          <div className="w-[100%] h-[100px] ">
            <TopNavbar />
          </div>

          <div className="w-[100%] h-[88%]  flex justify-between">
            <div className="w-[75%] h-[100%]  flex flex-col gap-[20px]">
              <p className="font-medium text-xl">Dashboard</p>
              <div className="flex justify-between">
                {dashboard.map((item) => (
                  <Dashboard key={item.id} {...item} />
                ))}
              </div>
              <div className="flex justify-between">
                <Assignments />
                <AddNew />
              </div>
              <div className="w-[100%] h-[100%]  flex-wrap flex content-start gap-[20px] justify-start  ">
                {cardData.map((item) => (
                  <Card
                    key={item.id}
                    title={item.title}
                    date={item.date}
                    description={item.description}
                    progress={item.progress}
                    timeLeft={item.timeLeft}
                  />
                ))}
              </div>
            </div>
            <div className="w-[22%] h-[100%]">
              <LearningMaterials />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
