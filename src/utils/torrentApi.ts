let serverAddress = "/";

if (serverAddress.substring(serverAddress.length - 1) !== "/") {
  serverAddress = `${serverAddress}/`;
}

const baseURL = `${serverAddress}api/v2/`;

interface Credential {
  username: string;
  password: string;
}

export const torrentApi = {
  getVersion: async () => {
    return await fetch(baseURL + "app/version",{
      credentials: "include"
    }).then((response) => {
      if(response.status == 200) {
        return response.text()}
      else {
        throw new Error("Error");
      }}) as Promise<number>;
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
      }}
    );
  },

  logout: async () => {
    return await fetch(baseURL + "auth/logout", {
      method: "POST"
    });
  },

  getTorrents: async () => {
    return await fetch(baseURL + "torrents/info", {
      credentials: "include", // include, *same-origin, omit   
    }).then((response) => {
      if(response.status == 200) {
        return response.json()}
      else {
        throw new Error("Error");
      }}) as Promise<JSON>;
  },

  getProperties: async (hash: string) => {
      return await fetch(baseURL + "torrents/properties?" + `hash=${hash}`, {
      credentials: "include"
    }).then((response) => {
      if(response.status == 200) {
        return response.json()}
      else {
        throw new Error("Error");
      }}) as Promise<JSON>;
  },

  sync: async (rid: number): Promise<TorrMainData> => {
    const url = new URL(baseURL + "sync/maindata")
    url.search = new URLSearchParams({
      rid: rid});
    const data  = await fetch(url, {
      credentials: "include"
    })

    return data;
  },

  resume: async (hash = "") => {
    return await fetch(baseURL + "torrents/resume", {
      method: "POST",
      body: `hashes=${hash}`,
      credentials: "include",
    });
  },

  resumeAll: async () => {
    return await fetch(baseURL + "torrents/resume", {
      method: "POST",
      body: `hashes=all`,
      credentials: "include",
    });
  },

  pause: async (hash = "") => {
    return await fetch(baseURL + "torrents/pause", {
      method: "POST",
      body: `hashes=${hash}`,
      credentials: "include",
    });
  },

  pauseAll: async () => {
    return await fetch(baseURL + "torrents/pause", {
      method: "POST",
      body: `hashes=all`,
      credentials: "include",
    });
  },

  remove: async (hash = "", deleteFiles = 'false') => {
    return await fetch(baseURL + "torrents/delete", {
      method: "POST",
      body: `hashes=${hash}&deleteFiles=${deleteFiles}`,
      credentials: "include",
    });
  },
  
  getCategories: async (): Promise<TorrCategories> => {
    return await fetch(baseURL + "torrents/categories", {
      credentials: "include",
    }).then((response) => {
      if(response.status == 200) {
        return response.json()}
      else {
        throw new Error("Error");
      }}) as Promise<TorrCategories>;
  },

  addCategory: async (name: string, path: string) => {
    return await fetch(baseURL + "torrents/createCategory", {
      method: "POST",
      body: `category=${name}&savePath=${path}`,
      credentials: "include",
    }).then((response) => {
      if(response.status == 200) {
        return response.status}
      else {
        throw new Error("Error");
      }}) as Promise<string>;
  },

  removeCategories: async (category: string) => {
    return await fetch(baseURL + "torrents/removeCategories", {
      method: "POST",
      body: `categories=${category}`,
      credentials: "include",
    }).then((response) => {
      if(response.status == 200) {
        return response.status
      }
      else {
        throw new Error("Error");
      }}) as Promise<string>;
  },

  getTags: async (): Promise<TorrCategories> => {
    return await fetch(baseURL + "torrents/tags", {
      credentials: "include",
    }).then((response) => {
      if(response.status == 200) {
        return response.json()}
      else {
        throw new Error("Error");
      }}) as Promise<TorrCategories>;
  },

  addTorrent: async (file) => {
    return await fetch(baseURL + "torrents/add", 
      {
        method: "POST",
        body: `torrents=${file}`,
        credentials: "include",
      }
    ).then((response) => {console.log(response)})
  },

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
