import { RiVerifiedBadgeFill } from "react-icons/ri";

export const SuccessfullToast = () => {
  return (
    <div className='successfull flex text-4xl'>
    <div className="card flex justify-center items-center  text-center bg-red-800">
        <div className="text icon">
            <h1>message sent successfully <RiVerifiedBadgeFill /></h1>
        </div>
    </div>
    </div>
  )
}
