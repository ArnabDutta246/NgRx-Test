export interface CourseItem {
    id: string;
    department: string;
    name: string;
}

export interface State {
    readonly courses: Array<CourseItem>
}