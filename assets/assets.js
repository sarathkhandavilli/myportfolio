
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import intellij from './intellij.png' ;
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile_img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.jpg';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import frontend from './frontend.png' ;
import backend from './backend.png' ;
import uiux from './uiux.png' ;
import github from './github.png' ;
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import spring from './spring.png';
import framework from './framework.png';

export const assets = {
    framework ,
    spring ,
    github ,
    uiux ,
    frontend ,
    backend ,
    intellij ,
    user_image: null,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
 
};

export const workData = [
    {
        title: 'Netflix User Interface Clone',
        description: 'Developed a responsive front-end clone of the Netflix UI, focusing on enhancing user experience and functionality across multiple devices',
        link : 'https://github.com/sarath4746/netflix'
        // bgImage: '/work-1.png',
    },
    {
        title: 'Crop Detection Using IOT',
        description: 'Developed an IoT-based solution for real-time crop identification to support agricultural insights and management. Utilized an Arduino Uno paired with a camera module to capture crop images, and deployed machine learning algorithms for accurate crop classification.',
        // bgImage: '/work-2.png',
    },
    {
        title: ' Saloon Appointment Booking System',
        description: 'Developed secure RESTful APIs with Spring Boot for user and order management, protected by JWT authentication. I built a responsive frontend using React and integrated it with the backend services. I managed relational data in MySQL and containerized the services using Docker for easy deployment.',
        // bgImage: '/work-2.png',
    },
    // {
    //     title: 'Photography site',
    //     description: 'Web Design',
    //     bgImage: '/work-3.png',
    // },
    // {
    //     title: 'UI/UX designing',
    //     description: 'UI/UX Design',
    //     bgImage: '/work-4.png',
    // },
]

export const serviceData = [
    { icon: assets.frontend, title: 'Frontend Development', description: 'As a frontend developer, I build dynamic and interactive user interfaces using ReactJS, HTML, CSS, and JavaScript. My focus is on creating responsive, fast-loading websites that deliver seamless user experiences and integrate smoothly with backend services.', link: '' },
    { icon: assets.backend, title: 'Backend Development', description: 'As a backend developer, I work with Spring Boot and Java to create server-side logic, manage databases, and develop APIs. I optimize performance and scalability to ensure efficient handling of large data volumes and build reliable, secure backend solutions.', link: '' },
    // { icon: assets.uiux, title: 'UI/UX design', description: 'As a UI/UX designer, I create user-centered designs that enhance the overall experience. Using tools like Figma, Sketch, and Adobe XD, I focus on building intuitive and visually appealing interfaces that improve usability and navigation.', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'Java, Javascript, Python, HTML, CSS, SQL' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
    { icon: assets.framework, iconDark: assets.framework, title: 'Frameworks', description: 'React Js, Next Js, Spring Boot' },
    // { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }

];

export const toolsData = [
    assets.vscode, assets.intellij, assets.firebase, assets.figma, assets.git , assets.spring
];