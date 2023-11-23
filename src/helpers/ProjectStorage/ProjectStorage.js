class ProjectStorage {
     openRequest = null

    constructor() {
        const openRequest = indexedDB.open("ProjectDb", 1);
        this.openRequest = openRequest
         openRequest.onupgradeneeded = function () {
            const db = openRequest.result
            if (!db.objectStoreNames.contains("projects")) { // если хранилище "ProjectStore" не существует
                db.createObjectStore("projects", {keyPath: 'id'}); // создаём хранилище
            }
        }
     }


     addProjectItem(projectItem) {
         const transaction = this.openRequest.result.transaction("projects", "readwrite");//создали транзакцию
        const projects = transaction.objectStore("projects");//получили хранилище
         projects.add(projectItem)
     }

     deleteProjectItem(itemId) {
         const transaction = this.openRequest.result.transaction("projects", "readwrite");//создали транзакцию
         const projects = transaction.objectStore("projects");//получили хранилище
         projects.delete(itemId)
     }

     getProjectItems() {
         return new Promise(function (resolve, reject) {
             const openRequest = indexedDB.open("ProjectDb")
             openRequest.onsuccess = function () {
                 const db = openRequest.result;
                 const transaction = db.transaction("projects");
                 const projects = transaction.objectStore("projects");
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
export default new ProjectStorage();