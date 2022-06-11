import { CourseItem } from "../stores/course/course.model";
import { CourseActionType, CourseAction } from "../actions/course/course.action";


//==============[Create Dummy Init Value]==================
const initState: Array<CourseItem> = [
    { id: '1', department: 'Computer Science', name: 'C Programming' }
]

//==============[Export Reducer Function]==================
export function CourseReducer(
    state: Array<CourseItem> = initState,
    action: CourseAction
) {
    switch (action.type) {
        case CourseActionType.ADD_ITEM:
            return [...state, action.payload];
        default:
            return state;
    }
}
