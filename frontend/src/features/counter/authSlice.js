// import { createSlice ,createAsyncThunk} from '@reduxjs/toolkit';
// import { authService } from './authAPI';
// import { toast } from 'react-toastify';




// export const registerUser = createAsyncThunk("api/v1/user/register",async(userData,thunkAPI)=>{
//       try {
//          return await  authService.register(userData) 
//       } catch (error) {
//           return thunkAPI.rejectWithValue(error)
//       }
// })

// export const loginUser = createAsyncThunk("api/v1/user/login",async(userData,thunkAPI)=>{
//   try {
//      return await  authService.login(userData) 
//   } catch (error) {
//       return thunkAPI.rejectWithValue(error)
//   }
// })

// export const logoutUser = createAsyncThunk("api/v1/user/logout",async(userData,thunkAPI)=>{
//   try {
   
//     await authService.logout(userData);
    
//     // localStorage.removeItem("token");
//     return {}; 
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error);
//   }
// })

// const initialState = {
//   user:"",
//   isError:false,
//   isSuccess:false,
//   isLoading:false,
//   message:""
// }

// export const authSlice = createSlice({
//   name:"auth",
//   initialState:initialState,
//   reducers:{},
//   extraReducers:(builder) => {
//       builder
//       .addCase(registerUser.pending,(state)=>{
//           state.isLoading = true
//       }).addCase(registerUser.fulfilled,(state,action) => {
//           state.isLoading = false
//           state.isError = false
//           state.isSuccess = true
//           state.createdUser = action.payload
//           if(state.isSuccess === true){
//             toast.info("user register successfully")
           
           
//           }
//       }).addCase(registerUser.rejected,(state,action) => {
//         state.isLoading = false
//         state.isError = true
//         state.isSuccess = false
//         state.message = action.error
//         if(state.isError === true){
//           toast.error(action.payload.response.data.message)
//         }
        
//       })
//       .addCase(loginUser.pending,(state)=>{
//         state.isLoading = true
//     }).addCase(loginUser.fulfilled,(state,action) => {
//         state.isLoading = false
//         state.isError = false
//         state.isSuccess = true
//         state.user = action.payload
//         if(state.isSuccess === true){
//           localStorage.setItem("token",action.payload.token)
//           toast.info("User Logged In successfully")
//         }
//     }).addCase(loginUser.rejected,(state,action) => {
//       state.isLoading = false
//       state.isError = true
//       state.isSuccess = false
//       state.message = action.error
//       if(state.isError === true){
//         toast.error(action.payload.response.data.message)
//       }
    
//     }).addCase(logoutUser.pending,(state)=>{
//       state.isLoading = true
//   }).addCase(logoutUser.fulfilled,(state,action) => {
//       state.isLoading = false
//       state.isError = false
//       state.isSuccess = true
//       state.user = action.payload
//       if(state.isSuccess === true){
//         localStorage.removeItem("token")
//         toast.info("User Logged out successfully")
//       }
//   }).addCase(logoutUser.rejected,(state,action) => {
//     state.isLoading = false
//     state.isError = true
//     state.isSuccess = false
//     if (action.payload) {
       
//       const errorMessage =  "Something Went Wrong";
      
//       state.message = errorMessage;
//     if(state.isError === true){
//       toast.error(errorMessage)
//     }
//   }
//   })
//   }
// })

// export default authSlice.reducer