import { Text, View } from "react-native"
import { styles } from "./styles"
import { memo } from "react"


interface ITasksStatusProps {
    color: string,
    title: string,
    quantity: number,

}

const TasksStatus: React.FC<ITasksStatusProps> = ({ color, title, quantity }) => {
    return (
        <View style={styles().statusContainer}>
            <Text style={styles(color).titleColor}>
                {title}
            </Text>
            <Text style={styles().quantityLength}>
                {quantity}
            </Text>
        </View>
    )
}

export default memo(TasksStatus)