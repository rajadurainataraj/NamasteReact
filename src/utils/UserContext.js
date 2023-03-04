import { createContext } from "react";

const userContext = createContext({
    user: {
        userName: "rajadurainataraj",
        password: "12345"
    }
})

export default userContext