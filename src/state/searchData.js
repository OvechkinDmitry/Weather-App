async function searchData(lat,lon) {
    let id = "21686de17220a1b3bc4c70e1e6d64a12";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${id}&lang=ru`;
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return {
        title: data?.name,
        deg: data.main?.temp.toFixed(),
    }
}