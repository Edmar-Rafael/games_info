import api, {endpoints} from './index'


export async function getGames(page: number, search: string, platforms: {}) {
  const { get } = await api
  return get(endpoints.games(page, search, platforms)) 
}

export async function getGameById(id: number) {
  const { get } = await api
  return get(endpoints.gameById(id)) 
}