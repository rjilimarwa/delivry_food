import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import MapView, { Marker } from 'react-native-maps';

export default class Address extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:"",
            latitude:37.78825,
            longitude:-122.4324
        };
    }

    render() {
        return (
            <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
                <Text>GOOGLE MAP API</Text>

                <MapView
                    style={{width:300, height:400}}
                    initialRegion={{
                        latitude:  this.state.latitude,
                        longitude: this.state.longitude,
                        latitudeDelta: 0.0042,
                        longitudeDelta: 0.0121,
                    }}

                    onPress={(e) => this.onClickMap(e.nativeEvent)}
                >
                    <MapView.Marker draggable
                                    coordinate={{
                                        latitude: this.state.latitude,
                                        longitude: this.state.longitude
                                    }}
                                    title="Aqui estoy"
                                    onDragEnd={(e) => this.movementMarker(e)}
                    />
                </MapView>

            </View>
        );
    }

    movementMarker(e){
        const latitude  = e.nativeEvent.coordinate.latitude
        const longitude = e.nativeEvent.coordinate.longitude

        this.setState({
            latitude: latitude,
            longitude: longitude
        })
    }

    onClickMap(e)
    {
        const {latitude,longitude} = e.coordinate
        this.setState({
            latitude: latitude,
            longitude: longitude
        })
    }

}