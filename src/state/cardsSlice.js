import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
export const searchWetaher = createAsyncThunk(
    'cards/searchWetaher',
      async function ({lat,lon},{rejectWithValue, dispatch}){
        console.log("работаю...")
        let id = "21686de17220a1b3bc4c70e1e6d64a12";
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat.trim()}&lon=${lon.trim()}&units=metric&appid=${id}&lang=ru`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        const {name, main,visibility,weather,sys,wind} = data;
        const country = sys?.country;
        const weatherDescription = weather[0].description;
        const imgUrl = `http://openweathermap.org/img/w/${weather[0].icon}.png`;
        console.log(imgUrl)
        const feelsLike = main?.feels_like.toFixed();
        const humidity = main?.humidity.toFixed();
        const windSpeed = wind?.speed;
        const deg = main?.temp.toFixed();
        console.log(name,deg,visibility,feelsLike,humidity,weatherDescription,country,windSpeed)
        dispatch(addCard({name,deg,visibility,feelsLike,humidity,weatherDescription,country,windSpeed,imgUrl}))
    },
)

const cardsSlice = createSlice({
    name: "cards",
    initialState:{
        cards:[],
    },
    reducers:{//набор методов которые я захочу использовать
              addCard(state, action){//здесь не нужно переписывать стэйт целиком
              state.cards.unshift(
                  {
                      id: new Date().toISOString(),
                      title : action.payload.name ? action.payload.name : "Unknown City" ,
                      deg : action.payload.deg,
                      country : action.payload.country ? action.payload.country : "Unknown country" ,
                      feelsLike : action.payload.feelsLike,
                      humidity : action.payload.humidity,
                      weatherDescription : action.payload.weatherDescription,
                      visibility: action.payload.visibility,
                      windSpeed: action.payload.windSpeed,
                      imgUrl: action.payload.imgUrl,
                  })
          },
          deleteCard(state, action){
              let id = action.payload.id
              state.cards = state.cards.filter((item)=> item.id !== id)
          },
    },
    extraReducers:{
        [searchWetaher.pending] : (state, action) => {},
        [searchWetaher.fulfilled] : (state, action) => {},
        [searchWetaher.rejected] : (state, action) => {},
    }
})

export const {addCard, deleteCard} = cardsSlice.actions;
export default cardsSlice.reducer;