import { callVelibApi } from '../services/velibApiManager.js'

import { uploadFileInBucket } from '../services/bucketManager.js'

export async function callVelibAction(req, res) {
    try {
        let datas = await callVelibApi();
        uploadFileInBucket(datas);
    } catch (err) {
        res.status(500);
    }
    
    res.status(200).json({"message": "Save OK"});

}
