import {
    backend,
    chineseChecker,
    courseBench,
    creator,
    css,
    docker,
    figma,
    git,
    html,
    javascript,
    mobile,
    mongodb,
    nodejs,
    notepad,
    reactjs,
    redux,
    shanghaitech,
    sia,
    mojito,
    trash,
    tailwind,
    threejs,
    typescript,
    web
} from "../assets/index.ts"
import { ExperienceType, ProjectType, PublishType } from "../model"

export const navLinks = [
    {
        id: "about",
        title: "About"
    },
    {
        id: "experience",
        title: "Experience"
    },
    {
        id: "publish",
        title: "Publications"
    },
    {
        id: "work",
        title: "Work"
    },
    {
        id: "contact",
        title: "Contact"
    }
]

const about =
    "I am currently an undergraduate student at ShanghaiTech University, proficient in a variety of programming languages including C/C++, Python, C#, Java, JavaScript, TypeScript, and Rust. My expertise extends to utilizing various frameworks such as Qt, MuJoCo, FastAPI, Django, WinForms, Spring Boot, Vue.js, React, and Tauri. My current focus lies in the domains of embodied AI and reinforcement learning. With a rapid learning pace and a strong aptitude for collaborative work, I am eager to contribute to innovative projects and tackle challenging problems in the field."

const services = [
    {
        title: "Web Developer",
        icon: web
    },
    {
        title: "Python Developer",
        icon: backend
    },
    {
        title: "Embodied Engineer",
        icon: mobile
    },
    {
        title: "Content Creator",
        icon: creator
    }
]

const technologies = [
    {
        name: "HTML 5",
        icon: html
    },
    {
        name: "CSS 3",
        icon: css
    },
    {
        name: "JavaScript",
        icon: javascript
    },
    {
        name: "TypeScript",
        icon: typescript
    },
    {
        name: "React JS",
        icon: reactjs
    },
    {
        name: "Redux Toolkit",
        icon: redux
    },
    {
        name: "Tailwind CSS",
        icon: tailwind
    },
    {
        name: "Node JS",
        icon: nodejs
    },
    {
        name: "MongoDB",
        icon: mongodb
    },
    {
        name: "Three JS",
        icon: threejs
    },
    {
        name: "git",
        icon: git
    },
    {
        name: "figma",
        icon: figma
    },
    {
        name: "docker",
        icon: docker
    }
]

const experiences: ExperienceType[] = [
    {
        title: "Students in Shanghaitech",
        company_name: "Shanghaitech",
        icon: shanghaitech,
        iconBg: "#383E56",
        date: "Sep 2022 - Present",
        points: ["Studying in Shanghaitech", "major GPA: 3.79/4"]
    },
    {
        title: "A Member of Geekpie",
        company_name: "Geekpie",
        icon: shanghaitech,
        iconBg: "#E6DEDD",
        date: "Nov 2022 - Present",
        points: ["Web Development: CourseBench"]
    },
    {
        title: "Conducting Research in Lab",
        company_name: "Lumiani, Elan, 4DVLab",
        icon: shanghaitech,
        iconBg: "#383E56",
        date: "Jun 2023 - Jul 2024",
        points: [
            "Develop Plugins of Stable Diffusion",
            "Conducting Research on 3D Generation, Motion Understanding, and Embodied AI"
        ]
    }
]

const publishes: PublishType[] = [
    {
        title: "Sophia-in-Audition: Virtual Production with a Robot Performer",
        journal: "ACM MultiMedia 2024",
        arxiv: "2402.06978",
        authors: [
            "Taotao Zhou",
            "Teng Xu",
            "Dong Zhang",
            "Yuyang Jiao",
            "Peijun Xu",
            "Yaoyu He",
            "Lan Xu",
            "Jingyi Yu"
        ],
        teaser: sia
    },
    {
        title: "Mojito: LLM-Aided Motion Instructor with Jitter-Reduced Inertial Tokens",
        arxiv: "2502.16175",
        authors: ["Ziwei Shan", "Yaoyu He", "Chengfeng Zhao", "Jiashen Du", "Jingyan Zhang", "Jingyi Yu", "Lan Xu"],
        teaser: mojito
    }
]

const projects: ProjectType[] = [
    {
        name: "Chinese Checker AI Agent",
        description: "an AI agent to play Chinese Checker using RL and DLRL",
        tags: [
            {
                name: "Reinforcement Learning",
                color: "blue-text-gradient"
            },
            {
                name: "Deep Learning",
                color: "pink-text-gradient"
            },
            {
                name: "react",
                color: "green-text-gradient"
            }
        ],
        image: chineseChecker,
        source_code_link: "https://github.com/eniverz/CS181FinalProject"
    },
    {
        name: "CourseBench",
        description: "a website for students to search and review courses",
        tags: [
            {
                name: "vue",
                color: "blue-text-gradient"
            },
            {
                name: "vuetify",
                color: "pink-text-gradient"
            },
            {
                name: "scss",
                color: "green-text-gradient"
            }
        ],
        image: courseBench,
        source_code_link: "https://github.com/ShanghaitechGeekPie/coursebench-frontend"
    },
    {
        name: "Qt Notepad",
        description: "a simple notepad written in C++ with Qt framework",
        tags: [
            {
                name: "C++",
                color: "blue-text-gradient"
            },
            {
                name: "Qt",
                color: "pink-text-gradient"
            }
        ],
        image: notepad,
        source_code_link: "https://github.com/eniverz/QtNotepad"
    },
    {
        name: "zsh-trashz",
        description: "a zsh plugin to move files to trash",
        tags: [
            {
                name: "zsh",
                color: "blue-text-gradient"
            },
            {
                name: "shell",
                color: "pink-text-gradient"
            }
        ],
        image: trash,
        source_code_link: "https://github.com/eniverz/zsh-trashz"
    }
]

const contact = {
    mail: "heyy2022@shanghaitech.edu.cn"
}

export { about, services, technologies, experiences, publishes, projects, contact }
