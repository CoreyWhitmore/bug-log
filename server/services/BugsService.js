import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"


class BugService {
    async getAll() {
        return await dbContext.Bugs.find({}).populate("creator", "name picture")
    }

    async getById(id) {
        let data = await dbContext.Bugs.findOne({ _id: id }).populate("creator", "name picture")
        if (!data) {
            throw new BadRequest("Invalid ID or you do not own this bug")
        }
        return data
    }
    async getNotes(bugId) {
        debugger
        return await dbContext.Notes.find({ bug: bugId }).populate("creator", "name picture")
    }

    async create(rawData) {
        let data = await dbContext.Bugs.create(rawData)
        return data
    }

    async edit(id, userEmail, update) {
        let data = await dbContext.Bugs.findOneAndUpdate({ _id: id, creatorEmail: userEmail }, update, { new: true })
        if (!data) {
            throw new BadRequest("Invalid ID or you did not post this bug");
        }
        return data;
    }

    async delete(id, userEmail) {
        let data = await dbContext.Bugs.findOneAndRemove({ _id: id, creatorEmail: userEmail });
        if (!data) {
            throw new BadRequest("Invalid ID or you did not post this bug");
        }
    }

}


export const bugService = new BugService()