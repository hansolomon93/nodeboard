import { Injectable } from "@nestjs/common";
import { UserRepository } from "./user.repository";

@Injectable()
export class Authservice {
    constructor(
        private userRepository: UserRepository,
    ){}
}