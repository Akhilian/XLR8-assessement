import Category from './Category'

class Capability {
    constructor({ id, name, description, category }) {
        this.id = id
        this.name = name
        this.description = description
        this.category = category
    }

    static fromAirtable(record) {
        const id = record.id
        const name = record.get('Name')
        const description = record.get('Description')

        const category = new Category({
            id: record.get('Category')[0],
            name: record.get('CategoryName')[0]
        })

        return new Capability({ id, name, description, category })
    }
}

export default Capability