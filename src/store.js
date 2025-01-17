import { create } from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
    loader:true,
    isLoggedIn:false,
    boards:[],
    areBoardsFetched:false,
    setBoards: boards => set({boards, areBoardsFetched:true},false,"setBoards"),
    setLoginStatus: (status) => 
    set({
        isLoggedIn:status,
        loader:false
    }, false, "setLoginStatus"),
});

const useStore = create(devtools(store));

export default useStore;