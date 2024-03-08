import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { mens , women,Electronics } from "../../components/Products";

export const fetchproduct = createAsyncThunk("Productslice/fetchproduct" ,async()=>{
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;
})

export const fetchproductID = createAsyncThunk("Productslice/fetchproduct" ,async(ID)=>{
    const res = await fetch(`https://fakestoreapi.com/products/${ID}`)
    const data = await res.json();
    return data;
})


export const fetchCatProduct = createAsyncThunk("Productslice/fetchproduct" ,async(cat)=>{
    const res = await fetch(`https://fakestoreapi.com/products/category/${cat}`)
    const data = await res.json();
    return data;
})


const Productslice = createSlice({

    initialState:[],
    name:"Productslice",
    reducers:{},
    extraReducers : (builder)=>{
        builder.addCase(fetchproduct.fulfilled , (state,action)=>{
            return action.payload;
        })
    } ,
    extraReducers : (builder)=>{
        builder.addCase(fetchCatProduct.fulfilled , (state,action)=>{
            return action.payload;
        })
    },
    extraReducers : (builder)=>{
        builder.addCase(fetchproductID.fulfilled , (state,action)=>{
            return action.payload;
        })
    },

})
export const {} = Productslice.actions;
export default Productslice.reducer;