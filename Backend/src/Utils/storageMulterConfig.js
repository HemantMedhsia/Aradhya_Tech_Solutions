import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the path to the 'uploads' directory
const uploadPath = path.join(__dirname, '../../public/uploads/');

// Configure multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log("Saving file to:", uploadPath); // Debugging output
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        console.log("Saving file with name:", file.originalname); // Debugging output
        cb(null, file.originalname);
    }
});

// Initialize multer with the configured storage
export const upload2 = multer({ 
    storage: storage,
    fileFilter: (req, file, cb) => {
        const filetypes = /csv/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = file.mimetype === 'text/csv';

        if (extname && mimetype) {
            return cb(null, true);
        } else {
            cb(new Error('Only CSV files are allowed!'));
        }
    }
});
