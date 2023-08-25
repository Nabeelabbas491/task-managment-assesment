export class AppConstants {

    public static TasksStatusList = ['Completed', "In Complete", "Pending", "In Progress", "Ready for Review"]
}

export interface Task {
    id: number,
    title: string,
    description: string,
    status: string
}
