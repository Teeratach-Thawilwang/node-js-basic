const connect = false;
const url1 = "page/file1.json";
const url2 = "page/file2.json";
const url3 = "page/file3.json";

function dowloading(url) {
    console.log("กำลังโหลด " + url);
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            if (connect) {
                resolve("โหลด" + url + " สำเร็จ");
            } else {
                reject("เกิดข้อผิดพลาด");
            }
        }, 3000);
    });
}

// Async & Await
async function start() {
    try {
        console.log(await dowloading(url1));
    } catch (err) {
        console.log(err);
    }

    try {
        console.log(await dowloading(url2));
    } catch (err) {
        console.log(err);
    }

    try {
        console.log(await dowloading(url3));
    } catch (err) {
        console.log(err);
    }
}

start();