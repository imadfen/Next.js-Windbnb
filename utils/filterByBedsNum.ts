interface dataType {
    maxGuests: number,
    [key: string]: any
}

interface filterType {
    adults: number,
    children: number
}

export default function filterByBedsNum(data: dataType[], filter: filterType) {
    let newList: dataType[] = []

    if (filter.adults + filter.children == 0) return data

    for (let i = 0; i < data.length; i++) {
        const elem = data[i];
        if (elem.maxGuests >= filter.adults + filter.children) {
            newList.push(elem)
        }
    }

    return newList
}