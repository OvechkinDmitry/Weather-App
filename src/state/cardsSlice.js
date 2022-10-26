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
        const {name, main} = data;
        console.log(name)
        const deg = main?.temp.toFixed();
        dispatch(addCard({name,deg}))
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