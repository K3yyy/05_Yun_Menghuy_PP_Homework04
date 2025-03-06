import { Bell, Search } from "lucide-react";


export default function TopNavbar(){
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="grid grid-cols-4 items-center w-full my-2 mx-3 lg:px-6 h-14 ">
      <form className="relative col-span-3 w-full" onSubmit={handleSubmit}>
        <button className="absolute top-2.5 left-4 cursor-pointer">
          <Search className="w-5 h-5 text-gray-500" />
        </button>
        <input
          type="text"
          placeholder="Search assignment here"
          className="w-full h-10 md:h-11  py-2 pl-12 pr-4 rounded-lg border border-gray-300 focus:ring-0 focus:outline-custom-sky-blue"
        />
      </form>

      <div className="flex gap-2 col-span-1 justify-end items-center mt-2 mb-2">
        {/* Notification Bell */}
        <div className="relative w-12 h-12 p-2 rounded-full flex items-center justify-center">
          <Bell className="w-6 h-6 text-gray-600" />
          <div className="bg-red-600 w-2 h-2 rounded-full absolute top-2 right-2"></div>
        </div>

        {/* Profile Section */}
        <div className="flex items-center rounded-lg py-2 px-3 gap-2">
          <img
            src="https://i.pinimg.com/736x/39/2a/50/392a5042102c7d7e4ed87527a2d7e74a.jpg"
            alt="profile image"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="hidden md:block">
            <p className="text-sm font-medium">Dark Moon</p>
            <p className="text-xs text-gray-400">darkmoon@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
