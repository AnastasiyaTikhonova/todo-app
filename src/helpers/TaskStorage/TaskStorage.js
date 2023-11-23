class TaskStorage{
    openRequest = null

    constructor() {
        const openRequest = indexedDB.open("TaskDb", 1);
        this.openRequest = openRequest
        openRequest.onupgradeneeded = function () {
            const db = openRequest.result
            if (!db.objectStoreNames.contains("tasks")) { // если хранилище с указанным id не существует
                db.createObjectStore("tasks", {keyPath: 'id'}); // создаём хранилище
            }
        }
    }

    getTaskItems() {
        return new Promise(function (resolve, reject) {
            const openRequest = indexedDB.open("TaskDb")
            openRequest.onsuccess = function () {
                const db = openRequest.result;
                console.log('db', db)
                const transaction = db.transaction("tasks");
                const tasks = transaction.objectStore("tasks");
                const taskStoreRequest = tasks.getAll();
                let store = null;

                taskStoreRequest.onsuccess = function (e) {
                    store = taskStoreRequest.result
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

export default new TaskStorage();

