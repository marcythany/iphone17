const Intro = () => {
	const specs = [
		{
			value: '6.3"',
			label: 'Display Super Retina XDR',
			color: 'text-blue-600',
		},
		{
			value: 'A18 Pro',
			label: 'Chip mais rápido',
			color: 'text-orange-500',
		},
		{
			value: '48MP',
			label: 'Sistema de câmera',
			color: 'text-blue-600',
		},
		{
			value: '29h',
			label: 'Bateria',
			color: 'text-orange-500',
		},
	];

	return (
		<section className='bg-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-5xl mx-auto text-center'>
				{/* Título principal */}
				<h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight'>
					iPhone 17 Pro
				</h1>

				{/* Subtítulo com gradiente */}
				<p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 sm:mb-4 text-gradient font-bold leading-snug'>
					Titânio. Tão forte. Tão leve. Tão Pro.
				</p>

				{/* Descrição */}
				<p className='text-base sm:text-lg md:text-xl mb-8 sm:mb-10 text-gray-400 max-w-3xl mx-auto leading-relaxed'>
					O design mais refinado que já criamos. Titânio de grau aeroespacial.
					Chip A18 Pro.
				</p>
			</div>

			{/* Botões de ação */}
			<div className='flex flex-col sm:flex-row justify-center items-center mb-12 sm:mb-16 gap-4 sm:gap-6 md:gap-8'>
				<button
					className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/30 w-full sm:w-auto cursor-pointer'
					onClick={() => console.log('Comprar agora')}
					aria-label='Comprar iPhone 17 Pro'
				>
					Compre agora
				</button>

				<button
					className='border-2 border-white rounded-full hover:bg-white hover:text-black text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto cursor-pointer'
					onClick={() => console.log('Saiba mais')}
					aria-label='Saiba mais sobre o iPhone 17 Pro'
				>
					Saiba Mais
				</button>
			</div>

			{/* Especificações */}
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto'>
				{specs.map((spec, index) => (
					<div
						key={index}
						className='bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-gray-800 transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer group'
						role='button'
						tabIndex={0}
						onClick={() => console.log(`Especificação: ${spec.label}`)}
						onKeyDown={(e) =>
							e.key === 'Enter' && console.log(`Especificação: ${spec.label}`)
						}
					>
						<p
							className={`text-2xl sm:text-3xl font-bold ${spec.color} mb-1 sm:mb-2`}
						>
							{spec.value}
						</p>
						<p className='text-sm text-gray-300 group-hover:text-white transition-colors duration-300'>
							{spec.label}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Intro;
