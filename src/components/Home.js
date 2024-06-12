import React, { useEffect } from 'react';
import './Home.css'; // Importa estilos para la página de inicio

const Home = () => {
    useEffect(() => {
        const interval = setInterval(() => {
            createSnowflakes();
        }, 100); // Crea nuevas partículas de nieve cada 100 milisegundos

        return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
    }, []);

    const createSnowflakes = () => {
        const snowflakes = document.createElement("div");
        snowflakes.className = "snowflake";
        snowflakes.innerText = "❄";
        snowflakes.style.left = Math.random() * window.innerWidth + "px";
        snowflakes.style.animationDuration = Math.random() * 3 + 2 + "s"; // Duración aleatoria de la animación
        document.body.appendChild(snowflakes);

        setTimeout(() => {
            snowflakes.remove();
        }, 10000); // Elimina la partícula después de 10 segundos
    }

    return (
        <div className="home">
            <header className="home-header">
                
                <h1>Desarrolladora de Software</h1>
            </header>
            <section className="home-content">
                <div className="home-image">
                    <img src="/images/fotocv.jpg" alt="Abi" />
                </div>
                <div className="home-text">
                    <h2>Sobre mí</h2>
                    <p className="text-justify">
                        ¡Saludos! Soy Abigail Jiménez Rojas, una chica apasionada por el estudio a mis 21 años de edad, actualmente habito en el hermoso Estado de México, México. A mi temprana edad me encuentro persiguiendo mi pasión por la tecnología y sus avances en el Tecnológico de Estudios Superiores de Jilotepec, donde cursó la carrera de Ingeniería en Sistemas Computacionales. Entusiasmada de aplicar mis conocimientos, aprender nuevas cosas y participar en nuevos proyectos desafiantes que me permitan dar a conocer mis habilidades ayudando al crecimiento de alguna empresa u organización. Estoy lista para esta gran aventura, espero formar parte de tu equipo y podamos emprender grandes proyectos que nos lleven a grandes resultados, me emociona mucho forma parte de esta gran era tecnológica. ¡Agradezco visites mi perfil de GitHub y espero tener la oportunidad de colaborar juntos en un futuro cercano!.
                    </p>
                    <h2>Mis Proyectos</h2>
                    <p className="text-justify">
                        Explora algunos de mis proyectos destacados en la sección de <a href="/repositories">Proyectos</a>.
                    </p>
                    
                    {/* Sección de Lenguajes de Programación */}
                    <section className="programming-languages">
                        <h2>Lenguajes de Programación</h2>
                        <div className="tech-icons small-icons">
                            <div className="tech-item">
                                <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/Python-Dark.svg" alt="Python" />
                                <span>Python</span>
                            </div>
                            <div className="tech-item">
                                <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/JavaScript.svg" alt="JavaScript" />
                                <span>JavaScript</span>
                            </div>
                            <div className="tech-item">
                                <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/Java-Dark.svg" alt="Java" />
                                <span>Java</span>
                            </div>
                            <div className="tech-item">
                                <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/React-Dark.svg" alt="React" />
                                <span>React</span>
                            </div>
                            {/* Agrega más lenguajes de programación aquí */}
                        </div>
                    </section>

                    {/* Sección de Gestores de Bases de Datos */}
                    <section className="database-managers">
                        <h2>Gestores de Bases de Datos</h2>
                        <div className="tech-icons small-icons">
                            <div className="tech-item">
                                <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/PostgreSQL-Dark.svg" alt="PostgreSQL" />
                                <span>PostgreSQL</span>
                            </div>
                            <div className="tech-item">
                                <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/MySQL-Dark.svg" alt="MySQL" />
                                <span>MySQL</span>
                            </div>
                            {/* Agrega más gestores de bases de datos aquí */}
                        </div>
                    </section>

                    {/* Sección de IDEs */}
                    <section className="ides">
                        <h2>IDE</h2>
                        <div className="tech-icons small-icons">
                            
                            <div className="tech-item">
                                <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/Eclipse-Dark.svg" alt="Eclipse" />
                                <span>Eclipse</span>
                            </div>
                            <div className="tech-item">
                                <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/AndroidStudio-Dark.svg" alt="Android Studio" />
                                <span>Android Studio</span>
                            </div>
                            <div className="tech-item">
                                <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/VisualStudio-Dark.svg" alt="Visual Studio" />
                                <span>Visual Studio</span>
                            </div>
                            <div className="tech-item">
                                <img src="https://github.com/tandpfun/skill-icons/raw/main/icons/VSCode-Dark.svg" alt="Visual Studio Code" />
                                <span>Visual Studio Code</span>
                            </div>
                            {/* Agrega más IDEs aquí */}
                        </div>
                    </section>

                    <h2>Contacto</h2>
                    <p className="text-justify">
                        Puedes contactarme a través de mi correo electrónico: <a href="mailto:abigailjimenez610@gmail.com">abigailjimenez610@gmail.com</a><br />
                    </p>
                    <ul className="contact-list">
                        <li><a href="https://github.com/Abiiijimm1" target="_blank" rel="noopener noreferrer">GitHub: https://github.com/Abiiijimm1</a></li>
                        <li><a href="https://www.linkedin.com/in/abigail-jimenez-rojas-8221102a3/" target="_blank" rel="noopener noreferrer">LinkedIn: https://www.linkedin.com/in/abigail-jimenez-rojas-8221102a3/</a></li>
                        <li>Teléfono: 5632784537</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default Home;
