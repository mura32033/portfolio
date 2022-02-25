export const state = () => ({
    works: {},
    about: {
        skill: {},
        award: {},
        present: {},
        history: {}
    },
    info: {}
})
export const mutations = {
    setWorks(state, payload) {
        state.works = payload
    },
    setInfo(state, payload) {
        state.info = payload
    },
    setSkill(state, payload) {
        state.about.skill = payload
    },
    setAward(state, payload) {
        state.about.award = payload
    },
    setPresent(state, payload) {
        state.about.present = payload
    },
    setHistory(state, payload) {
        state.about.history = payload
    }
}

export const actions = {
    async getWorks({ commit }) {
        const works = await this.$content('json/works').fetch()
        commit('setWorks', works)
    },
    async getInfo({ commit }) {
        const info = await this.$content('json/about', 'info').fetch()
        commit('setInfo', info)
    },
    async getSkill({ commit }) {
        const data = await this.$content('json/about', 'skill').fetch()
        commit('setSkill', data)
    },
    async getAward({ commit }) {
        const data = await this.$content('json/about').where({slug: 'award'}).fetch()
        commit('setAward', data)
    },
    async getPresent({ commit }) {
        const data = await this.$content('json/about').where({slug: 'present'}).fetch()
        commit('setPresent', data)
    },
    async getHistory({ commit }) {
        const data = await this.$content('json/about').where({slug: 'history'}).fetch()
        commit('setHistory', data)
    }
}