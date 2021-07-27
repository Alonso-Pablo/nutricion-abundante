import data from './data'

class Database {
  constructor() {}

  async getAll() {
    const allData = Object.values(data)
    return allData
  }

  async getById(id) {
    if (!Object.prototype.hasOwnProperty.call(allData, id)) {
      return null
    }

    const entry = allData[id]
    return entry
  }
}

module.exports = Database;