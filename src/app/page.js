import Card from "@/Components/Card";
import Gallery from "@/Components/Gallery";
import Gallery2 from "@/Components/Gallery2";
import Gallery3 from "@/Components/Gallery3";

export default function Home() {
  return (
    <div className='flex-1 bg-p2 overflow-x-hidden'>
      <main className='flex min-h-screen flex-col items-center justify-between pt-8'>
        <div className="h-screen w-screen grid grid-rows-3"> {/* tres filas de dos culumnas */}
          <div className="flex items-center grid-cols-2 py-4 border-"> {/* columna 1 */}
            <Gallery />
            <div className="flex items-center">
            <Card title="¿Quiénes Somos?" text="Sein es una empresa dedicada a la restauración y limpieza de residencias. Nuestra misión es devolver la belleza y funcionalidad a los espacios, creando ambientes limpios y acogedores para nuestros clientes." />
            </div>
          </div>
          <div className="flex items-center grid-cols-2 py-4 "> {/* columna 2 */}
            <div className="flex items-center">
              <Card title="Nuestros Servicios" text="Ofrecemos una amplia gama de servicios, incluyendo restauración de mobiliario, limpieza profunda de espacios, tratamiento de suelos y mucho más. Nuestro equipo de profesionales altamente capacitados está listo para transformar su hogar." />
            </div>
            <Gallery2/>
          </div>
          <div className="flex items-center grid-cols-2 py-4 "> {/* columna 3 */}
            <Gallery3 />
            <div className="flex items-center">
            <Card title="Compromiso con la Calidad" text="En Sein, nos enorgullece nuestro compromiso con la calidad. Utilizamos productos y técnicas de limpieza de última generación para garantizar resultados excepcionales. Su satisfacción es nuestra prioridad." />
            </div>
          </div>
        </div>
      </main>
      <div className="py-5">

      </div>
    </div>
  )
}
