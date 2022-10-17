const { Storage } = require('@google-cloud/storage');

module.exports = {
    uploadFileInBucket: async function (apiVelibJson) {
        const bucketName = process.env.BUCKET_NAME;
        const storage = new Storage();
        const filename = `${Date.now()}_${Math.floor(Math.random() * 64)}`;

        const bucket = storage.bucket(bucketName);

        await storage.bucket(bucketName).file(filename).save(JSON.stringify(apiVelibJson));
    }
};