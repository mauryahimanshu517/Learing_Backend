import ImageKit from '@imagekit/nodejs';

console.log("process.env.IMAGEKIT_PRIVATE_KEY", process.env.IMAGEKIT_PRIVATE_KEY)
const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});


async function postController(req, res) {
    console.log(req.body, req.file)
    const fileData = await imagekit.files.upload({
        file: req.file.buffer.toString("base64"),
        fileName: "images"
    });
    res.send(fileData)
}


export default postController 