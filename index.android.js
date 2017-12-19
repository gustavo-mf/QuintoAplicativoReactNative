import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import { Navigator } from 'react-native-deprecated-custom-components';

import PropTypes from 'prop-types';

import CenaPrincipal from './src/components/cenaPrincipal';
import CenaClientes from './src/components/cenaClientes';
import CenaContatos from './src/components/cenaContatos';
import CenaEmpresa from './src/components/cenaEmpresa';
import CenaServicos from './src/components/cenaServicos';

class app5 extends Component {
	render() {
		return (
			//<CenaPrincipal />
			//<CenaClientes />
			<Navigator
				initialRoute={{ id: 'a' }}
				renderScene={(route, navigator) => {
					if(route.id === 'a') {
						return(<CenaPrincipal navigator={navigator} />);
					}

					if(route.id === 'b') {
						return(<CenaClientes navigator={navigator} />);
					}

					if(route.id === 'c') {
						return(<CenaContatos navigator={navigator} />);
					}

					if(route.id === 'd') {
						return(<CenaEmpresa navigator={navigator} />);
					}

					if(route.id === 'e') {
						return(<CenaServicos navigator={navigator} />);
					}
				}}
			/>
		);
	}
}

AppRegistry.registerComponent('app5', () => app5);
