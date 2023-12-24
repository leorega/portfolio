import { Accordion } from "keep-react";

const About = () => {
  return (
    <section id="about" className='w-full min-h-screen pt-20 bg-green-500 flex flex-col items-center justify-center'>
      <div translate="no" className="md:w-4/5 md:border-l-4 border-black p-4">
      <Accordion openFirstPanel={true}>
        <Accordion.Panel>
          <Accordion.Container>
            <Accordion.Title>Acerca de mí</Accordion.Title>
          </Accordion.Container>
          <Accordion.Content>
            Trabajé durante 21 años en una planta envasadora de agua mineral, donde me desarrollé
            haciendo tareas muy variadas, desde la operación de máquinas de última tecnología, liderar un equipo de producción y  
            capacitar operadores. Hasta que decidí cambiar de rumbo mi vida ya que me encontraba estancado, sin una motivación real, 
            auténtica; entonces decidí meterme de lleno en la <strong>programación</strong>.
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Container>
            <Accordion.Title>Acerca de mí</Accordion.Title>
          </Accordion.Container>
          <Accordion.Content>
            Trabajé durante 21 años en una planta envasadora de agua mineral, donde me desarrollé
            haciendo tareas muy variadas, desde la operación de máquinas de última tecnología, liderar un equipo de producción y  
            capacitar operadores. Hasta que decidí cambiar de rumbo mi vida ya que me encontraba estancado, sin una motivación real, 
            auténtica; entonces decidí meterme de lleno en la <strong>programación</strong>.
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Container>
            <Accordion.Title>Acerca de mí</Accordion.Title>
          </Accordion.Container>
          <Accordion.Content>
            Trabajé durante 21 años en una planta envasadora de agua mineral, donde me desarrollé
            haciendo tareas muy variadas, desde la operación de máquinas de última tecnología, liderar un equipo de producción y  
            capacitar operadores. Hasta que decidí cambiar de rumbo mi vida ya que me encontraba estancado, sin una motivación real, 
            auténtica; entonces decidí meterme de lleno en la <strong>programación</strong>.
          </Accordion.Content>
        </Accordion.Panel>
    </Accordion>
      </div>
    </section>
  );
}

export default About;