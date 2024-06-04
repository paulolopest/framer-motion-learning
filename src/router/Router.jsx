import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageTransition from '../advancedExamples/2PageTransition/PageTransition';
import Comeco from '../examples/1Comeco/Comeco';
import { AnimatePresence } from 'framer-motion';
import AnimacoesBasicas from '../examples/2AnimacoesBasicas/AnimacoesBasicas';
import RolagemEmCamadas from './../advancedExamples/RolagemEmCamadas/RolagemEmCamadas';

const RouterConfig = () => {
	return (
		<BrowserRouter>
			{/* Animação de transição das telas */}
			<PageTransition>
				<Routes>
					<Route path="/pagetransition" element={<PageTransition />} />
					<Route path="/basicanimation" element={<AnimacoesBasicas />} />
					<Route path="/rolagemParallax" element={<RolagemEmCamadas />} />

					<Route path="/" element={<Comeco />} />
				</Routes>
			</PageTransition>
		</BrowserRouter>
	);
};

export default RouterConfig;
