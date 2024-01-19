"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    console.log('hello world');
    res.send('hello world');
});
exports.default = router;
//# sourceMappingURL=editor.routes.js.map