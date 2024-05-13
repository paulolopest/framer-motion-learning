import { motion } from 'framer-motion';

const Comeco = () => {
	// Primeiramente, a sintaxe do framer motion é intuitiva, ela é identica ao HTML, porem antes dos elementos, sempre temos que colocar o 'motion'

	// Toda a magica acontece via props, então, os elementos terão props pré definidas que poderemos configurar. Por exemplo, se voce usar a prop 'drag' (agarrar)
	// voce tornará o elemento draggable, se voce colocar o elemento como "drag=x" voce terá o elemento draggable somente no eixo X e assim por diante.

	// Veja o Exemplo 1

	//--------------------------------------------------------

	// Porem, voce pode observar que o elemento acaba sendo arrastado sem limites, para concertar isso, nos temos a props dragConstraints
	// Essa props vai setar a restrição de até aonde seu elemento pode ser arrastado, então se voce setar

	// dragConstraints={{right: 100, left: -100}}

	// Voce ta dizendo que seu elemento so pode ser arrastado para -100px pra esquerda e 100px pra direita. Esses valores são personalizados por voce, então
	// sinta-se a vontade para colocar o que achar melhor.

	// Veja o Exemplo 2

	// Como eu disse, podemos personalizar baseado no que quisermos

	// Veja o Exemplo 3

	//--------------------------------------------------------

	return (
		<motion.div className="ctr">
			<div className="example">
				<h1>Exemplo 1</h1>

				<motion.div drag="x" className="card"></motion.div>
			</div>

			<div className="example">
				<h1>Exemplo 2</h1>

				<motion.div drag="x" dragConstraints={{ left: -50, right: 50 }} className="card"></motion.div>
			</div>

			<div className="example">
				<h1>Exemplo 3</h1>

				<div className="example3bckg">
					<motion.div
						className="card"
						drag
						dragConstraints={{ left: -50, right: 50, top: -30, bottom: 30 }}
					></motion.div>
				</div>
			</div>
		</motion.div>
	);
};

export default Comeco;
