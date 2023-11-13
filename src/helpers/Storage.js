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



// class Storage{
//     db = null;
//     //init();
//
//   constructor() {
//       this.db = openDB('projectDb', 1, db => {
//           db.createObjectStore('project', {keyPath: 'id'});
//       });
//
//   }
//
//
//
//     async getProjectItems() {
//         const tx = this.db.transaction('project');
//         const projectStore = tx.objectStore('project');
//         const projects = await projectStore.getAll();
//
//         if (projects.length) {
//             return projects
//         } else {
//             console.log('проектов нет')
//         }
//     }
//
//     async deleteProjectItem(id) {
//         let tx = this.db.transaction('project', 'readwrite');
//         await tx.objectStore('project').delete(id)
//     }
//
//     async addProjectItem(projectItem) {
//         let tx = this.db.transaction('project', 'readwrite');
//         await tx.objectStore('project').add(projectItem)
//     }
//
//
//
//
// }
//
// export default new Storage();
