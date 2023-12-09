import { Dimensions } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import {
    widthPercentageToDP as wp
    , heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('window');
const COLORS = {

    black: "#000",
    white: "#FFFFFF",
    white_gray: "#aaa",
    green_light: "#EDF7EA",
    green_mid: "#7DBB69",
    green: "#619902",
    yellow_light: "#FEC300",
    background_confirm_page: "#FEEDB5BA",
    min_button: "#FEE181",
    gray_light: "#00000029",
    gray_mid: "#635B5B",
    gray_white: "#AAA",
    gray_dark: "#707070",
    bodrer_color: "#7070703A",
    gray_ofwhite: "#949292",
    text_color: "#AAAAAA",
    text_input_border: '#0000001F',
    background_button_music: "#ffd396",
    button: "#EB9928",
    black_mid: "#000000D6",
    black_light: "#000000DE",
    eye_color: "#00000099",
    yellow: "#FEEDB5BA",
    red_logout: "#FC0909",

    /////////ice cream and sweets colors/////////

    backgroundColorIceORbuttomcolor: "#E8B9B5",
    TrybackgroundColorIce1 :"#F0CAC7",
    TrybackgroundColorIce2 :"#d8a49f",
    TrybackgroundColorIce3 :"#ece6e6",
    backgroundBottonofflatlist:"#f3e8e9",
    TextColor:"#f8f9fa",
    Button_color:"#decac5",
    Text_on_button:"#a57079",
    TextColorName : "#35363b",
    Top_Flavour_Name:"#605c60" ,
    Detalis_product_name :"#c89680",
    priceindetailspage : "#dd9f97",
    color_addtocartButtom : "#c57e55",
    plusbottonColor:"#e1acab",
    minusbotooncolor:"#e0dfe1"
}

const FONT = {
    font_in_black_noto: "NotoSansArabic-Black",
    font_bold_noto: "NotoSansArabic-Bold",
    font_extra_bold_noto: "NotoSansArabic-ExtraBold",
    font_ExtraLight_noto: "NotoSansArabic-ExtraLight",
    font_Light_noto: "NotoSansArabic-Light",
    font_Medium_noto: "NotoSansArabic-Medium",
    font_Regular_noto: "NotoSansArabic-Regular",
    font_SemiBold_noto: "NotoSansArabic-SemiBold",
    font_Thin_noto: "NotoSansArabic-Thin",
    ////////////another font  ALmarai/////////////

    font_Almarai_Bold: "Almarai-Bold",
    font_Almarai_ExtraBold: "Almarai-ExtraBold",
    font_Almarai_Light: "Almarai-Light",
    font_Almarai_Regular: "Almarai-Regular",

    /////////ice cream and sweets Fonts/////////

    Quicksand_VariableFont_wght :"Quicksand_VariableFont_wght",
    Quicksand_Bold:"Quicksand-Bold",
    Quicksand_Light:"Quicksand-Light",
    Quicksand_Medium :"Quicksand-Medium",
    Quicksand_Regular :"Quicksand-Regular",
    Quicksand_SemiBold :"Quicksand-SemiBold"
};

const Sizes = {
    width,
    height,
}

export {
    COLORS,
    FONT,
    Sizes,
    hp,
    wp
}