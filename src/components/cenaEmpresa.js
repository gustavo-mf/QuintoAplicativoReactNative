import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';

import BarraNavegacao from './barraNavegacao';

const imgEmpresa = require('../../imgs/detalhe_empresa.png');

export default class cenaEmpresa extends Component {
	render() {
		return (
			<View style={styles.tela}>
				<StatusBar
					//hidden
					backgroundColor = '#ec7148'
				/>
				<BarraNavegacao voltar navigator={this.props.navigator}  codFundo='#ec7148' />

				<View style={styles.titulo}>
					<Image source={imgEmpresa} />
					<Text style={styles.txtTitulo}>A empresa</Text>
				</View>
				<View style={styles.empresa}>
						<Text style={styles.empresaTxt}>Lorem ipsum dolorem sit amet, dolorem sit amet ipsum dolorum sit.</Text>
					</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	tela: {
		flex: 1,
		backgroundColor: '#fff'
	},
	titulo: {
		flexDirection: 'row',
		marginTop: 20
	},
	txtTitulo: {
		marginTop: 20,
		marginLeft: 10,
		fontSize: 30,
		color: '#ec7148'
	},
	empresa: {
		padding: 20,
		marginTop: 10
	},
	empresaTxt: { fontSize: 18 }
});