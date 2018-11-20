export default {
    createDB(name,version){ // 创建数据库
        const request = window.indexedDB.open(name, version); // 新建或打开指定版本名字为name的数据库
        let db;
        request.onupgradeneeded = e => { // 如果指定的版本号，大于数据库的实际版本号，就会发生数据库升级事件
            db = e.target.result;
        };
        request.onsuccess = e => { // 数据库成功打开的函数
            db = e.target.result;
        };
        request.onerror = e => { // 数据库打开失败的函数
            db = e.target.result;
        };
    },
    closeDB(db){ // 关闭数据库
        db.close();
    },
    deleteDB(name){ // 删除数据库
        window.indexedDB.deleteDatabase(name);
    }

}