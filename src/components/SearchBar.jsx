import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
    return (
        <div className="flex w-96 h-10 rounded-full border border-[#dc66a2] bg-white">
            <div className='flex w-[20%]'>
                <FaSearch />
            </div>
            <div className='flex w-[80%]'>
                <p></p>
            </div>
        </div>
    )
}
