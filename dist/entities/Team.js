"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var Team = /** @class */ (function () {
    function Team() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Team.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Team.prototype, "pokemonId");
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Team.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Team.prototype, "image");
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Team.prototype, "colorOne");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Team.prototype, "colorTwo");
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Team.prototype, "teamName");
    Team = __decorate([
        (0, typeorm_1.Entity)("teams")
    ], Team);
    return Team;
}());
exports["default"] = Team;
