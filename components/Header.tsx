import Image from 'next/image'
import IconSVG from "../assets/icons/logo.svg"
import searchIcon from "../assets/icons/searchIcon.svg"

function Header() {
    const buttonsStyle = "secondary-font flex justify-center items-center bg-white p-3 cursor-pointer bg-red-400"

    return (
        <div className="m-0 py-6 grid sm:grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">
            <Image src={IconSVG} alt="logo" width={96} height={19} />
            <div className='self-end flex gap-1 mx-auto sm:mr-0 sm:ml-auto justify-evenly rounded-xl overflow-hidden text-sm shadow-md'>
                <button className={`${buttonsStyle}`}>Helsinky, Finland</button>
                <div className="min-h-full w-px bg-gray-300"></div>
                <button className={`text-gray-400 ${buttonsStyle}`}>Add guests</button>
                <div className="min-h-full w-px bg-gray-300"></div>
                <div className={`min-w-min ${buttonsStyle}`}>
                    <Image src={searchIcon} alt="Search" width={27} height={27} />
                </div>
            </div>
        </div >
    )
}

export default Header