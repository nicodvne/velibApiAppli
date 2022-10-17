import pkg from '@google-cloud/storage';
const { Storage } = pkg;

export async function uploadFileInBucket(apiVelibJson) {
    // The ID of your GCS bucket
    const bucketName = process.env.BUCKET_NAME;
    const storage = new Storage();
    const filename = `${Date.now()}_${Math.floor(Math.random() * 64)}`;

    const bucket = storage.bucket(bucketName);

    await storage.bucket(bucketName).file(filename).save(JSON.stringify(apiVelibJson));
}

