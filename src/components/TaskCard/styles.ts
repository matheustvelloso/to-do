import { StyleSheet } from "react-native"
import { themes } from "../../../themes"

export const styles = (isChecked?: boolean) => {

    return StyleSheet.create({
        taskContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 24,
            marginBottom: 8,
            padding: 20,
            backgroundColor: themes.base["gray-500"],
            borderRadius: 8,
            borderWidth: 1,
            borderColor: themes.base["gray-400"],
        },

        taskName: {
            color: themes.base["gray-100"],
            textAlign: "center",
            textDecorationLine: isChecked ? "line-through" : "none"
        },

        checkBox: {
            borderRadius: 10,
        }
    })
}