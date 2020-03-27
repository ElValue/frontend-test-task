export const getItemFromSessionStorage = (key: string): { key: string; data: [] } | null => {
  const item = window.sessionStorage.getItem(key)
  if (item !== null) {
    return { key, data: JSON.parse(item) }
  }
  return null
}
export const destroyItemFromSessionStorage = (key: string): void => {
  window.sessionStorage.removeItem(key)
}
export const setItemToSessionStorage = (key: string, data: string | []): void => {
  window.sessionStorage.setItem(key, JSON.stringify(data))
}
export default {
  getItemFromSessionStorage,
  destroyItemFromSessionStorage,
  setItemToSessionStorage
}
