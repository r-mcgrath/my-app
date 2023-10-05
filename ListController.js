const ListItem = require('./ListModel.js');

const ListController = {

  async addListItem(req, res) {
    const listItem = new ListItem({
      itemName: req.body.itemName,
      quantity: req.body.quantity
      });
      try{
        await listItem.save();
        res.status(200).send();
    } catch (err) {
      res.status(400).json({message: 'Error in adding item to list'});
    }
  },

  async getList(req,res) {
    try{
        const items = await ListItem.find();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({message: 'Server error'});
    }
  },

  async deleteListItem(req,res){
    const listItem = req.params.listItem;
    try{
        const deletedItem = await ListItem.findOneAndDelete(listItem);
        if (!deletedItem) {
            return res.status(404).json({message: "Item not found"});
        }
    } catch (err) {
        res.status(500).json({message: "server error"});
    }

  },


  async updateListItem(req,res){ 
    const itemName = req.body.itemName;
    const newQuantity = req.body.quantity;

    try {
        const updatedListItem = await ListItem.findOneAndUpdate(
            ListItem,
            { quantity: newQuantity }
        );
        if (!updateListItem) {
            return res.status(404).json({message: 'Item not found'});
        }
    } catch (err) {
        res.status(500).json({message: 'Server Error'});
    }

  },
};




module.exports = ListController;
//getList
//addListItem
//deleteListItem
//updateListItem
