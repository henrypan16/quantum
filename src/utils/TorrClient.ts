import {
  TorrTorrentInfo,
} from "./types";

let serverAddress = "http://localhost:8080/";

if (serverAddress.substring(serverAddress.length - 1) !== "/") {
  serverAddress = `${serverAddress}/`;
}

const baseURL = `${serverAddress}api/v2/`;

interface Credential {
  username: string;
  password: string;
}

export const TorrClient = {
  getVersion: async () => {
    return await fetch(baseURL + "app/version",{
      credentials: "include"
    });
  }, //TESTED

  login: async ({username, password}: Credential) => {
    const usernameEncode = encodeURIComponent(username);
    const passwordEncode = encodeURIComponent(password);
    return await fetch( baseURL + "auth/login", {
      method: "POST",
      body: `username=${usernameEncode}&password=${passwordEncode}`,
      credentials: "include",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      }
    })
  },

  logout: async () => {
    return await fetch(baseURL + "auth/logout", {
      method: "POST"
    });
  },

  getTorrents: async (sortKey = "added_on", reverse = true): Promise<TorrTorrentInfo[]> => {
    const url = new URL(baseURL + "torrents/info")
    url.search = new URLSearchParams({
      sort: sortKey,
      reverse: reverse}).toString();

    const response = await fetch(url, {
      credentials: "include", // include, *same-origin, omit   
    });
    
    return response;
  },

  getProperties: async (hash: string) => {
    const url = new URL(baseURL + "torrents/properties")
    url.search = new URLSearchParams({
      hash: hash});
    return await fetch(url, {
      credentials: "include"
    });
  },

  // sync: async (rid: number): Promise<TorrMainData> => {
  //   const { data } = await APICall.get("sync/maindata", {
  //     params: {
  //       rid,
  //     },
  //   });

  //   return data;
  // },

  // resume: async (hash = "") => {
  //   return await APICall.post("torrents/resume", `hashes=${hash}`);
  // },

  // resumeAll: async () => {
  //   return await APICall.post("torrents/resume", `hashes=all`);
  // },

  // pause: async (hash = "") => {
  //   return await APICall.post("torrents/pause", `hashes=${hash}`);
  // },

  // pauseAll: async () => {
  //   return await APICall.post("torrents/pause", `hashes=all`);
  // },

  // remove: async (hash = "", deleteFiles = true) => {
  //   return await APICall.post(
  //     "torrents/delete",
  //     `hashes=${hash}&deleteFiles=${deleteFiles}`
  //   );
  // },

  // addTorrent: async (
  //   uploadType: "urls" | "torrents",
  //   file: string | File,
  //   category = ""
  // ) => {
  //   const formData = new FormData();
  //   formData.append("category", category);
  //   formData.append(uploadType, file);

  //   const { data } = await APICall.post("torrents/add", formData, {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   });

  //   return data;
  // },

  // getSettings: async (): Promise<TorrSettings> => {
  //   const { data } = await APICall.get("app/preferences");
  //   return data;
  // },

  // updateSettings: async (settings: TorrSettings) => {
  //   return await APICall.post(
  //     "app/setPreferences",
  //     `json=${JSON.stringify(settings)}`
  //   );
  // },

  // getCategories: async (): Promise<TorrCategories> => {
  //   const { data } = await APICall.get("torrents/categories");
  //   return data;
  // },

  // addCategory: async (name: string, path: string) => {
  //   return await APICall.post(
  //     "torrents/createCategory",
  //     `category=${name}&savePath=${path}`
  //   );
  // },

  // removeCategories: async (category: string) => {
  //   return await APICall.post(
  //     "torrents/removeCategories",
  //     `categories=${category}`
  //   );
  // },

  // saveCategory: async (category: string, savePath: string) => {
  //   return await APICall.post(
  //     "torrents/editCategory",
  //     `category=${category}&savePath=${savePath}`
  //   );
  // },

  // setTorrentCategory: async (hash = "", category = "") => {
  //   return await APICall.post(
  //     "torrents/setCategory",
  //     `hashes=${hash}&category=${category}`
  //   );
  // },

  // renameTorrent: async (hash: string, name: string) => {
  //   return await APICall.post("torrents/rename", `hash=${hash}&name=${name}`);
  // },

  // setAutoManagement: async (hash: string, enable: string) => {
  //   return await APICall.post(
  //     "torrents/setAutoManagement",
  //     `hashes=${hash}&enable=${enable}`
  //   );
  // },

  // toggleSequentialDownload: async (hash: string) => {
  //   return await APICall.post(
  //     "torrents/toggleSequentialDownload",
  //     `hashes=${hash}`
  //   );
  // },

  // toggleFirstLastPiecePrio: async (hash: string) => {
  //   return await APICall.post(
  //     "torrents/toggleFirstLastPiecePrio",
  //     `hashes=${hash}`
  //   );
  // },

  // getInstalledPlugins: async (): Promise<TorrPlugin[]> => {
  //   const { data } = await APICall.get("search/plugins");
  //   return data;
  // },

  // togglePluginEnabled: async (name: string, enable: boolean) => {
  //   const { data } = await APICall.post(
  //     "search/enablePlugin",
  //     `names=${name}&enable=${enable}`
  //   );
  //   return data;
  // },

  // installPlugin: async (path: string) => {
  //   await APICall.post("search/installPlugin", `sources=${path}`);
  // },

  // uninstallPlugin: async (name: string) => {
  //   const { data } = await APICall.post(
  //     "search/uninstallPlugin",
  //     `names=${name}`
  //   );
  //   return data;
  // },

  // getResults: async (id: number): Promise<TorrPluginSearchResultResponse> => {
  //   const { data } = await APICall.get("search/results", { params: { id } });
  //   return data;
  // },

  // stopSearch: async (id: number): Promise<TorrPluginSearchResultResponse> => {
  //   const { data } = await APICall.post("search/stop", `id=${id}`);
  //   return data;
  // },

  // deleteSearch: async (id: number) => {
  //   const { data } = await APICall.post("search/delete", `id=${id}`);
  //   return data;
  // },

  // createSearch: async (query: string): Promise<{ id: number }> => {
  //   const { data } = await APICall.post(
  //     "search/start",
  //     `pattern=${query}&plugins=enabled&category=all`
  //   );
  //   return data;
  // },
};
