import { APIConnector } from './APIConnector';
import { GET } from '../constants/urlConstants';

export async function getAllStorages() {
  try {
    const { data } = await APIConnector.get(GET, {params: {type: "ALL_STORAGES", content: "json"}});
    console.log(data);

    if(data === null) {
      return [];
    }

    return data;
  } catch (e) {
    console.log("An error occured while fetching storage list.")
  }

  return [];
}
