// // Callback function
// function calculate(x, y, callback) {
//     console.log("กำลังคำนวณ...");
//     setTimeout(() => {
//         let cal = x + y;
//         callback(cal);
//     }, 3000);
// }

// function display(result) {
//     console.log("ผลบวก = " + result);
// }

// // Use callback
// calculate(100, 50, display);

// calculate(100, 50, (result) => {
//     console.log("ผลบวก = " + result)
// });


// เขียนโปรแกรมดาวโหลดไฟล์
function dowloading(url, callback) {
    console.log(`กำลังดาวโหลด ${url}...`)
    setTimeout(() => {
        callback()
    }, 3000);
}

function complete() {
    console.log("ดาวโหลดเรียบร้อย!")
}

dowloading("somepage/file.json", complete)