"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
const index_routes_1 = __importDefault(require("../src/routes/index.routes"));
const router = express_1.default.Router(); // Create a new router instance
router.use('/', index_routes_1.default);
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.urlencoded({ extended: false }));
(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}/`);
    });
})();
//# sourceMappingURL=app.js.map