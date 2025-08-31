import { BatteryVerticalFullIcon, BluetoothIcon, CellSignalFullIcon } from "phosphor-react-native";
import { StyleSheet, Text, View } from "react-native";

export default function FirstPage() {
    return(
       <View>
        <View style={styles.header}>
            <Text>14:39</Text>
            <View style={styles.headerLeft}>
                <BluetoothIcon size={16} />
                <CellSignalFullIcon size={16} />
                <BatteryVerticalFullIcon size={16} />
            </View>
        </View>
        <View></View>
        <View></View>
        <View></View>
        <View></View>
        <View></View>
       </View>
           
    )
}

const styles=StyleSheet.create({
    header: {
        marginTop: 40,
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    headerLeft: {
        flexDirection: "row",
        gap: 5
    }
})