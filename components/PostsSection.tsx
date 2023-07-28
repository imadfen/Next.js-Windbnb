import Image from "next/image"
import starIcon from "../assets/icons/starIcon.svg"
import SkeletonGrid from "./skeletons/SkeletonGrid"
import Post from "./Post"


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
                    <Post stay={post} key={i} />
                ))
            }
        </div>
    )
}

export default PostsSection