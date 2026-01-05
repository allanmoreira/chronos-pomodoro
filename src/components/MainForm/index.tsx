import {DefaultInput} from "../DefaultInput";
import {Cycles} from "../Cycles";
import {DefaultButton} from "../DefaultButton";
import {PlayCircleIcon} from "lucide-react";
import {useState} from "react";

export function MainForm() {

    const  [taskName, setTaskName] = useState("");

    function handleCreateNewTask(event: React.FormEvent) {
        event.preventDefault();
        console.log(taskName);
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
                              value={taskName}
                              onChange={e => setTaskName(e.target.value)}
                />
            </div>
            <div className='formRow'>
                <p>
                    Lorem ipsum dolor sit amet.
                </p>
            </div>
            <div className='formRow'>
                <Cycles/>
            </div>
            <div className='formRow'>
                <DefaultButton icon={<PlayCircleIcon/>}/>
            </div>
        </form>
    );
}