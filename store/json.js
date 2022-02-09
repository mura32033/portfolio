import works from '@/assets/json/works.json'
import about from '@/assets/json/about.json'

export const state = () => ({
    works: works,
    about: about
})

export const getters = {
    getWorks: (state) => {
        return state.works
    },
    getAbout: (state) => {
        return state.about
    },
}