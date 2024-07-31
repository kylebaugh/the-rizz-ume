

const initialState = {
    userId: null
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case "setUser":
            return {
                ...state, 
                userId: action.payload
            }
    }

}

export default reducer