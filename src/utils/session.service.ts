import { ITask } from '@/store/models'

export const getItemFromSessionStorage = (key: string): { key: string; data: ITask[] } | null => {
  const item = window.sessionStorage.getItem(key)
  if (item !== null) {
    return { key, data: JSON.parse(item) }
  }
  return null
}
export const destroyItemFromSessionStorage = (key: string): void => {
  window.sessionStorage.removeItem(key)
}
export const setItemToSessionStorage = (key: string, data: ITask[]): void => {
  window.sessionStorage.setItem(key, JSON.stringify(data))
}
export default {
  getItemFromSessionStorage,
  destroyItemFromSessionStorage,
  setItemToSessionStorage
}
