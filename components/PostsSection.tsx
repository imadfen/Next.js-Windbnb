import Image from "next/image"
import starIcon from "../assets/icons/starIcon.svg"
import SkeletonGrid from "./skeletons/SkeletonGrid"


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
    staysData: stayType[],
    loading: boolean,
    errorLoad: boolean,
}

function PostsSection({ staysData, loading, errorLoad }: propsType) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3">
            {loading && <SkeletonGrid /> ||
                errorLoad && "error loading data" ||
                staysData && staysData.map((post, i) => (
                    <div key={i} className="w-[350px] sm:w-[395px] rounded-[24px] transition-transform transform-gpu duration-700 hover:scale-105">
                        <div className="h-[238px] sm:h-[267px] w-full relative mb-5">
                            <Image src={post.photo} alt="" className="rounded-[24px]"
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center" />
                        </div>

                        <div className="flex items-center">
                            {post.superHost && <p className="border-2 font-bold text-xs border-black rounded-full mr-5 py-1 px-2">SUPER HOST</p>}
                            <p className="text-sm font-medium text-gray-400">{post.type}</p>
                            <p className="ml-auto flex font-medium text-sm text-gray-700">
                                <Image src={starIcon} alt="" width={15} />
                                {post.rating.toFixed(2)}
                            </p>
                        </div>
                        <p className="text-base font-semibold my-3">
                            {post.title}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}

export default PostsSection