import React, { useState } from 'react'; 
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

import Colors from '../../resources/Colors';
import OilStation from './OilStation';

const SelectOilStation = ({navigation}) => {
    const [selectIndex, setSelectIndex] = useState(0)
    const [oilStations, setOilStations] = useState([
        {
            "name": "รอยยัลออย์ล",
            "isSelect": true,
        }, {
            "name": "ปั้มน้อยยยยย",
            "isSelect": false,
        }, {
            "name": "ยังไม่ตั้ง",
            "isSelect": false,
        }
    ]);

    function selectOilStation(index) {
        let newOilStations = oilStations.map((oilStation, i) => (
            index === i ? {...oilStation, isSelect: true}: {...oilStation, isSelect: false}
      ))

      setSelectIndex(index);
      setOilStations(newOilStations);
    }

    return (
        <View style={styles.container}>
            <View>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.textLink}>สถานีปั้มน้ำมันของคุณ</Text>
                </View>

                <View style={{marginTop: 10}}>
                    {
                        oilStations.map((oilStation, index)  => 
                            <OilStation
                                index={index}
                                oilStation={oilStation} 
                                selectOilStation={selectOilStation}
                            />
                        )
                    }

                </View>

                
            </View>

            <View style={{marginTop: 10}}>
                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Home')}
                        underlayColor={Colors.WHITE}>
                            <Text style={styles.textLink}>ตกลง</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.ORANGE,
        borderRadius: 20,
        padding: 18,
        justifyContent: 'space-between'
    },
    textLink: {
        color: Colors.WHITE,
        fontWeight: 'bold',
        fontSize: 14
    },
    button:{
        alignItems: 'center',
        backgroundColor: Colors.GREEN,
        borderRadius:10,
        padding: 14,
      },

});

export default SelectOilStation;