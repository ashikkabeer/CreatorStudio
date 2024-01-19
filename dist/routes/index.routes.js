"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const creator_routes_1 = __importDefault(require("../routes/creator.routes"));
const editor_routes_1 = __importDefault(require("../routes/editor.routes"));
const router = (0, express_1.Router)();
router.use("/editor", editor_routes_1.default);
router.use("/creator", creator_routes_1.default);
exports.default = router;
//# sourceMappingURL=index.routes.js.map