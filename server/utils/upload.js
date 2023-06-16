import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv';
dotenv.config();
const storage = new GridFsStorage({
    url: `mongodb://lucifer89240:iacozSD8UYYPb2Zm@ac-mjnvtcw-shard-00-00.ore8yz1.mongodb.net:27017,ac-mjnvtcw-shard-00-01.ore8yz1.mongodb.net:27017,ac-mjnvtcw-shard-00-02.ore8yz1.mongodb.net:27017/?ssl=true&replicaSet=atlas-6t16bz-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 