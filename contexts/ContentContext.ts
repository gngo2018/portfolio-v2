import { createContext, useContext } from 'react'

export type ContentContextProps = {
    homeIsOpen: boolean,
    experienceIsOpen: boolean,
    projectsIsOpen: boolean,
    hobbiesIsOpen: boolean,
    setHomeIsOpen: (h: boolean) => void,
    setExperienceIsOpen: (e: boolean) => void,
    setProjectsIsOpen: (p: boolean) => void,
    setHobbiesIsOpen: (h: boolean) => void
}

const contentContextDefaults: ContentContextProps = {
    homeIsOpen: false,
    experienceIsOpen: false,
    projectsIsOpen: false,
    hobbiesIsOpen: false,
    setHomeIsOpen: () => {},
    setExperienceIsOpen: () => {},
    setProjectsIsOpen: () => {},
    setHobbiesIsOpen: () => {}
}

export const ContentContext = createContext(contentContextDefaults);

export function useContentContext() {
    return useContext(ContentContext);
}