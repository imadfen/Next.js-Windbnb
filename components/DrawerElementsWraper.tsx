import { Dispatch, SetStateAction } from "react";
import SearchIcon from "./iconsComponents/SearchIcon";
import LocationIcons from "./iconsComponents/LocationIcon";

export type guestsFilterType = [
    {
        adults: number;
        children: number;
    },
    Dispatch<SetStateAction<{ adults: number; children: number }>>
];

export type locationFilterType = {
    id: number,
    country: string,
    city: string
}

export const FilterButtonsWrapper = ({ onClick, tab, isMobile, guestsFilter, handleFilter, selectedLocation }: { onClick: (tab: 1 | 2 | null) => void, tab: 1 | 2 | null, isMobile: boolean, guestsFilter: guestsFilterType, handleFilter: () => void, selectedLocation: locationFilterType }) => {
    const buttonsStyle = "secondary-font flex justify-center bg-white p-3 rounded-xl"
    const guestsNumber = guestsFilter[0].adults + guestsFilter[0].children

    return (
        <>
            {!isMobile &&
                <div className='grid grid-cols-3 mb-auto w-full rounded-xl overflow-hidden text-sm shadow-md'>
                    <button className={`flex-col hover:bg-gray-50 active:scale-95 transition-transform duration-200 flex-grow ${buttonsStyle} ${tab == 1 ? "border-black border-2" : ""}`} onClick={() => onClick(1)}>
                        <p className="font-bold">LOCATION</p>
                        <p className={`${!selectedLocation && "text-gray-400"}`}>
                            {selectedLocation && `${selectedLocation.city}, ${selectedLocation.country}` || "Add location"}
                        </p>
                    </button>
                    <button className={`flex-col hover:bg-gray-50 active:scale-95 transition-transform duration-200 flex-grow ${buttonsStyle} ${tab == 2 ? "border-black border-2" : ""}`} onClick={() => onClick(2)}>
                        <p className="font-bold">GUESTS</p>
                        <p className={`${guestsNumber == 0 && "text-gray-400"}`}>{guestsNumber == 0 ? "Add" : guestsNumber} guests</p>
                    </button>
                    <div className={`flex-grow mx-auto ${buttonsStyle}`}>
                        <button className="secondary-font flex justify-center items-center px-10 font-bold active:scale-95 transition-transform duration-200 text-white bg-red-400 hover:bg-red-500 rounded-[16px]" onClick={handleFilter}>
                            <SearchIcon />
                            Search
                        </button>
                    </div>
                </div>

                ||

                <div className='flex flex-col gap-1 mb-auto w-full rounded-xl overflow-hidden text-sm shadow-md'>
                    <button className={`flex-col hover:bg-gray-50 active:scale-95 transition-transform duration-200 flex-grow ${buttonsStyle} ${tab == 1 ? "border-black border-2" : ""}`} onClick={() => onClick(1)}>
                        <p className="font-bold">LOCATION</p>
                        <p className={`${!selectedLocation && "text-gray-400"}`}>
                            {selectedLocation && `${selectedLocation.city}, ${selectedLocation.country}` || "Add location"}
                        </p>
                    </button>

                    <div className="w-full h-px bg-gray-300 m-0"></div>

                    <button className={`flex-col hover:bg-gray-50 active:scale-95 transition-transform duration-200 flex-grow ${buttonsStyle} ${buttonsStyle} ${tab == 2 ? "border-black border-2" : ""}`} onClick={() => onClick(2)}>
                        <p className="font-bold">GUESTS</p>
                        <p className={`${guestsNumber == 0 && "text-gray-400"}`}>
                            {guestsNumber == 0 ? "Add" : guestsNumber} guests
                        </p>
                    </button>
                </div>

            }
        </>
    )
};


export const MobileButtonWrapper = ({ isMobile, handleFilter }: { isMobile: boolean, handleFilter: () => void }) => {
    return (
        <div>
            {isMobile &&
                <button className="secondary-font flex justify-center w-32 h-12 items-center my-5 px-10 font-bold text-white bg-red-400 rounded-[16px]" onClick={handleFilter}>
                    <SearchIcon />
                    Search
                </button>
            }</div>
    )
};


export const FilterOptionsWrapper = ({ tab, selectedLocation, setSelectedLocation, isMobile, guestsFilter }: { tab: 1 | 2 | null, selectedLocation: locationFilterType, setSelectedLocation: (locations: locationFilterType | null) => void, isMobile: boolean, guestsFilter: guestsFilterType }) => {
    const locationsList = [
        { id: 1, country: "Finland", city: "Helsinki" },
        { id: 2, country: "Finland", city: "Turku" },
        { id: 3, country: "Finland", city: "Oulu" },
        { id: 4, country: "Finland", city: "Vaasa" },
    ]

    const handleChooseLocation = (id: number) => {
        for (let i = 0; i < locationsList.length; i++) {
            const location = locationsList[i];
            if (selectedLocation && selectedLocation.id == id)
                setSelectedLocation(null)

            if (location.id == id)
                setSelectedLocation(location)
        }
    }


    const RenderOptions = () => {
        switch (tab) {
            case 1:
                return (
                    <div className="col-start-1 p-2 sm:p-4">
                        {locationsList.map((obj, i) => (
                            <div key={i} className={`flex items-center my-4 sm:my-7 w-fit py-1 px-5 sm:py-3 sm:px-5 hover:bg-blue-gray-50 ${selectedLocation?.id == obj.id ? "bg-gray-100" : ""} hover:bg-gray-50 active:scale-95 transition-all duration-150 cursor-pointer rounded-full`} onClick={() => handleChooseLocation(obj.id)}>
                                <LocationIcons fill="#4f4f4f" />
                                <p className="text-gray-700">{obj.city}, {obj.country}</p>
                            </div>
                        ))}
                    </div>
                )

            case 2:
                return (
                    <div className="col-start-1 md:col-start-2 p-2 sm:p-4">
                        <div>
                            <p className='font-bold'>Adults</p>
                            <p className='text-gray-400'>Ages 13 or above</p>
                            <div className='flex gap-5'>
                                <button className='text-gray-500 border-2 border-gray-500 aspect-square w-7 rounded hover:bg-gray-100 active:scale-90 transition-all duration-200' onClick={() => guestsFilter[1](prev => { return { ...prev, adults: prev.adults > 0 ? prev.adults-- : 0 } })}>-</button>
                                <p>{guestsFilter[0].adults}</p>
                                <button className='text-gray-500 border-2 border-gray-500 aspect-square w-7 rounded hover:bg-gray-100 active:scale-90 transition-all duration-200' onClick={() => guestsFilter[1](prev => { return { ...prev, adults: prev.adults++ } })}>+</button>
                            </div>
                        </div>

                        <div className='mt-10'>
                            <p className='font-bold'>Children</p>
                            <p className='text-gray-400'>Ages 2-12</p>
                            <div className='flex gap-5'>
                                <button className='text-gray-500 border-2 border-gray-500 aspect-square w-7 rounded hover:bg-gray-100 active:scale-90 transition-all duration-200' onClick={() => guestsFilter[1](prev => { return { ...prev, children: prev.children > 0 ? prev.children-- : 0 } })}>-</button>
                                <p>{guestsFilter[0].children}</p>
                                <button className='text-gray-500 border-2 border-gray-500 aspect-square w-7 rounded hover:bg-gray-100 active:scale-90 transition-all duration-200' onClick={() => guestsFilter[1](prev => { return { ...prev, children: prev.children++ } })}>+</button>
                            </div>
                        </div>
                    </div >
                )

            default:
                return <></>
        }
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full mb-auto">
            <RenderOptions />
        </div>
    )
}