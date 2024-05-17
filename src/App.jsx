import React from 'react';
import './styles/Reset.scss';
import Comeco from './examples/1Comeco/Comeco';
import GestosBasicos from './examples/3GestosBasicos/GestosBasicos';
import AnimacoesBasicas from './examples/2AnimacoesBasicas/AnimacoesBasicas';
import ControlesAnimacoes from './examples/4ControlesAnimacoes/ControlesAnimacoes';
import AnimacoesPontoDeVista from './examples/5AnimacoesPontoDeVista/AnimacoesPontoDeVista';
import PageTransition from './advancedExamples/2PageTransition/PageTransition';
import { AnimatePresence, motion } from 'framer-motion';
import RouterConfig from './router/Router';

const App = () => {
	return (
		<div style={{ backgroundColor: '#212121' }}>
			<RouterConfig />
		</div>
	);
};

export default App;
