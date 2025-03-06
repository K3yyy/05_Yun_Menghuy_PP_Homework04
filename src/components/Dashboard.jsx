export default function DashboardComponent({ icon, totalTasks, label, color }) {
  return (
    <div className="flex bg-white gap-4 py-4 px-4 rounded-xl w-[260px] max-w-xs shadow-md">
      <div
        className={`p-2 rounded-xl ${color} flex justify-center items-center`}
      >
        <img src={icon} alt="icon" className="w-8 h-5" />
      </div>
      <div>
        <p className="text-lg font-semibold">{totalTasks}</p>
        <p className="text-gray-400 text-sm">{label}</p>
      </div>
    </div>
  );
}
