import ImageKit from '@imagekit/nodejs';
import postModel from "../models/posts.model.js"
import jwt from "jsonwebtoken"

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY

});


async function postController(req, res) {
    const fileData = await imagekit.files.upload({
        file: req.file.buffer.toString("base64"),
        fileName: "images"
    });
    console.log("fileData",fileData.url)
    const token = req.cookies.token
    if(!token){
        return res.status(409).json({
            message:"UNAUTHORISED ACCESS"
        })
    }

    const decoded=jwt.verify(token,process.env.JWT_SECRET)
    console.log("decoded",decoded)


    const createPost = await postModel.create({
        caption:req.body.caption,
        imgUrl: fileData.url,
        user: decoded.id
    })

    res.status(200).json({
        message: "post created successfully",
        createPost
    })

}


export default postController 