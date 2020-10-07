const express = require("express")
const Note = require("../models/note")
const router = express.Router()
router.get("/", async (req,res) => {
    try{
        const notes = await Note.find()
        res.json(notes)
    } catch(err){
        res.status(500).json({message: err.message})
    }
})
router.get("/:id", async (req,res) => {
    try{
        const notes = await Note.findOne({"_id":req.params.id})
        res.json(notes)
    }
    catch(err){
        res.status(400).json({message: err.message})
    }
})
router.post("/", async (req,res) => {
    console.log(req.body.subject)
    const note = new Note({
        subject: req.body.subject,
        noteText: req.body.noteText
    })
    try
    {
        const newNote = await note.save()
        res.status(201).json(newNote)
    }
    catch(err)
    {
        res.status(400).json({message: err.message})
    }
})
router.patch("/:id", async (req,res) => {
    try{
        const note = await Note.findOne({"_id":req.params.id})
        note.subject = req.body.subject
        note.noteText = req.body.noteText
        await note.save()
        res.status(200).send("Update success!")
    }
    catch(err){
        res.status(400).json({message: err.message})
    }
})
router.delete("/:id", async (req,res) => {
    try{
        await Note.deleteOne({"_id":req.params.id})
        res.status(200).send("Deleted Successfully")
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})
module.exports = router