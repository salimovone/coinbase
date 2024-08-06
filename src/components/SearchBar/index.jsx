import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
    return (
        <div className="flex w-96 h-10 rounded-full border border-[#dc66a2] bg-white">
            <div className='flex cursor-pointer justify-center items-center w-[20%]'>
                <CiSearch className='text-3xl text-[#858585]' />
            </div>
            <div className='flex w-[80%] justify-start items-center'>
                <input placeholder='Qidirish' type='text' className='font-poppins text-[#858585] outline-none' />
            </div>
        </div>
    )
}
