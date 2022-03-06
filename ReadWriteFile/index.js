const fs = require("fs");

// Read file synchronous
const data = fs.readFileSync("./File/file_1.txt", "utf-8")
console.log(data)

// Write file synchronous
const textWs = data + "\nThis line was written by writeFileSync().\nWhen " + (new Date()) + "."
fs.writeFileSync("./File/file_1.txt", textWs)
console.log("Write file success.")

// Append file synchronous
const textAs = "\nThis line was written by appendFileSync().\nWhen " + (new Date()) + "."
fs.appendFileSync("./File/file_1.txt", textAs)
console.log("Write file success.")


// Read file Asynchronous
fs.readFile("./File/file_1.txt", "utf-8", (err, text) => {
    if (err) {
        return console.log("เกิดข้อผิดพลาด", err);
    }
    console.log(text);
})
console.log("Read file finish.")

// Write file Asynchronous : replace mode
const textW = "This line was written by writeFile().\nWhen " + (new Date()) + "."
fs.writeFile("./File/file_1.txt", textW, (err) => {
    if (err) {
        return console.log("เกิดข้อผิดพลาด", err);
    }
});
console.log("Write file finish.")

// Append file Asynchronous : append mode
const textA = "\nThis line was written by appendFile().\nWhen " + (new Date()) + "."
fs.appendFile("./File/file_1.txt", textA, (err) => {
    if (err) throw err;
    console.log('Append file success.');
})
console.log("Append file finish.")


// Rename file Asynchronous
fs.rename('./File/file_1.txt', './File/file_2.txt', (err) => {
    if (err) throw err;
    console.log('Rename file success.');
});
console.log("Rename file finish.")


// These method we should know.
// ** Synchronous Method ***
// readFileSync, writeFileSync, appendFileSync

// ** ASynchronous Method ***
// readFile, writeFile, appendFile, unlink() : delete file, rename