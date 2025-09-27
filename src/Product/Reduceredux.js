// Reduceredux.js
function Reduceredux(state = { count: 0 }, action) {
    switch(action.type) {
        case "INCRE":
            return { count: state.count + 1 };
        case "DECRE":
            return { count: state.count - 1 };
        case "RESET":
            return { count: 0 };
        default:
            return state;
    }
}
export default Reduceredux;
