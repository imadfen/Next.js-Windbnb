import { Button, Drawer } from "@material-tailwind/react"
import { useEffect, useState } from "react";
import SearchIcon from "./iconsComponents/SearchIcon"
import LocationIcon from "./iconsComponents/LocationIcon";

interface propsType {
    open: boolean,
    onClose: () => void,

}


const FilterButtonsWrapper = ({ onClick, tab }: { onClick: (tab: 0 | 1) => void, tab: 0 | 1 }) => {
    const [isDesktop, setIsDesktop] = useState(false);
    const buttonsStyle = "secondary-font flex justify-center bg-white p-3 rounded-xl"

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 650);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            {isDesktop &&
                <div className='grid grid-cols-3 mb-auto w-full rounded-xl overflow-hidden text-sm shadow-md'>
                    <button className={`flex-col hover:bg-gray-50 active:scale-95 transition-transform duration-200 flex-grow ${buttonsStyle} ${tab == 0 ? "border-black border-2" : ""}`} onClick={() => onClick(0)}>
                        <p className="font-bold">LOCATION</p>
                        Helsinky, Finland
                    </button>
                    <button className={`flex-col hover:bg-gray-50 active:scale-95 transition-transform duration-200 flex-grow ${buttonsStyle} ${tab == 1 ? "border-black border-2" : ""}`} onClick={() => onClick(1)}>
                        <p className="font-bold">GUESTS</p>
                        <p className="text-gray-400">Add guests</p>
                    </button>
                    <div className={`flex-grow mx-auto ${buttonsStyle}`}>
                        <Button className="secondary-font flex justify-center items-center px-10 bg-red-400 rounded-[16px]" color="red">
                            <SearchIcon />
                            Search
                        </Button>
                    </div>
                </div>

                ||

                <div className='flex flex-col gap-1 mb-auto w-full rounded-xl overflow-hidden text-sm shadow-md'>
                    <button className={`flex-col hover:bg-gray-50 active:scale-95 transition-transform duration-200 flex-grow ${buttonsStyle} ${tab == 0 ? "border-black border-2" : ""}`} onClick={() => onClick(0)}>
                        <p className="font-bold">LOCATION</p>
                        Helsinky, Finland
                    </button>

                    <div className="w-full h-px bg-gray-300 m-0"></div>

                    <button className={`flex-col hover:bg-gray-50 active:scale-95 transition-transform duration-200 flex-grow ${buttonsStyle} ${buttonsStyle} ${tab == 1 ? "border-black border-2" : ""}`} onClick={() => onClick(1)}>
                        <p className="font-bold">GUESTS</p>
                        <p className="text-gray-400">Add guests</p>
                    </button>
                </div>

            }
        </>
    )
};


const MobileButtonWrapper = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 650);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            {isMobile &&
                <Button className="secondary-font flex justify-center items-center my-5 px-10 bg-red-400 rounded-[16px] ${buttonsStyle}`}" color="red">
                    <SearchIcon />
                    Search
                </Button>
            }</div>
    )
};


const FilterOptionsWrapper = ({ tab, locations }: { tab: 0 | 1, locations: { country: string, city: string }[] }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 650);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const RenderOptions = () => {
        switch (tab) {
            case 0:
                return (
                    <div className="col-start-1 p-2 sm:p-4">
                        {locations.map(obj => (
                            <div className="flex items-center my-4 sm:my-7 w-fit py-1 px-5 sm:py-3 sm:px-5 hover:bg-blue-gray-50 transition-all duration-150 cursor-pointer rounded-full">
                                <LocationIcon fill="#4f4f4f" />
                                <p className="text-gray-700">{obj.city}, {obj.country}</p>
                            </div>
                        ))}
                    </div>
                )

            case 1:
                return (
                    <div className="col-start-2 p-5">
                        {locations.map(obj => (
                            <p>{obj.city}, {obj.country}</p>
                        ))}
                    </div>
                )

            default:
                break;
        }
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full">
            <RenderOptions />
        </div>
    )
}


function DrawerComponent({ open, onClose }: propsType) {
    const [filterTab, setFilterTab] = useState<0 | 1>(0)

    return (
        <Drawer
            open={open}
            onClose={onClose}
            className="py-10 px-20 flex flex-col justify-center items-center"
            placement="top"
            size={550}
        >

            <FilterButtonsWrapper onClick={setFilterTab} tab={filterTab} />

            <FilterOptionsWrapper
                locations={[
                    { country: "Finland", city: "Helsinki" },
                    { country: "Finland", city: "Turku" },
                    { country: "Finland", city: "Oulu" },
                    { country: "Finland", city: "Vaasa" },
                ]}
                tab={filterTab}
            />

            <MobileButtonWrapper />
        </Drawer>
    )
}

export default DrawerComponent