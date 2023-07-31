import { useState } from "react"
import PostsSection, { stayType } from "./PostsSection"

interface propsType {
    staysData: stayType[],
    loading: boolean,
    errorLoad: boolean
}

function Main({ staysData, loading, errorLoad }: propsType) {
    const [displayAll, setDisplayAll] = useState(false)

    const limitPosts = () => {
        if (displayAll) return staysData

        let list: stayType[] = []
        for (let i = 0; i < staysData.length; i++) {
            if (i < 6) {
                const post = staysData[i];
                list.push(post)
            } else {
                break
            }
        }
        return list
    }


    return (
        <div className="flex flex-col items-center w-full">
            <div className="flex w-full items-center">
                <h1 className="text-2xl font-bold text-gray-700">Stays in Finland</h1>
                {!displayAll && staysData.length > 6 && <p onClick={() => setDisplayAll(true)} className="text-sm font-medium ml-auto cursor-pointer">{staysData.length - 6}+ stays</p>}
            </div>
            {errorLoad &&
                <div className="w-full text-center">
                    <p className="text-red-400 font-semibold text-lg">error, please try again later</p>
                </div>
                ||
                !loading && staysData.length == 0 ?
                <div className="w-full text-center">
                    <p className="text-gray-400 font-semibold text-lg">No available stays</p>
                </div>
                :
                <PostsSection staysData={limitPosts()} loading={loading} />
            }
        </div>
    )
}

export default Main