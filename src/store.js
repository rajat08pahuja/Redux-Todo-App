import { createStore } from "redux";
import uuid from "react-uuid";

let initialState = {
    tasksArr: []
}

function tasksArrReducer(state = initialState, action) {
    switch (action.type) {
        case "insert_task":
            let newTasksArr = [...state.tasksArr];
            newTasksArr.push({ task: action.payload, id: uuid() });
            return ({
                tasksArr: newTasksArr
            })
        case "delete_task":
            let id = action.payload;
            let newArr = state.tasksArr.filter((taskObj) => {
                return taskObj.id != id;
            })
            return ({
                tasksArr: newArr
            })
        default:
            return state;
    }
}

const store = createStore(tasksArrReducer);

export default store;