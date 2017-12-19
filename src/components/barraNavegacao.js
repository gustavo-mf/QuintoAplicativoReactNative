import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native';
import React, { Component } from 'react';

var imgVoltar = require('../../imgs/btn_voltar.png');

export default class BarraNavegacao extends Component {
	render() {
		if(this.props.voltar) {
			return (
				<View style={[styles.barraTitulo, { backgroundColor: this.props.codFundo }]}>
					<TouchableHighlight 
					underlayColor={this.props.codFundo}
					activeOpacity={0.3}
					onPress={ () => {
						this.props.navigator.pop();
					}}>
						<Image source={imgVoltar} />
					</TouchableHighlight>
					<Text style={styles.titulo}>ATM Consultoria</Text>
				</View>
			);
		} 
		return (
			<View style={styles.barraTitulo}>
				<Text style={styles.titulo}>ATM Consultoria</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	barraTitulo: {
		backgroundColor: '#ccc',
		padding: 10,
		height: 60,
		flexDirection: 'row'
	},
	titulo: {
		flex: 1,
		fontSize: 18,
		textAlign: 'center',
		color: '#000'
	}
});