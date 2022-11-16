// reducers/counter.js
export const INCRESE = "COUNT/INCRESE";

export const increseCount = count => ({ type: INCRESE, count });

const initalState = {
    count: 0
};

const counter = (state = initalState, action) => {
    switch (action.type) {
        case INCRESE:
            return {
                ...state,
                count: action.count
            };

        default: // default를 쓰지 않으면 state에 count 값이 undefined가 나옴 꼭 들어가야함
        return state;
    }
};
