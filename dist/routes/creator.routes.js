"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.send('<h1>hello Creator</h1>');
});
exports.default = router;
//# sourceMappingURL=creator.routes.js.map