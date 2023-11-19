class Storage {
     openRequest = null

    constructor() {
        const openRequest = indexedDB.open("ProjectDb", 1);
        this.openRequest = openRequest
         openRequest.onupgradeneeded = function () {
            const db = openRequest.result
            if (!db.objectStoreNames.contains("ProjectStore")) { // если хранилище "ProjectStore" не существует
                db.createObjectStore("ProjectStore", {keyPath: 'id'}); // создаём хранилище
            }
        }
     }

     addProjectItem(projectItem) {
         const transaction = this.openRequest.result.transaction("ProjectStore", "readwrite");//создали транзакцию
        const projects = transaction.objectStore("ProjectStore");//получили хранилище
         projects.add(projectItem)
     }

     deleteProjectItem(itemId) {
         const transaction = this.openRequest.result.transaction("ProjectStore", "readwrite");//создали транзакцию
         const projects = transaction.objectStore("ProjectStore");//получили хранилище
         projects.delete(itemId)
     }

     getProjectItems() {
         return new Promise(function (resolve, reject) {
             const openRequest = indexedDB.open("ProjectDb")
             openRequest.onsuccess = function () {
                 const db = openRequest.result;
                 const transaction = db.transaction("ProjectStore");
                 const projects = transaction.objectStore("ProjectStore");
                 const projectStoreRequest = projects.getAll();
                 let store = null;

                 projectStoreRequest.onsuccess = function (e) {
                     store = projectStoreRequest.result
                     resolve(store)
                 }
                 transaction.oncomplete = function (e) {
                     db.close()
                     resolve(store)
                 }
             }
         })
     }
}
export default new Storage();