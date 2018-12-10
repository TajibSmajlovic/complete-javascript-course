import axios from 'axios'

export default class Search {
    constructor(query) {
        this.query = query
    }

    async getResults() {
        const proxy = 'https://cors-anywhere.herokuapp.com/'
        const key = '6a6fbfa2f18d6ede732300746b3e7f3e'

        try {
            const result = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`)
            this.results = result.data.recipes
            // console.log(this.results)
        } catch (e) {
            alert(e)
        }
    }
}