import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {getImgURL, getURL} from "./constants";
export const searchWetaher = createAsyncThunk('cards/searchWetaher',
      async function ({lat,lon},{rejectWithValue, dispatch}){
          try{
              const response = await fetch(getURL(lat, lon));
              if(!response.ok)
                  throw new Error("SERVER ERROR");
              const data = await response.json();
              const {name, main, visibility, weather, sys, wind} = data;
              const country = sys?.country;
              const weatherDescription = weather[0].description;
              const imgUrl = getImgURL(weather[0].icon)
              const feelsLike = main?.feels_like.toFixed();
              const humidity = main?.humidity.toFixed();
              const windSpeed = wind?.speed;
              const deg = main?.temp.toFixed();
              dispatch(addCard({
                  name, deg, visibility, feelsLike, humidity
                  , weatherDescription, country, windSpeed, imgUrl, lat, lon
              }))
          }
          catch(error){
              return rejectWithValue(error.message)
          }
    },
)

const cardsSlice = createSlice({
    name: "cards",
    initialState:{
        cards:[],
        status: null,
        error: null,
    },
    reducers:{//набор методов которые я захочу использовать
              addCard(state, action){//здесь не нужно переписывать стэйт целиком
              state.cards.unshift(
                  {
                      id: new Date().toISOString(),
                      title : action.payload.name ? action.payload.name : "Без имени" ,
                      deg : action.payload.deg,
                      country : action.payload.country ? action.payload.country : "" ,
                      feelsLike : action.payload.feelsLike,
                      humidity : action.payload.humidity,
                      weatherDescription : action.payload.weatherDescription,
                      visibility: action.payload.visibility,
                      windSpeed: action.payload.windSpeed,
                      imgUrl: action.payload.imgUrl,
                      lat: action.payload.lat,
                      lon: action.payload.lon,
                  })
          },
          deleteCard(state, action){
              let id = action.payload.id
              state.cards = state.cards.filter((item)=> item.id !== id)
          },
    },
    extraReducers:{
        [searchWetaher.pending] : (state, action) => {
            state.status = "loading"
            state.error = null
        },
        [searchWetaher.fulfilled] : (state, action) => {
            state.status = "resolved"
            state.error = action.payload
        },
        [searchWetaher.rejected] : (state, action) => {
            state.status = "rejected"
            state.error = action.payload
        },
    }
})

export const {addCard, deleteCard} = cardsSlice.actions;
export default cardsSlice.reducer;