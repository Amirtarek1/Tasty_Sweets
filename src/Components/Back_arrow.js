import { TouchableOpacity, StyleSheet, Dimensions, View } from 'react-native'
import { RFPercentage } from "react-native-responsive-fontsize";
import { COLORS } from '../constants/index';
import BACKWithoutArrow from "../../src/assets/Icons/BACKWithoutArrow.svg"
import { hp, wp } from '../constants/themes';

const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width

const Back_arrow = ({ onPress }) => {
    // BACKWithoutArrow

    return (
        <>


            <TouchableOpacity style={[styles.shadowProp,  styles.button_touchableopacity]} onPress={onPress} >
                
                    <BACKWithoutArrow height={RFPercentage(4)} width={RFPercentage(4)} />
                
            </TouchableOpacity>


        </>
    )
}
const styles = StyleSheet.create({


    button_touchableopacity:
    {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.white,
        alignSelf: "center",
        paddingVertical: RFPercentage(0.3),
        paddingHorizontal:RFPercentage(0.3),
        borderRadius: RFPercentage(3),

    }, shadowProp: {
        shadowOffset: { width: 10, height: 14 },
        shadowColor: COLORS.black,
        elevation: 3,
        shadowOpacity: .5,
    },

})

export default Back_arrow;