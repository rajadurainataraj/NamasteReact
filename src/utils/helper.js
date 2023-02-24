export function filter(searchData, apiData) {
    if (searchData === '') {
        return apiData
    } else {
        let filterData = apiData.filter(item => {
            return item.data.name.toLowerCase().includes(searchData.toLowerCase())
        })
        console.log(filterData, "rest")
        return filterData
    }
}
