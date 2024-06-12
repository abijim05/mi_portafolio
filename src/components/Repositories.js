import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Importa el icono de GitHub de react-icons
import './Repositories.css'; // Importa el archivo de estilos

const Repositories = () => {
    return (
        <div className="repositories">
            <h2>Mis Proyectos</h2>
            <div className="repository">
                <h3>Desarrollo de programas en Python</h3>
                <p>Consiste en la elaboración de programas con código python enfocados en suma de números, factoriales, etc.</p>
                <a href="https://github.com/Abiiijimm1/programas_python"><FaGithub className="github-icon" /> Ver en GitHub</a>
            </div>
            <div className="repository">
                <h3>Agregar Usuario en React Native</h3>
                <p>Agregar usuario usando React y JavaScript en una lista en la que se pueda visualizar.</p>
                <a href="https://github.com/Abiiijimm1/Agregar-usuario-en-React-Vite"><FaGithub className="github-icon" /> Ver en GitHub</a>
            </div>
            <div className="repository">
                <h3>Flutter</h3>
                <p>Se realiza "Hola Mundo" usando Flutter.</p>
                <a href="https://github.com/Abiiijimm1/flutter_hola_mundo"><FaGithub className="github-icon" /> Ver en GitHub</a>
            </div>
            <div className="repository">
                <h3>Sueldo empleado con PHP</h3>
                <p>Se debe saber cuál es el sueldo del empleado usando PHP.</p>
                <a href="https://github.com/Abiiijimm1/sueldo_empleado_php"><FaGithub className="github-icon" /> Ver en GitHub</a>
            </div>
            <div className="repository">
                <h3>JavaScript</h3>
                <p>Se encuentran proyectos como la suma de dos números un mini JavaScript.</p>
                <a href="https://github.com/Abiiijimm1/javascript"><FaGithub className="github-icon" /> Ver en GitHub</a>
            </div>
            <div className="repository">
                <h3>Programación Lógica y Funcional</h3>
                <p>Podremos encontrar códigoc como de Algoritmos Genéticos, Templado Simulado, Hill Climbing</p>
                <a href="https://github.com/Abiiijimm1/Programacion-Logica-y-Funcional"><FaGithub className="github-icon" /> Ver en GitHub</a>
            </div>
            <div className="repository">
                <h3>BFS</h3>
                <p>Tenemos trabajos como Viajes por carretera con A estrella, Puzle Lineal</p>
                <a href="https://github.com/Abiiijimm1/BSF"><FaGithub className="github-icon" /> Ver en GitHub</a>
            </div>
            {/* Agrega más proyectos según sea necesario */}
        </div>
    );
}

export default Repositories;
