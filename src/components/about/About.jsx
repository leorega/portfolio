import { Accordion } from "keep-react";

const About = () => {
    return (
        <section
            id="about"
            className="w-full min-h-screen pt-20 bg-green-500 flex flex-col items-center justify-center"
        >
            <div
                translate="no"
                className="md:w-4/5 md:border-l-4 border-black p-4"
            >
                <Accordion openFirstPanel={true} className="shadow-3xl">
                    <Accordion.Panel>
                        <Accordion.Container className="bg-green-200 border-b-2 border-slate-400">
                            <Accordion.Title>Sobre mí</Accordion.Title>
                        </Accordion.Container>
                        <Accordion.Content className="border-b-2 border-slate-600">
                            <p className="font-semibold">
                                Trabajé en una planta envasadora de agua
                                mineral, donde me desarrollé haciendo tareas muy
                                variadas, desde la operación de máquinas de
                                última tecnología, liderar un equipo de
                                producción y capacitar operadores.{" "}
                                <strong>
                                    {" "}
                                    Hasta que decidí cambiar de rumbo mi vida
                                </strong>
                                ya que me encontraba estancado, sin una
                                motivación real, auténtica; entonces decidí
                                meterme de lleno en algo que siempre me gustó:
                                la <strong>programación</strong>.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Container className="bg-green-200 border-b-2 border-slate-400">
                            <Accordion.Title>Stack Tecnológico</Accordion.Title>
                        </Accordion.Container>
                        <Accordion.Content className="border-b-2 border-slate-600">
                            <p className="font-semibold">
                                Comencé tomando un curso de{" "}
                                <strong>desarrollo web en Next-U</strong>, que
                                se basaba en <strong>Python</strong>. Después
                                hice el primer año de la{" "}
                                <strong>
                                    tecnicatura superior en programación en el
                                    IRSO
                                </strong>
                                , donde vi las bases de <b>C</b>, pero tuve que
                                dejarla por la pandemia de COVID.
                            </p>
                            <p className="font-semibold">
                                <i className="text-red-800 text-lg">
                                    No iba a darme por vencido!
                                </i>
                                , así que me puse a estudiar nuevamente y
                                entonces me metí en la carrera de
                                <strong>
                                    {" "}
                                    Web Developer FullStack de Henry
                                </strong>{" "}
                                y en la{" "}
                                <strong>
                                    Diplomatura en Desarrollo Web Full Stack de
                                    la Universidad Tecnológica Nacional
                                </strong>
                                , de las cuales estoy graduado.
                            </p>
                            <p className="font-semibold">
                                En estas carreras aprendí a desarrollar en{" "}
                                <strong>JavaScript</strong> y{" "}
                                <strong>PHP</strong> respectivamente. Aprendí a
                                trabajar con distintas tecnologías como:{" "}
                                <strong>
                                    React, Redux, HTML, CSS, sql, MySql,
                                    Postgres, Sequelize,
                                </strong>{" "}
                                entre las mas destacadas. También aprendí por mi
                                cuenta
                                <strong>
                                    {" "}
                                    Tailwind, Mongo, Laravel, Next, Bootstrap
                                </strong>{" "}
                                y sigo incorporando conocimientos. Manejo muy
                                bien control de versiones con{" "}
                                <strong>Git, GitHub, GitLab</strong>
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Container className="bg-green-200 border-b-2 border-slate-400">
                            <Accordion.Title>Soft Skills</Accordion.Title>
                        </Accordion.Container>
                        <Accordion.Content className="border-b-2 border-slate-600">
                            <p className="font-semibold">
                                En el transcurso de la tecnicatura y sobre todo
                                de las diplomaturas, aprendí a trabajar con
                                metodologías ágiles de trabajo en equipo como{" "}
                                <strong>SCRUM</strong>. <br /> Organización de
                                trabajo con tableros tipo Trello. <br />
                                También tengo experiencia trabajando en equipo
                                con control de versiones en GitHub. <br />
                                Tengo un nivel de inglés B2 y sigo estudiando.{" "}
                                <br />
                                En lo relacionado a la adaptabilidad me destaco
                                en la resolución de problemas y tolerancia al
                                cambio. <br />
                                Mi cultura de trabajo ideal es Commander, la
                                cual valora el orden, la estructura y la
                                eficiencia.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </div>
        </section>
    );
};

export default About;
