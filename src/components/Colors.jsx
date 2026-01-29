import { useState } from 'react';

const Colors = () => {
	const colors = [
		{
			id: 'blue',
			name: 'Titânio Azul',
			image: '/img/iphone-blue.jpg',
			colorClass: 'bg-blue-500',
		},
		{
			id: 'silver',
			name: 'Titânio Natural',
			image: '/img/iphone-silver.jpg',
			colorClass: 'bg-gray-300',
		},
		{
			id: 'orange',
			name: 'Titânio Laranja',
			image: '/img/iphone-orange.jpg',
			colorClass: 'bg-orange-500',
		},
	];

	const models = [
		{
			name: 'Pro Max',
			screen: '6.9 polegadas',
			storage: '256GB, 512GB, 1TB',
			battery: '33h de vídeo',
			weight: '221g',
		},
		{
			name: 'Pro',
			screen: '6.3 polegadas',
			storage: '128GB, 256GB, 512GB',
			battery: '29h de vídeo',
			weight: '199g',
		},
	];

	const [selectedColor, setSelectedColor] = useState('blue');

	return (
		<section
			id='cores'
			className='bg-black py-12 md:py-20 px-4 sm:px-6 lg:px-8'
		>
			<div className='max-w-7xl mx-auto'>
				{/* Título da seção */}
				<div className='text-center mb-12 md:mb-16'>
					<h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4'>
						Escolha sua cor
					</h2>
					<p className='text-base sm:text-lg md:text-xl text-gray-400'>
						Quadro acabamentos em titânio lindos
					</p>
				</div>

				{/* Exibição do iPhone */}
				<div className='flex justify-center items-center mb-8 md:mb-12'>
					<div className='relative w-full max-w-3xl'>
						{/* Container da imagem com altura responsiva */}
						<div className='relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center'>
							<div className='w-full h-full flex items-center justify-center transition-all duration-300 ease-in-out'>
								<img
									src={
										colors.find((color) => color.id === selectedColor)?.image ||
										''
									}
									alt={`iPhone 17 na cor ${colors.find((color) => color.id === selectedColor)?.name}`}
									className='w-auto h-auto max-w-[85%] max-h-[80%] sm:max-w-[90%] sm:max-h-[85%] object-contain transform transition-transform duration-300 hover:scale-105'
								/>
							</div>
						</div>

						{/* Nome da cor selecionada */}
						<div className='absolute bottom-4 md:bottom-8 left-0 right-0 text-center'>
							<div className='px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full backdrop-blur-md bg-black/40 inline-block'>
								<h3 className='text-lg sm:text-xl md:text-2xl font-semibold'>
									{colors.find((color) => color.id === selectedColor)?.name ||
										'Selecione uma cor'}
								</h3>
							</div>
						</div>
					</div>
				</div>

				{/* Seletor de cores */}
				<div className='flex justify-center items-center gap-3 sm:gap-4 flex-wrap'>
					{colors.map((color) => {
						const isSelected = selectedColor === color.id;
						return (
							<button
								key={color.id}
								onClick={() => setSelectedColor(color.id)}
								className={`relative transition-all duration-300 cursor-pointer ${isSelected ? 'scale-110' : 'hover:scale-105'}`}
								aria-label={`Selecionar cor ${color.name}`}
								aria-pressed={isSelected}
							>
								<div
									className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full ${color.colorClass} border-2 ${isSelected ? 'border-white ring-2 ring-white/30' : 'border-gray-600 hover:border-gray-400'}`}
								/>
							</button>
						);
					})}
				</div>

				{/* Modelos disponíveis */}
				<div className='grid gap-6 md:gap-8 mt-12 md:mt-20 grid-cols-1 sm:grid-cols-2'>
					{models.map((model, index) => (
						<div
							key={index}
							className='bg-gradient-to-br from-gray-900/80 to-gray-800/20 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-[1.02]'
						>
							<div className='text-3xl md:text-4xl mb-4'>📱</div>
							<h3 className='text-xl md:text-2xl font-bold mb-3'>
								{model.name}
							</h3>
							<p className='text-gray-400 text-sm md:text-base mb-4'>
								Tela: {model.screen}
							</p>
							<ul className='space-y-2 text-gray-300 text-sm md:text-base'>
								<li className='flex items-center'>
									<span className='text-gray-500 mr-2'>💾</span>
									Armazenamento: {model.storage}
								</li>
								<li className='flex items-center'>
									<span className='text-gray-500 mr-2'>🔋</span>
									Bateria: {model.battery}
								</li>
								<li className='flex items-center'>
									<span className='text-gray-500 mr-2'>⚖️</span>
									Peso: {model.weight}
								</li>
							</ul>
						</div>
					))}
				</div>

				{/* CTA de compra */}
				<div className='text-center mt-12 md:mt-16'>
					<button
						className='bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 sm:py-4 sm:px-12 rounded-full text-base sm:text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/30 cursor-pointer'
						onClick={() => console.log('Comprar agora')}
					>
						Compre agora a partir de R$ 9.950,00
					</button>
					<p className='text-gray-400 text-sm sm:text-base mt-4'>
						Ou em até 12x de R$ 884,92 sem juros
					</p>
				</div>
			</div>
		</section>
	);
};

export default Colors;
