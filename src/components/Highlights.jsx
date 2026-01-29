const Highlights = () => {
	return (
		<section className='bg-black py-20 px-6' id='design'>
			<div className='max-w-7xl mx-auto'>
				<div className='text-center mb-16'>
					<h2 className='text-6xl md:text-8xl font-bold mb-4'>
						Design revolucionário
					</h2>
					<p>Cada detalhe foi pensado para criar a melhor experiência.</p>
				</div>

				<div className='grid grid-cols-2 gap-8 mb-16'>
					<div className='bg-gray-900 rounded-3xl p-8'>
						<img
							className='w-full rounded-2xl mb-4'
							src='../../img/titanium-design.jpg'
							alt='iphone-titanium'
						/>
						<h3 className='font-bold mb-2 text-3xl'>Titânio Premium</h3>
						<p className=' text-gray-300'>
							Estrutura em titânio de grau aeroespacial. O smartphone mais forte
							e leve.
						</p>
					</div>

					<div className='bg-gray-900 rounded-3xl p-8'>
						<img
							className='w-full rounded-2xl mb-4'
							src='../../img/ios-features.jpg'
							alt='ios-features'
						/>
						<h3 className='font-bold mb-2 text-3xl'>iOS 26</h3>
						<p className=' text-gray-300'>
							O sistema operacional mais avançado do mundo com IA integrada.
						</p>
					</div>
				</div>

				<div className='bg-gray-900 rounded-3xl p-12 mb-16' id='performance'>
					<h3 className='text-4xl font-bold mb-6 text-gradient'>A18 Pro</h3>
					<p className=' text-gray-300 mb-6'>
						O chip mais poderoso em um smartphone.
					</p>
					<img
						className='w-full rounded-2xl mb-4'
						src='../../img/chip-a18-pro.jpg'
						alt='chip-a18-pro'
					/>

					<ul className='space-y-3 text-gray-300'>
						<li>CPU 20% mais rápido</li>
						<li>GPU 25% mais eficiente</li>
						<li>Neural Engine com 16 núcleos</li>
						<li>Ray tracing acelerado por hardware</li>
					</ul>
				</div>

				<div className='text-center' id='camera'>
					<h3 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 lg:mb-10'>
						Sistema de câmera Pro avançado
					</h3>

					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8'>
						<div className='bg-gray-900 rounded-2xl p-4 sm:p-6 lg:p-8 hover:scale-[1.02] sm:hover:scale-105 cursor-pointer transition-all duration-300'>
							<div className='text-3xl sm:text-4xl font-bold text-blue-600 mb-3 sm:mb-4'>
								48MP
							</div>
							<h4 className='text-lg sm:text-xl font-semibold mb-1 sm:mb-2'>
								Principal
							</h4>
							<p className='text-gray-400 text-sm sm:text-base'>
								Sensor quad-pixel com foco automático
							</p>
						</div>

						<div className='bg-gray-900 rounded-2xl p-4 sm:p-6 lg:p-8 hover:scale-[1.02] sm:hover:scale-105 cursor-pointer transition-all duration-300'>
							<div className='text-3xl sm:text-4xl font-bold text-orange-500 mb-3 sm:mb-4'>
								12MP
							</div>
							<h4 className='text-lg sm:text-xl font-semibold mb-1 sm:mb-2'>
								Ultra Wide
							</h4>
							<p className='text-gray-400 text-sm sm:text-base'>
								Campo de visão de 120° com modo noturno
							</p>
						</div>

						<div className='bg-gray-900 rounded-2xl p-4 sm:p-6 lg:p-8 hover:scale-[1.02] sm:hover:scale-105 cursor-pointer transition-all duration-300'>
							<div className='text-3xl sm:text-4xl font-bold text-blue-600 mb-3 sm:mb-4'>
								12MP
							</div>
							<h4 className='text-lg sm:text-xl font-semibold mb-1 sm:mb-2'>
								Telefoto 5x
							</h4>
							<p className='text-gray-400 text-sm sm:text-base'>
								Zoom óptico de 5x com estabilização de imagem
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Highlights;
