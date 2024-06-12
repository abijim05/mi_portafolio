import React from 'react';
import { FaGraduationCap, FaProjectDiagram, FaCode, FaUserFriends, FaSmile } from 'react-icons/fa';
import './Profile.css'; // Importa el archivo de estilos

const Profile = () => {
    return (
        <div className="profile">
            <h2>Perfil</h2>
            <div className="profile-info">
                <p><FaGraduationCap className="icon" /> Estudiante de Ingeniería en Sistemas Computacionales en el Tecnológico de Estudios Superiores de Jilotepec</p>
                <p><FaProjectDiagram className="icon" /> Proyectos:
                    <ul>
                        <li>Desarrollo de un sistema de monitoreo para prevenir la muerte de cuna</li>
                        <li>Desarrollo de un sistema de ventas para una carnicería</li>
                        <li>API de películas</li>
                        <li>Diseño de circuitos eléctricos</li>
                    </ul>
                </p>
                <p><FaCode className="icon" /> Habilidades:
                    <ul>
                        <li>Trabajo en equipo</li>
                        <li>Optimista y proactiva</li>
                        <li>Habilidades de programación </li>
                        <li>Conocimiento</li>
                        <li>Experiencia</li>
                        {/* Agrega más habilidades según sea necesario */}
                    </ul>
                </p>
                <p><FaUserFriends className="icon" /> Intereses:
                    <ul>
                        <li>Desarrollo de software</li>
                        <li>Tecnologías innovadoras</li>
                        <li>Proyectos innovadores</li>
                         {/* Agrega más intereses según sea necesario */}
                    </ul>
                </p>
                <p><FaSmile className="icon" /> Objetivos:
                    <ul>
                        <li>Contribuir con soluciones tecnológicas innovadoras</li>
                        <li>Aprender continuamente y mejorar mis habilidades</li>
                        <li>Colaborar en proyectos que tengan un impacto positivo</li>
                        {/* Agrega más objetivos según sea necesario */}
                    </ul>
                </p>
            </div>
        </div>
    );
}

export default Profile;
