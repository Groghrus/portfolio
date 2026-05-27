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
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
        title: 'Todo App',
        description:
            'Классическое приложение для управления задачами с возможностью создания, редактирования, удаления и фильтрации задач. Реализована синхронизация с localStorage и drag-and-drop сортировка.',
        githubUrl: 'https://github.com/Groghrus/todo-app',
        deployUrl: 'https://todo-app.example.com',
        tags: ['React', 'TypeScript', 'dnd-kit', 'localStorage'],
    },
    {
        title: 'Weather Dashboard',
        description:
            'Виджет погоды с отображением текущей погоды и прогноза на 7 дней. Использует OpenWeatherMap API, поддерживает геолокацию и переключение между городами.',
        githubUrl: 'https://github.com/Groghrus/weather-dashboard',
        deployUrl: 'https://weather-dashboard.example.com',
        tags: ['React', 'API', 'Geolocation', 'Chart.js'],
    },
    {
        title: 'Code Snippets',
        description:
            'Коллекция примеров кода и алгоритмов на TypeScript с визуальной демонстрацией работы. Покрытие тестами Vitest, документация в стиле JSDoc.',
        githubUrl: 'https://github.com/Groghrus/code-snippets',
        tags: ['TypeScript', 'Vitest', 'Algorithms', 'JSDoc'],
    },
];
