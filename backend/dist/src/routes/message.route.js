"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const protectroute_1 = require("../middleware/protectroute");
const message_controllers_1 = require("../controllers/message.controllers");
const messageRoute = (0, express_1.Router)();
messageRoute.get("/conversation", protectroute_1.protectroute, message_controllers_1.getUserForChat);
messageRoute.post('/send/:id', protectroute_1.protectroute, message_controllers_1.sendMessage);
messageRoute.get('/:id', protectroute_1.protectroute, message_controllers_1.getMessages);
exports.default = messageRoute;