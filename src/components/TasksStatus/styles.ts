import { StyleSheet } from "react-native";
import { themes } from "../../../themes";

export const styles = (color?: string) => {

    switch (color) {
        case 'blue-dark':
            color = themes.product[color];
            break;
        case 'blue':
            color = themes.product[color];
            break;
        case 'purple-dark':
            color = themes.product[color];
            break;
        case 'purple':
            color = themes.product[color];
            break;
        case 'gray-700':
            color = themes.base[color];
            break;
        case 'gray-600':
            color = themes.base[color];
            break;
        case 'gray-500':
            color = themes.base[color];
            break;
        case 'gray-400':
            color = themes.base[color];
            break;
        case 'gray-300':
            color = themes.base[color];
            break;
        case 'gray-200':
            color = themes.base[color];
            break;
        case 'gray-100':
            color = themes.base[color];
            break;
        default:
            color = themes.feedback.danger;
            break;
    }

    return StyleSheet.create({
        statusContainer: {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
        },

        titleColor: {
            color: color,
        },

        quantityLength: {
            width: 25,
            color: themes.base["gray-100"],
            backgroundColor: themes.base["gray-400"],
            textAlign: "center",
            borderRadius: 10,
            marginLeft: 10,
        },

    })
}
