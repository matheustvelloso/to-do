import { memo, useCallback, useState } from "react"
import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import Icon from "react-native-vector-icons/AntDesign"
import { themes } from "../../../themes"
import TasksStatus from "../../components/TasksStatus"
import TaskCard from "../../components/TaskCard"
import { TaskType } from "../../../types"


const Home: React.FC = () => {

    const [taskName, setTaskName] = useState('')
    const [tasks, setTasks] = useState<TaskType[]>([])
    const [completedTasks, setCompletedTasks] = useState(0)
    const [createdTasks, setCreatedTasks] = useState(0)

    const handleCreateTask = useCallback(() => {
        if (taskName.length !== 0)
            if (tasks.some(({ name }) => name.toLowerCase() === taskName.toLowerCase())) {
                Alert.alert('Tarefa existe', 'Já existe uma tarefa com esse nome')
                setTaskName('')
            } else {
                setTasks(prevState => [...prevState, { name: taskName, isCompleted: false }])
                setCreatedTasks(prevState => prevState + 1)
                setTaskName('')
            }
    }, [taskName])

    const handleRemoveTask = useCallback((taskName: string, isCompleted: boolean) => {
        Alert.alert("Remover", "Deseja remover esta tarefa?", [
            {
                text: "Sim",
                onPress: () => {
                    setTasks(prevState => prevState.filter(({ name }) => name !== taskName))
                    isCompleted
                        ?
                        setCompletedTasks(prevState => prevState - 1)
                        :
                        setCreatedTasks(prevState => prevState - 1)
                }
            },
            {
                text: "Não",
                style: "cancel"
            }
        ])
    }, [createdTasks, completedTasks])

    return (
        <View style={styles.body}>

            <View style={styles.logoContainer}>
                <Image
                    source={require('../../../assets/rocket.png')}
                    style={{ marginRight: 12 }}
                />
                <Image
                    source={require('../../../assets/to.png')}
                    style={{ marginRight: 2 }}
                />
                <Image source={require('../../../assets/do.png')} />
            </View>


            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor={themes.base["gray-300"]}
                    onChangeText={setTaskName}
                    value={taskName}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleCreateTask}
                >
                    <Icon name="pluscircleo" size={16} color={themes.base["gray-100"]} />
                </TouchableOpacity>
            </View>

            <View style={styles.tasksStatusContainer}>
                <TasksStatus
                    title="Criadas"
                    color="blue"
                    quantity={createdTasks}
                />
                <TasksStatus
                    title="Concluídas"
                    color="purple-dark"
                    quantity={completedTasks}

                />
            </View>

            {tasks &&
                <FlatList
                    data={tasks}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => (
                        <TaskCard
                            taskName={item.name}
                            handleRemoveTask={() => handleRemoveTask(item.name, item.isCompleted)}
                            completedTasks={completedTasks}
                            setCompletedTasks={setCompletedTasks}
                            creadtedTasks={createdTasks}
                            setCreadtedTasks={setCreatedTasks}
                            setTasks={setTasks}
                        />

                    )}

                    ListEmptyComponent={() => (
                        <View style={styles.taskListContainer}>
                            <Image source={require('../../../assets/clipboard.png')} />
                            <View style={{ marginVertical: 14 }}>
                                <Text style={styles.textBold}>Você ainda não tem tarefas cadastradas</Text>
                                <Text style={styles.textRegular}>Crie tarefas e organize seus itens a fazer</Text>
                            </View>
                        </View>
                    )}
                />
            }

        </View>
    )
}

export default memo(Home)