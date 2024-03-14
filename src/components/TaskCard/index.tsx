import { memo, useCallback, useState } from "react"
import { Text, TouchableOpacity, View, } from "react-native"
import Icon from "react-native-vector-icons/EvilIcons"
import { styles } from "./styles"
import { themes } from "../../../themes"
import Checkbox from "expo-checkbox"
import { TaskType } from "../../../types"

interface ITaskCardProps {
    taskName: string
    handleRemoveTask: (checked?: boolean) => void
    completedTasks: number
    setCompletedTasks: React.Dispatch<React.SetStateAction<number>>
    creadtedTasks: number
    setCreadtedTasks: React.Dispatch<React.SetStateAction<number>>
    setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>
}

const TaskCard: React.FC<ITaskCardProps> = ({
    taskName,
    handleRemoveTask,
    completedTasks,
    setCompletedTasks,
    creadtedTasks,
    setCreadtedTasks,
    setTasks
}) => {

    const [checked, setChecked] = useState(false)
    const handleCompletedTask = useCallback(() => {

        !checked ? setCompletedTasks(++completedTasks) : setCompletedTasks(--completedTasks)
        !checked ? setCreadtedTasks(--creadtedTasks) : setCreadtedTasks(++creadtedTasks)
        setTasks(prevState => prevState.map((taskItem => {
            if (taskItem.name === taskName) {
                return { ...taskItem, isCompleted: !checked };
            }
            return taskItem;
        })))

    }, [completedTasks, creadtedTasks, checked])

    return (
        <View style={styles().taskContainer}>
            <Checkbox
                style={styles(checked).checkBox}
                value={checked}
                onValueChange={() => {
                    handleCompletedTask()
                    setChecked(!checked)
                }}
                onChange={handleCompletedTask}
                color={checked ? themes.product["purple-dark"] : undefined}
            />
            <Text style={styles(checked).taskName}>{taskName}</Text>
            <TouchableOpacity onPress={() => handleRemoveTask(checked)}>
                <Icon name="trash" size={20} color={themes.base["gray-300"]} />
            </TouchableOpacity>
        </View>
    )
}

export default memo(TaskCard)