import { StyleSheet } from "react-native";
import { themes } from "../../../themes";

export const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: themes.base["gray-600"],
    },

    logoContainer: {
        height: "23%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: themes.base["gray-700"],
    },

    form: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -30,
        marginHorizontal: 24
    },

    input: {
        flex: 1,
        backgroundColor: themes.base["gray-500"],
        color: themes.base["gray-100"],
        height: 52,
        borderRadius: 5,
        padding: 16,
        marginRight: 12,
        fontSize: 16,
        borderWidth: 1,
        borderColor: themes.base["gray-700"],
    },

    button: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: themes.product["blue-dark"],
        height: 52,
        width: 52,
        borderRadius: 5,
    },

    tasksStatusContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 24,
        marginHorizontal: 24,
        paddingBottom: 24,
        borderTopColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: themes.base["gray-400"],
        borderWidth: 1,
    },

    textBold: {
        fontWeight: 'bold',
        color: themes.base["gray-300"],
        textAlign: "center",
        fontSize: 14.5,
    },

    textRegular: {
        color: themes.base["gray-300"],
        textAlign: "center",
    },

    taskListContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 24,
    }
})