class TaskStorage{
    openRequest = null
    id = null

    constructor(id) {
        const openRequest = indexedDB.open("TaskDb", 1);
        this.openRequest = openRequest
        this.id = id
        openRequest.onupgradeneeded = function () {
            const db = openRequest.result
            if (!db.objectStoreNames.contains(id)) { // если хранилище с указанным id не существует
                db.createObjectStore(id, {keyPath: 'id'}); // создаём хранилище
            }
        }
    }



    addTaskItem(taskItem) {
        const transaction = this.openRequest.result.transaction(this.id, "readwrite");//создали транзакцию
        const projects = transaction.objectStore(this.id);//получили хранилище
        projects.add(taskItem)
    }

    deleteTaskItem(itemId) {
        const transaction = this.openRequest.result.transaction(this.id, "readwrite");//создали транзакцию
        const projects = transaction.objectStore(this.id);//получили хранилище
        projects.delete(itemId)
    }

    getTaskItems() {
        return new Promise(function (resolve, reject) {
            const openRequest = indexedDB.open("TaskDb")
            openRequest.onsuccess = function () {
                const db = openRequest.result;
                const transaction = db.transaction(this.id);
                const tasks = transaction.objectStore(this.id);
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