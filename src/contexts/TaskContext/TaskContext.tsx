import {createContext} from "react";
import * as React from "react";
import type {TaskStateModel} from "../../models/TaskStateModel.ts";
import {initialTaskState} from "./initialTaskState.ts";

type TaskContextProps = {
    state: TaskStateModel;
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
}

const initialContextValue = {
    state: initialTaskState,
    setState: () => {}
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
