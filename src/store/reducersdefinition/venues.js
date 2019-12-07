const initialState = {
    venues: [
        {
            "KFC": {
                "cuasine": "American",
                "rating": 2,
            }
        },
    ]
}

export default function venues(state = initialState, action) {
    switch (action.type) {
        case "GET_VENUES":
            return [...state, action.payload]
        default:
            return state;
    }

}