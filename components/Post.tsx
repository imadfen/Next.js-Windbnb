import Image from "next/image"
import StarIcon from "./iconsComponents/StarIcon"

export interface stayType {
    city: string,
    country: string,
    superHost: boolean,
    title: string,
    rating: number,
    maxGuest: number,
    type: string,
    beds: number,
    photo: string
}

interface propsType {
    stay: stayType
}

function Post({ stay }: propsType) {
    return (
        <div>
            <div className="w-[350px] sm:w-[395px] rounded-[24px] transition-transform transform-gpu duration-700 hover:scale-105">
                <div className="h-[238px] sm:h-[267px] w-full relative mb-5">
                    <Image src={stay.photo} alt="" className="rounded-[24px]"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center" />
                </div>

                <div className="flex items-center">
                    {stay.superHost && <p className="border-2 font-bold text-xs border-black rounded-full mr-5 py-1 px-2">SUPER HOST</p>}
                    <p className="text-sm font-medium text-gray-400">{stay.type}</p>
                    <p className="ml-auto flex font-medium text-sm text-gray-700">
                        <StarIcon />
                        {stay.rating.toFixed(2)}
                    </p>
                </div>
                <p className="text-base font-semibold my-3">
                    {stay.title}
                </p>
            </div>
        </div>
    )
}

export default Post