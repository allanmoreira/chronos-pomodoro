import {useState} from "react";
import {TaskContext} from "./TaskContext.tsx";
import type {TaskStateModel} from "../../models/TaskStateModel.ts";
import {initialTaskState} from "./initialTaskState.ts";

type TaskContextProviderProps = {
    children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
    const [state, setState] = useState<TaskStateModel>(initialTaskState);

    return (
        <TaskContext.Provider value={{ state, setState }}>
            {children}
        </TaskContext.Provider>
    );
}