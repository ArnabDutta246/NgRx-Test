import { Action } from '@ngrx/store';
import { CourseItem } from '../../stores/course/course.model';

/* ===================All Actions Name ========================== */

export enum CourseActionType {
    ADD_ITEM = "[COURSE] Add Course"
}

/* =================== All Actions Class ========================== */

// Add Class 
export class AddCourseActions implements Action {
    readonly type = CourseActionType.ADD_ITEM;
    constructor(public payload: CourseItem) { }
}

/* =================== All Actions Class Export ========================== */