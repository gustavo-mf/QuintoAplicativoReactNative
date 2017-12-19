import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TouchableHighlight } from 'react-native';

import BarraNavegacao from './barraNavegacao';

const imgs = [
	require('../../imgs/logo.png'),
	require('../../imgs/menu_cliente.png'),
	require('../../imgs/menu_contato.png'),
	require('../../imgs/menu_empresa.png'),
	require('../../imgs/menu_servico.png')
];

export default class cenaPrincipal extends Component {
	render() {
		return (
			<View>
				<StatusBar
					//hidden
					backgroundColor = '#ccc'
				/>
				<BarraNavegacao />
				<View style={styles.menu}>
					<Image source={imgs[0]} />
					<View>
						<View style={styles.menuGrupo}>
							<TouchableHighlight
							underlayColor={'#b9c941'}
							activeOpacity={0.3}
							onPress={() => {
								this.props.navigator.push({ id: 'b' });
							}}>
								<Image style={styles.botoes} source={imgs[1]} />
							</TouchableHighlight>
							<TouchableHighlight 
							underlayColor={'#61bd8c'}
							activeOpacity={0.3}
							onPress={() => {
								this.props.navigator.push({ id: 'c' });
							}}>
								<Image style={styles.botoes} source={imgs[2]} />
							</TouchableHighlight>
						</View>
						<View style={styles.menuGrupo}>
							<TouchableHighlight
							underlayColor={'#ec7148'}
							activeOpacity={0.3}
							onPress={() => {
								this.props.navigator.push({ id: 'd' });
							}}>
								<Image style={styles.botoes} source={imgs[3]} />
							</TouchableHighlight>
							<TouchableHighlight
							underlayColor={'#19d1c8'}
							activeOpacity={0.3}
							onPress={() => {
								this.props.navigator.push({ id: 'e' });
							}}>
								<Image style={styles.botoes} source={imgs[4]} />
							</TouchableHighlight>
						</View>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	menu: {
		alignItems: 'center',
		marginTop: 20
	},
	menuGrupo: { flexDirection: 'row' },
	botoes: { margin: 15 }
});