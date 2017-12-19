import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';

import BarraNavegacao from './barraNavegacao';

const imgServicos = require('../../imgs/detalhe_servico.png');

export default class cenaServicoss extends Component {
	render() {
		return (
			<View style={styles.tela}>
				<StatusBar
					//hidden
					backgroundColor = '#19d1c8'
				/>
				<BarraNavegacao voltar navigator={this.props.navigator} codFundo='#19d1c8' />

				<View style={styles.titulo}>
					<Image source={imgServicos} />
					<Text style={styles.txtTitulo}>Nossos Serviços</Text>
				</View>
				<View style={styles.servicos}>
						<Text style={styles.servicosTxt}> - Consultoria</Text>
						<Text style={styles.servicosTxt}> - Processos</Text>
						<Text style={styles.servicosTxt}> - Acompanhamento de projetos</Text>
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
		color: '#19d1c8'
	},
	servicos: {
		padding: 20,
		marginTop: 10
	},
	servicosTxt: { fontSize: 18 }
});