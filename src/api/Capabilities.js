class Capability {
    constructor({ id, name, description }) {
        this.id = id
        this.name = name
        this.description = description
    }

    static fromAirtable(record) {
        const id = record.id
        const name = record.get('Name')
        const description = record.get('Description')
        return new Capability({ id, name, description })
    }
}

export default Capability