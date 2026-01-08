import styles from './styles.module.css'
import {useTaskContext} from "../../contexts/TaskContext";
import {getNextCycle} from "../../utils/getNextCycles.ts";
import {getCycleType} from "../../utils/getCycleType.ts";

export function Cycles() {
    const { state } = useTaskContext();
    const cycleStep = Array.from({length: state.currentCycle});
    const cycleDescriptionMap = {
        workTime: 'foco',
        shortBreakTime: 'desanso curto',
        longBreakTime: 'desanso longo'
    }

    return (
        <div className={styles.cycles}>
            <span>Ciclos:</span>

            <div className={styles.cycleDots}>
                {cycleStep.map((_, index) => {
                    const nextCycle = getNextCycle(index);
                    const cycleType = getCycleType(nextCycle)
                    return (
                        <span className={`${styles.cycleDot} ${styles[cycleType]}`}
                              key={nextCycle}
                              title={'Indicador de ciclo: ' + cycleDescriptionMap[cycleType]}
                        ></span>
                    )
                })}
            </div>
        </div>
    );
}