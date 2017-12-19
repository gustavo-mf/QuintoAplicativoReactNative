import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';

import BarraNavegacao from './barraNavegacao';

const imgContato = require('../../imgs/detalhe_contato.png');

export default class cenaContatos extends Component {
	render() {
		return (
			<View style={styles.tela}>
				<StatusBar
					//hidden
					backgroundColor = '#61bd8c'
				/>
				<BarraNavegacao voltar navigator={this.props.navigator} codFundo='#61bd8c' />

				<View style={styles.titulo}>
					<Image source={imgContato} />
					<Text style={styles.txtTitulo}>Contato</Text>
				</View>
				<View style={styles.contato}>
						<Text style={styles.contatoTxt}>TEL: (11) 1234-1234</Text>
						<Text style={styles.contatoTxt}>Cel: (11) 91234-1234</Text>
						<Text style={styles.contatoTxt}>E-mail: contato@atmconsultoria.com</Text>
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
		color: '#61bd8c'
	},
	contato: {
		padding: 20,
		marginTop: 10
	},
	contatoTxt: { fontSize: 18 }
});