import Contact from './Contact'
import Logo from './../assets/logo-lamiafamiglia.png'

const stats = [
    { label: 'Nacimiento', value: '2002' },
    { label: 'Rating', value: '★★★★★' },
    { label: 'Ubicación', value: 'Ciudad de México' },
    { label: 'Raised', value: '$25M' },
  ]
  
  export default function Example() {
    return (
        <>
    <nav class="bg-white shadow py-10" style={{backgroundColor: "rgb(40, 62, 86)"}}>
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex justify-between h-21">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-white-400 hover:text-white-500 hover:bg-white-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white-500" aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>

          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>

          <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex-shrink-0 flex items-center">
          <img class="h-24 w-full" src={Logo} alt="Workflow" />
        </div>
        <div class="flex w-full justify-end">
          <a href="/" class="border-white-500 text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
            Sobre nosotros
          </a>
          <a href="/" class="px-10 border-transparent text-white hover:border-white-300 hover:text-white-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
            Nuestro menú
          </a>
          <a href="/" class="border-transparent text-white hover:border-white-300 hover:text-white-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
            Reservaciones
          </a>
        </div>
      </div>
      
    </div>
  </div>
</nav>

      <div className="relative bg-white py-16 sm:py-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative sm:py-16 lg:py-0">
            <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
              <div className="absolute inset-y-0 right-1/2 w-full bg-white-50 rounded-r-3xl lg:right-72" />
              
            </div>
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
              {/* Testimonial card*/}
              <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8"
                  alt=""
                />
                <div className="absolute inset-0 " style={{ mixBlendMode: 'multiply' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-500 via-white-600 opacity-100" />
                <div className="relative px-8">
                  <blockquote className="mt-8">
                    <div className="relative text-lg font-medium text-white md:flex-grow">
                      <svg
                        className="absolute top-0 left-0 transform -translate-x-8 -translate-y-0 h-4 w-8 text-white-400"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="relative">
                        Mi restaurante preferido es donde estén mis amigos. Si me abren la puerta de su casa y están ahí en una mesa comiendo y conviviendo con el corazón, eso es todo lo que necesito.
                      </p>
                    </div>
  
                    <footer className="mt-4">
                      <p className="text-base font-bold text-white">Massimo Botura</p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
  
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl text-white-900 font-extrabold tracking-tight sm:text-4xl">
                El amor hecho pasta
              </h2>
              <div className="mt-6 text-white-500 space-y-6">
                <p className="text-lg">
                En el centro histórico. A lado de uno de los monumentos más bellos de nuestra ciudad, te brindamos una cálida cena con las personas que más amas.
                  
                </p>
                <p className="text-base leading-7">
                Nos hemos destacado por crear una exquisita variedad de platillos italianos en Ciudad de México. Nuestros chefs de calidad internacional crean una experiencia gastronómica que permite que jamás olvides tu visita.
                </p>
              </div>
            </div>
  
            {/* Stats section */}
            <div className="mt-10">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="border-t-2 border-white-100 pt-6">
                    <dt className="text-base font-medium text-white-500">{stat.label}</dt>
                    <dd className="text-3xl font-extrabold tracking-tight text-white-900">{stat.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10">
                <a href="/" className="text-base font-medium text-white-600">
                  {' '}
                  <u>Conoce nuestro menú y reserva con nosotros <span aria-hidden="true">&rarr;</span>{' '}</u>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
      </>
    )
  }