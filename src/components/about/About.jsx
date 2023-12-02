

const About = () => {
  return (
    <section id="about" className='w-full min-h-screen bg-green-500 flex flex-col items-center justify-center'>
      <div className="w-4/5 border-l-4 border-black p-4">
        <h3 className='text-xl font-bold mb-4'>Acerca de mí</h3>
        <p className='font-semibold'>Trabajé durante 21 años en una planta envasadora de agua mineral, donde me desarrollé
           haciendo tareas muy variadas, desde la operación de máquinas de última tecnología, liderar un equipo de producción y  
           capacitar operadores. Hasta que decidí cambiar de rumbo mi vida ya que me encontraba estancado, sin una motivación real, 
           auténtica; entonces decidí meterme de lleno en la <strong>programación</strong>.
        </p> 
        <p className='font-semibold'>Comencé tomando un curso de <strong>desarrollo web en Next-U</strong>, que 
           se basaba en <strong>Python</strong>. Después hice el primer año de la <strong>tecnicatura superior en programación en el IRSO
            </strong>, pero tuve que dejarla
           por la pandemia de COVID.
        </p>
        <p className="font-semibold"><i className="text-red-800 text-lg">No iba a darme por vencido!</i>, 
           asi que me puse a estudiar nuevamente y entonces me metí en la carrera de 
           <strong> Web Developer FullStack de Henry</strong> y en la <strong>Diplomatura en Desarrollo Web Full Stack de la Universidad 
            Tecnológica Nacional</strong>, de las cuales estoy graduado. 
        </p>
        <p className="font-semibold">
          En estas carreras aprendí a desarrollar en <strong>JavaScript</strong> y <strong>PHP</strong> respectivamente. También aprendí a
          trabajar con distintas tecnologías como: <strong>React, Redux, HTML, CSS, MySQL, Postgres, Sequelize</strong>, entre otras y metodologías
          de trabajo en equipo, ágiles, tipo SCRUM y con tableros de tareas como Trello.
        </p>
        <p className="font-semibold">
          A partir de ese momento ya no me detuve en la exploración y el aprendizaje, transformando mi vida en esto que soy ahora y de 
          lo cual me siento muy orgulloso, un <strong> Desarrollador FullStack.</strong>
        </p>
      </div>
    </section>
  );
}

export default About;