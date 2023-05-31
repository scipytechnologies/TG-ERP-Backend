const express = require("express");
const inventorymanagementController = require("../controllers/inventorymanagementController");

const router = express.Router();

    // Post
    router.post("/createInventorymanagementCollection", inventorymanagementController.createInventorymanagementCollection)
    router.post("/addInventorymanagementDetails/:id", inventorymanagementController.addInventorymanagementDetails)

    // Get

    router.get("/getInventorymanagementDetails", inventorymanagementController.getInventorymanagementDetails)

    // Get by id

    router.get("/getidInventorymanagementDetails/:id", inventorymanagementController.getidInventorymanagementDetails)

    // Delete

    router.delete("/deleteInventorymanagementDetails/:id", inventorymanagementController.deleteInventorymanagementDetails)

    // Put

    router.put("/editInventorymanagementDetails/:id", inventorymanagementController.editInventorymanagementDetails)


module.exports = router;