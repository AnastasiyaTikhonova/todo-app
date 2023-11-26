class Storage {
     openRequest = null

    constructor() {
        const openRequest = indexedDB.open("ProjectsDB", 1);
        this.openRequest = openRequest
         openRequest.onupgradeneeded = function () {
            const db = openRequest.result
            if (!db.objectStoreNames.contains("Store")) {
                db.createObjectStore("Store", {keyPath: 'id'});
            }
        }
     }

     addProjectItem(projectItem) {
         const transaction = this.openRequest.result.transaction("Store", "readwrite");//создали транзакцию
         const projects = transaction.objectStore("Store");//получили хранилище
         projects.add(projectItem)
     }

     deleteProjectItem(itemId) {
         const transaction = this.openRequest.result.transaction("Store", "readwrite");//создали транзакцию
         const projects = transaction.objectStore("Store");//получили хранилище
         projects.delete(itemId)
     }

     getStore() {
         return new Promise(function (resolve, reject) {
             const openRequest = indexedDB.open("ProjectsDB")
             openRequest.onsuccess = function () {
                 const db = openRequest.result;
                 const transaction = db.transaction("Store");
                 const storeItems = transaction.objectStore("Store");
                 const storeRequest = storeItems.getAll();
                 let store = null;

                 storeRequest.onsuccess = function (e) {
                     store = storeRequest.result
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
