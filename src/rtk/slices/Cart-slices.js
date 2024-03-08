import { createSlice } from "@reduxjs/toolkit"

const Cart_slices = createSlice({

    initialState:[],
    name:"Cart-slices",
    reducers:{

        Addproduct:(state,action)=>{
            const finded_product = state.find((product) => product.id === action.payload.id);
            if(finded_product){
                finded_product.quantity+=1;
            } else{
                const clone = {...action.payload , quantity:1 };
                state.push(clone);
            }
                
        },
        Removeproduct: (state,action)=>{

            return state.filter((product)=> product.id !=action.payload.id );
        },
        Clearproducts:()=>{
            return [];
        }
    }
})
export const {Addproduct ,Removeproduct , Clearproducts} = Cart_slices.actions;
export default Cart_slices.reducer;