const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "./CartSlice";
import counterReducer from "./CounterSlice";

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
        count: counterReducer,
        // user: userReducer
    }
});

export default appStore;