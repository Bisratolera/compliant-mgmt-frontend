import { FaMessage } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";

export const DepartmentPannel = () => {
  return (
    <div className="admin-panel p-4 min-h-screen mt-20">
      <h1 className="text-2xl font-bold text-center text-[--bg-color] mb-8">Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-[--card-color] p-6 h-44 rounded-lg shadow-md items-center text-center">
         <FaMessage className="text-4xl"/>
          <h2 className="text-lg text-[--bg-color] mb-4">Messages Received </h2>
          <p className="text-[--bg-color] text-lg">123</p>
        </div>
        <div className="card bg-[--card-color] p-6 h-44  rounded-lg shadow-md items-center text-center">
            <IoMdMailOpen className="text-4xl" />
          <h2 className="text-lg text-[--bg-color] mb-4">Messages Replied </h2>
          <p className="text-[--bg-color] text-lg">456</p>
        </div>
        <div className="card bg-[--card-color] p-6 h-44  rounded-lg shadow-md items-center text-center">
            <FaUserAlt className="text-4xl" />
          <h2 className="text-lg text-[--bg-color] mb-4">Accounts Created </h2>
          <p className="text-[--bg-color] text-lg">789</p>
        </div>
      </div>
    </div>
  )
}
