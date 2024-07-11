
import { LuPartyPopper } from 'react-icons/lu';
import "./App.css";
export const SuccessfulToast = () => {
  return (
    <div className="toast-container flex justify-center">
      <div className="toast p-8 bg-white shadow-2xl rounded-lg flex items-center gap-4">
        <LuPartyPopper />
        <h1>Message sent successfully</h1>
        <LuPartyPopper />
      </div>
    </div>
  );
};
