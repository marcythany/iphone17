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
		<section className='bg-black py-20 px-6'>
			<div className='max-w-5xl mx-auto text-center'>
				<h1 className='text-6xl md:text-8xl font-bold mb-6'>iPhone 17 Pro</h1>
				<p className='text-2xl md:text-4xl mb-4 text-gradient font-bold'>
					Titânio. Tão forte. Tão leve. Tão Pro.
				</p>
				<p className='text-lg md:text-xl mb-10 text-gray-400 max-w-3xl mx-auto'>
					O design mais refinado que já criamos. Titânio de grau aeroespacial.
					Chip A18 Pro.
				</p>
			</div>

			<div className='flex flex-col md:flex-row justify-center items-center mb-16 gap-8'>
				<button className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/50 cursor-pointer'>
					Compre agora
				</button>
				<button className='border-2 border-white rounded-full hover:bg-white hover:text-black text-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 cursor-pointer'>
					Saiba Mais
				</button>
			</div>

			<div className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto'>
				{specs.map((spec, index) => (
					<div
						key={index}
						className='bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-all hover:scale-105 cursor-pointer'
					>
						<p className={`text-3xl font-bold ${spec.color}`}>{spec.value}</p>
						<p className='text-sm text-gray-300 mt-2'>{spec.label}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Intro;
