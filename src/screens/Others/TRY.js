
// import React, { useEffect, useState } from 'react';
// import { Dimensions, ImageBackground, StyleSheet, Text, TextInput, ScrollView, TouchableOpacity, View } from 'react-native';
// import { RFPercentage } from 'react-native-responsive-fontsize';
// import { COLORS, FONT } from '../../constants';


// const TRY = () => {
//     const h = Dimensions.get('screen').height;
//     const w = Dimensions.get('screen').width;

//     const [state, setstate] = useState('');
//     useEffect(() => {
//         const handleOrientationChange = () => {
//             const isPortrait = Dimensions.get('window').height > Dimensions.get('window').width;
//             setInputWidth(isPortrait ? w * 0.9 : h * 0.9);
//             setInputHeight(isPortrait ? w * 1 : h * 2);
//         };

//         handleOrientationChange();

//         Dimensions.addEventListener('change', handleOrientationChange);

//         return () => {
//             Dimensions.removeEventListener('change', handleOrientationChange);
//         };
//     }, []);
    
//     const [inputWidth, setInputWidth] = useState(0);
//     const [inputHeight, setInputHeight] = useState(0);


//     console.log(Dimensions.get('window').height ,"==> height")
//     console.log(Dimensions.get('window').width ,"==> width")

//    //dsasd


//     return (
//         <>
//             <TextInput
//                 style={{
//                     marginTop: RFPercentage(1.5),
//                     height: inputHeight,
//                     width: inputWidth,
//                     // width: orientation === 'portrait' ? w * 0.43 : h * 0.43,
//                     borderRadius: RFPercentage(0.5),
//                     backgroundColor: COLORS.TrybackgroundColorIce1,
//                     paddingHorizontal: 15,
//                     fontFamily: FONT.Quicksand_Regular,
//                     fontSize: RFPercentage(2.1),
//                     color: COLORS.TextColorName,
//                 }}
//                 placeholder="state"
//                 value={state}
//                 onChangeText={value => {
//                     setstate(value);
//                 }}
//             />


//         </>
//     );
// };

// export default TRY;
// import React, { useEffect, useState } from 'react';
// import { Dimensions, TextInput } from 'react-native';
// import { RFPercentage } from 'react-native-responsive-fontsize';
// import { COLORS, FONT } from '../../constants';

// const TRY = () => {
//     const h = Dimensions.get('screen').height;
//     const w = Dimensions.get('screen').width;

//     const [inputWidth, setInputWidth] = useState(0);
//     const [inputHeight, setInputHeight] = useState(0);
//     const [state, setstate] = useState('');

//     useEffect(() => {
//         const handleOrientationChange = () => {
//             const isPortrait = Dimensions.get('window').height > Dimensions.get('window').width;
//             setInputWidth(isPortrait ? w * 0.9 : h * 0.9);
//             setInputHeight(isPortrait ? w * 0.5 : h * 0.5);
//         };

//         handleOrientationChange();

//         Dimensions.addEventListener('change', handleOrientationChange);

//         return () => {
//             Dimensions.removeEventListener('change', handleOrientationChange);
//         };
//     }, [h, w]);

//     return (
//         <>
//             <TextInput
//                 style={{
//                     marginTop: RFPercentage(1.5),
//                     height: inputHeight,
//                     width: inputWidth,
//                     borderRadius: RFPercentage(0.5),
//                     backgroundColor: COLORS.TrybackgroundColorIce1,
//                     paddingHorizontal: 15,
//                     fontFamily: FONT.Quicksand_Regular,
//                     fontSize: RFPercentage(2.1),
//                     color: COLORS.TextColorName,
//                 }}
//                 placeholder="state"
//                 value={state}
//                 onChangeText={value => {
//                     setstate(value);
//                 }}
//             />
//         </>
//     );
// };

// export default TRY;
// import React, { useState } from 'react';
// import { TextInput, View } from 'react-native';
// import { RFPercentage } from 'react-native-responsive-fontsize';
// import { COLORS, FONT } from '../../constants';

// const TRY = () => {
//     const [inputWidth, setInputWidth] = useState(0);
//     const [inputHeight, setInputHeight] = useState(0);
//     const [state, setstate] = useState('');

//     const handleLayout = (event) => {
//         const { width, height } = event.nativeEvent.layout;
//         console.log(width, height )
//         const isPortrait = height > width;
//         setInputWidth(isPortrait ? width * 1 : height * 1);
//         setInputHeight(isPortrait ? width * 1 : height *1);
//     };

//     return (
//         <View>
//             <TextInput
//                 onLayout={handleLayout}
//                 style={{
//                     marginTop: RFPercentage(1.5),
//                     height: inputHeight,
//                     width: inputWidth,
//                     borderRadius: RFPercentage(0.5),
//                     backgroundColor: COLORS.TrybackgroundColorIce1,
//                     paddingHorizontal: 15,
//                     fontFamily: FONT.Quicksand_Regular,
//                     fontSize: RFPercentage(2.1),
//                     color: COLORS.TextColorName,
//                 }}
//                 placeholder="state"
//                 value={state}
//                 onChangeText={(value) => {
//                     setstate(value);
//                 }}
//             />
//         </View>
//     );
// };

// export default TRY;

import { useEffect, useState } from 'react';
import { Dimensions, TextInput, View } from 'react-native';

const TRY = () => {

  return (
    <View>
      <TextInput
        style={{
          width: '80%',
          height: 40,
          fontSize: 16,
          backgroundColor:"#00d"
        }}
      />
    </View>
  );
};

export default TRY;
