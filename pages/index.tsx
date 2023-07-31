import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'
import { stayType } from "../components/Post";
import filterByBedsNum from '../utils/filterByBedsNum';

export default function Home() {
	const [loading, setLoading] = useState(false)
	const [errorLoad, setErrorLoad] = useState(false)
	const [staysData, setStaysData] = useState<stayType[]>([])
	const guestsFilter = useState({ adults: 0, children: 0 })

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = (filter?: boolean) => {
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
				setStaysData(filter ? filterByBedsNum(data, guestsFilter[0]) : data)
			})
			.catch(err => {
				console.log(err.message);
				setLoading(false)
				setErrorLoad(true)
			})
	}

	const handleFilter = () => {
		fetchData(true)
	}

	return (
		<div className="w-full h-screen flex flex-col items-center px-1 sm:px-5 md:px-10">
			<Header guestsFilter={guestsFilter} handleFilter={handleFilter} />
			<Main staysData={staysData} loading={loading} errorLoad={errorLoad} />
			<Footer />
		</div>
	)
}
