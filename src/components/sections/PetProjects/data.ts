interface PetProject {
    title: string;
    description: string;
    githubUrl: string;
    deployUrl?: string;
    tags: string[];
}

export const petProjects: PetProject[] = [
    {
        title: 'Portfolio Website',
        description:
            'Личный сайт-портфолио на Next.js 16 с тёмной/светлой темой, плавной анимацией и адаптивной вёрсткой. Использованы shadcn/ui, Framer Motion и Tailwind CSS v4.',
        githubUrl: 'https://github.com/Groghrus/portfolio',
        deployUrl: 'https://portfolio-kdv.vercel.app/',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
];
