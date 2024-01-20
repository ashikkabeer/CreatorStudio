"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const morgan_1 = __importDefault(require("morgan"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const PORT = process.env.PORT || 3000;
// Middleware for routes
app.use('/', index_routes_1.default);
app.use(express_1.default.static('public'));
app.use((0, morgan_1.default)('dev'));
// Middleware to parse JSON and URL-encoded data
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// Error handling middleware for handling 404 errors
app.use((req, res, next) => {
    res.status(404).json({ error: 'Not Found' });
});
// Generic error handling middleware for other errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});
//start the server
(() => {
    app.listen(PORT, () => {
        //connect to db and then connect to server
        console.log(`http://localhost:${PORT}/`);
    });
})();
exports.default = app;
//# sourceMappingURL=app.js.map