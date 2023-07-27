import { useEffect, useState } from "react"
import PostsSection, { stayType } from "./PostsSection"


function Main() {
    const [loading, setLoading] = useState(false)
    const [errorLoad, setErrorLoad] = useState(false)
    const [staysData, setStaysData] = useState<stayType[]>([])
    const [displayAll, setDisplayAll] = useState(false)

    useEffect(() => {
        setLoading(true)
        setErrorLoad(false)
        fetch("/api/stays")
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error("failed to load data");
                }
            })
            .then(data => {
                setLoading(false)
                setStaysData(data)
            })
            .catch(err => {
                console.log(err.message);
                setLoading(false)
                setErrorLoad(true)
            })
    }, [])

    const limitPosts = () => {
        if (displayAll) return staysData

        let list: stayType[] = []
        for (let i = 0; i < staysData.length; i++) {
            if (i < 6) {
                const post = staysData[i];
                list.push(post)
            } else {
                return list
            }
        }
    }


    return (
        <div className="flex flex-col items-center">
            <div className="flex w-full items-center">
                <h1 className="text-2xl font-bold text-gray-700">Stays in Finland</h1>
                {!displayAll && staysData.length > 6 && <p onClick={() => setDisplayAll(true)} className="text-sm font-medium ml-auto cursor-pointer">{staysData.length - 6}+ stays</p>}
            </div>
            <PostsSection staysData={limitPosts()} loading={loading} errorLoad={errorLoad} />
        </div>
    )
}

export default Main