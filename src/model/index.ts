export interface ExperienceType {
    title: string
    company_name: string
    icon: string
    iconBg: string
    date: string
    points: string[]
}

export interface ProjectType {
    name: string
    description: string
    tags: { name: string; color: string }[]
    image: string
    source_code_link: string
}

export interface PublishType {
    title: string,
    journal?: string,
    arxiv: string,
    authors: string[],
}
