import Image from 'next/image'
import IconSVG from "../assets/icons/logo.svg"
import searchIcon from "../assets/icons/searchIcon.svg"
import DrawerComponent from './DrawerComponent'
import SearchIcon from './iconsComponents/SearchIcon'
import { Button, ButtonGroup } from '@material-tailwind/react'

interface propsType {
    drawer: boolean,
    setDrawerOpen: (open: boolean) => void
}

function Header({ drawer, setDrawerOpen }: propsType) {
    const buttonsStyle = "secondary-font flex justify-center items-center bg-white p-3"

    return (
        <div className="m-0 py-6 grid sm:grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">

            <DrawerComponent open={drawer} onClose={() => setDrawerOpen(false)} />

            <Image src={IconSVG} alt="logo" width={96} height={19} />
            <div className='self-end flex gap-1 mx-auto sm:mr-0 sm:ml-auto justify-evenly rounded-xl overflow-hidden text-sm shadow-md'>
                <button className={`hover:scale-95 transition-all duration-200 ${buttonsStyle}`} onClick={() => setDrawerOpen(true)}>Helsinky, Finland</button>
                <div className="min-h-full w-px bg-gray-300"></div>
                <button className={`hover:scale-95 transition-all duration-200 text-gray-400 ${buttonsStyle}`} onClick={() => setDrawerOpen(true)}>Add guests</button>
                <div className="min-h-full w-px bg-gray-300"></div>
                <div className={`${buttonsStyle}`}>
                    <SearchIcon fill="#eb5757" />
                </div>
            </div>
        </div >
    )
}

export default Header