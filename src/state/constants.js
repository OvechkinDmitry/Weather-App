const id = "21686de17220a1b3bc4c70e1e6d64a12";
export const  getURL = (lat,lon) =>
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat.trim()}&lon=${lon.trim()}&units=metric&appid=${id}&lang=ru`;
export const getImgURL = (name) => `https://openweathermap.org/img/w/${name}.png`;