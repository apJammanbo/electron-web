import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  sendMessage: (message) => ipcRenderer.invoke("web_api", message),
  onMessage: (callback) => ipcRenderer.on("web_api", callback),
});
