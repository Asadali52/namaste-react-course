import { createContext } from "react";

const MyUserContext = createContext({
    loggedInUser: "Default User",
})

export default MyUserContext;