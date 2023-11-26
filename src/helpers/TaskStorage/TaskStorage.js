// export default class TaskStorage{
//     openRequest = null
//
//     constructor(id) {
//         const openRequest = indexedDB.open(id, 1);
//         this.openRequest = openRequest
//         this.id = id
//         openRequest.onupgradeneeded = function () {
//             const db = openRequest.result
//             if (!db.objectStoreNames.contains(id)) {
//                 db.createObjectStore(id, {keyPath: 'id'});
//             }
//         }
//     }
//
//    getTaskItems(id) {
//         return new Promise(function (resolve, reject) {
//             const openRequest = indexedDB.open(id, 1);
//             openRequest.onsuccess = function () {
//                 const db = openRequest.result;
//                     const transaction = db.transaction(id);
//                     const tasks = transaction.objectStore(id);
//                     const taskStoreRequest = tasks.getAll();
//                     let store = null;
//
//                     taskStoreRequest.onsuccess = function (e) {
//                         store = taskStoreRequest.result
//                         console.log('store from api', store)
//                         resolve(store)
//                     }
//                     transaction.oncomplete = function (e) {
//                         db.close()
//                         resolve(store)
//                     }
//                 }
//             })
//    }
// }
//
//
//
