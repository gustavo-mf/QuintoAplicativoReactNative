import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';

import BarraNavegacao from './barraNavegacao';

const imgs = [
	require('../../imgs/detalhe_cliente.png'),
	require('../../imgs/cliente1.png'),
	require('../../imgs/cliente2.png')
];

export default class cenaClientes extends Component {
	render() {
		return (
			<View style={styles.tela}>
				<StatusBar
					//hidden
					backgroundColor = '#b9c941'
				/>
				<BarraNavegacao voltar navigator={this.props.navigator} codFundo='#b9c941' />

				<View style={styles.titulo}>
					<Image source={imgs[0]} />
					<Text style={styles.txtTitulo}>Nossos Clientes</Text>
				</View>
				<View style={styles.cliente}>
					<Image source={imgs[1]} />
					<Text style={styles.txtCliente}>Lorem ipsum dolorem</Text>
				</View>
				<View style={styles.cliente}>
					<Image source={imgs[2]} />
					<Text style={styles.txtCliente}>Lorem ipsum dolorem</Text>
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
		color: '#b9c941'
	},
	cliente: {
		padding: 20,
		marginTop: 10
	},
	txtCliente: {
		marginLeft: 20,
		fontSize: 18
	}
});