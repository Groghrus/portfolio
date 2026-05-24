"use client";

import { useEffect, useState } from "react";

/**
 * Следит за тем, какая секция сейчас видна на экране
 * @param ids массив id секций, например ["#hero", "#about", "#features"]
 * @param offset отступ сверху, чтобы учитывать фиксированный хедер
 */
export const useScrollSpy = (ids: string[], offset = 100) => {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const handleScroll = () => {
            let current = "";
            const scrollPosition = window.scrollY + offset;
            const windowHeight = window.innerHeight;
            const documentHeight = document.body.scrollHeight;

            for (const id of ids) {
                const section = document.querySelector(id) as HTMLElement | null;
                if (section) {
                    const top = section.offsetTop;
                    const height = section.clientHeight;

                    // стандартная логика
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        current = id;
                        break;
                    }

                    // если дошли до конца страницы → активируем последний элемент
                    if (window.scrollY + windowHeight >= documentHeight - 10) {
                        current = ids[ids.length - 1];
                    }
                }
            }

            setActiveId(current);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [ids, offset]);

    return activeId;
};
