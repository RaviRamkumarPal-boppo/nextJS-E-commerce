import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading() {
  return (
    <div className="flex justify-center items-center">
      <AiOutlineLoading3Quarters className="animate-spin text-[100px] font-medium" />
    </div>
  )
}