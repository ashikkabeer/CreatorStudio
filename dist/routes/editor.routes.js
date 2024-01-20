"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.send('<h1>hello Editor</h1>');
});
exports.default = router;
//# sourceMappingURL=editor.routes.js.map