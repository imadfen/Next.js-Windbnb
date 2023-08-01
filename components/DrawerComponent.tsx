import Drawer from 'react-modern-drawer'
import { useEffect, useState } from "react";
import { FilterButtonsWrapper, FilterOptionsWrapper, MobileButtonWrapper, guestsFilterType, locationFilterType } from './DrawerElementsWraper';


interface propsType {
    selectedTab: 1 | 2 | null,
    onClose: () => void,
    changeTab: (tab: 1 | 2 | null) => void,
    guestsFilter: guestsFilterType,
    handleFilter: () => void,
    selectedLocation: locationFilterType,
    setSelectedLocation: (locations: locationFilterType) => void
}



function DrawerComponent({ selectedTab, onClose, changeTab, guestsFilter, handleFilter, selectedLocation, setSelectedLocation }: propsType) {
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
        <Drawer
            open={Boolean(selectedTab)}
            onClose={onClose}
            className="py-10 px-20 flex flex-col justify-center items-center"
            direction="top"
            size={550}
            customIdSuffix='react-drawer'
        >

            <FilterButtonsWrapper onClick={changeTab} tab={selectedTab} isMobile={isMobile} guestsFilter={guestsFilter} handleFilter={handleFilter} selectedLocation={selectedLocation} />

            <FilterOptionsWrapper
                tab={selectedTab}
                isMobile={isMobile}
                selectedLocation={selectedLocation}
                setSelectedLocation={setSelectedLocation}
                guestsFilter={guestsFilter}
            />

            <MobileButtonWrapper isMobile={isMobile} handleFilter={handleFilter} />
        </Drawer>
    )
}

export default DrawerComponent