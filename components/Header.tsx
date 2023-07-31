import Image from 'next/image'
import IconSVG from "../assets/icons/logo.svg"
import DrawerComponent from './DrawerComponent'
import SearchIcon from './iconsComponents/SearchIcon'
import { useState } from 'react'
import { guestsFilterType, locationFilterType } from './DrawerElementsWraper'


function Header({ guestsFilter, handleFilter }: { guestsFilter: guestsFilterType, handleFilter: () => void }) {
    const [filterTab, setFilterTab] = useState<1 | 2 | null>(null)
    const [selectedLocation, setSelectedLocation] = useState<locationFilterType | null>(null)

    const buttonsStyle = "secondary-font flex justify-center items-center bg-white p-3"
    const guestsNumber = guestsFilter[0].adults + guestsFilter[0].children


    const handleConfirmFilter = () => {
        handleFilter()
        setFilterTab(null)
    }

    return (
        <>
            <DrawerComponent onClose={() => setFilterTab(null)} selectedTab={filterTab} changeTab={setFilterTab} guestsFilter={guestsFilter} handleFilter={handleConfirmFilter} selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation} />

            <div className="m-0 py-6 grid sm:grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">
                <Image src={IconSVG} alt="logo" width={96} height={19} />
                <div className='self-end flex gap-1 mx-auto sm:mr-0 sm:ml-auto justify-evenly rounded-xl overflow-hidden text-sm shadow-md'>
                    <button className={`hover:scale-95 transition-all duration-200 ${!selectedLocation && "text-gray-400"} ${buttonsStyle}`} onClick={() => setFilterTab(1)}>{selectedLocation ? `${selectedLocation.city}, ${selectedLocation.country}` : "Add location"}</button>
                    <div className="min-h-full w-px bg-gray-300"></div>
                    <button className={`hover:scale-95 transition-all duration-200 ${guestsNumber == 0 && "text-gray-400"} ${buttonsStyle}`} onClick={() => setFilterTab(2)}>{guestsNumber == 0 ? "Add" : guestsNumber} guests</button>
                    <div className="min-h-full w-px bg-gray-300"></div>
                    <div className={`${buttonsStyle}`}>
                        <SearchIcon fill="#eb5757" />
                    </div>
                </div>
            </div >
        </>
    )
}

export default Header