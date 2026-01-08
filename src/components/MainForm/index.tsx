import {DefaultInput} from "../DefaultInput";
import {Cycles} from "../Cycles";
import {DefaultButton} from "../DefaultButton";
import {PlayCircleIcon} from "lucide-react";
import {useRef} from "react";
import type {TaskModel} from "../../models/TaskModel.ts";
import {useTaskContext} from "../../contexts/TaskContext";
import {getNextCycle} from "../../utils/getNextCycles.ts";
import {getCycleType} from "../../utils/getCycleType.ts";
import {formatSecondsToMinutes} from "../../utils/formatSecondsToMinutes.ts";

export function MainForm() {

    const { state, setState } = useTaskContext();
    const  taskInputName = useRef<HTMLInputElement>(null);

    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getCycleType(nextCycle);

    function handleCreateNewTask(event: React.FormEvent) {
        event.preventDefault();

        if(taskInputName.current == null)
            return;

        const taskName = taskInputName.current.value.trim();

        if(!taskName) {
            alert('Insira o nome da task');
            return;
        }

        const newTask:TaskModel = {
            id: Date.now().toString(),
            name: taskName,
            startDate: Date.now(),
            completeDate: null,
            interruptDate: null,
            duration: state.config[nextCycleType],
            type: nextCycleType
        }

        const secondsRemaining = newTask.duration * 60;

        setState((prevState) => ({
            ...prevState,
            activeTask: newTask,
            currentCycle: nextCycle,
            secondsRemaining,
            formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
            tasks: [...prevState.tasks, newTask]
        }));
    }

    return (
        <form className='form' onSubmit={handleCreateNewTask}>
            <div className='formRow'>
                <DefaultInput id="meuInput"
                              type="text"
                              label="task"
                              title="titulo"
                              alt="texto alt"
                              placeholder="Informe o nome da task"
                              ref={taskInputName}
                />
            </div>
            <div className='formRow'>
                <p>
                    Lorem ipsum dolor sit amet.
                </p>
            </div>
            {state.currentCycle > 0 && (
                <div className='formRow'>
                    <Cycles/>
                </div>
            )}
            <div className='formRow'>
                <DefaultButton icon={<PlayCircleIcon/>}/>
            </div>
        </form>
    );
}