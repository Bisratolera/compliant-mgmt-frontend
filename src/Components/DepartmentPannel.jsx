import { FaMessage, IoMdMailOpen, FaUserAlt } from 'react-icons/fa';

export const DepartmentPanel = () => {
  return (
    <div className="department-panel p-4 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-8">Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="panel-card p-6 bg-white shadow-md rounded-lg flex items-center justify-center text-center">
          <FaMessage className="text-4xl" />
          <div>
            <h2 className="text-lg mb-4">Messages Received</h2>
            <p className="text-lg">123</p>
          </div>
        </div>
        <div className="panel-card p-6 bg-white shadow-md rounded-lg flex items-center justify-center text-center">
          <IoMdMailOpen className="text-4xl" />
          <div>
            <h2 className="text-lg mb-4">Messages Replied</h2>
            <p className="text-lg">456</p>
          </div>
        </div>
        <div className="panel-card p-6 bg-white shadow-md rounded-lg flex items-center justify-center text-center">
          <FaUserAlt className="text-4xl" />
          <div>
            <h2 className="text-lg mb-4">Accounts Created</h2>
            <p className="text-lg">789</p>
          </div>
        </div>
      </div>
    </div>
  );
};
