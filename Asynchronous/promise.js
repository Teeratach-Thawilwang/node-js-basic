const connect = true;
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

// dowloading(url1)
//     .then(function(val) {
//         console.log(val);
//     })
//     .catch(function(err) {
//         console.log(err);
//     })
//     .finally(() => {
//         console.log("จบการทำงาน");
//     });

// dowload 5 files with promise hell style.
// dowloading(url1).then(
//     function(val) {
//         console.log(val);
//         dowloading(url2).then(
//             function(val) {
//                 console.log(val);
//             }
//         )
//     }
// )

// Promise shorthand but still be hell style when we need to add catch and finnally.
dowloading(url1)
    .then(function(val) {
        console.log(val);
        return dowloading(url2);
    })
    .then(function(val) {
        console.log(val);
        return dowloading(url3);
    })
    .then(function(val) {
        console.log(val);
    });