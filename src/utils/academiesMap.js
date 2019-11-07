export const academiesMap = academies => (
  academies.map(academy => {
    const {
      _id, title, status, type, created, updated,
    } = academy
    return {
      id: _id, name: title, status, title, type, created, updated,
    }
  })
)
