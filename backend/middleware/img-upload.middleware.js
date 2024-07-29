import multer from 'multer';

const upload = multer({ dest: "products/" });

export default upload;