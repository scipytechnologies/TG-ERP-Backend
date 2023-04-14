const Account = require('../model/accountSchema');
module.exports = {
  createAccount: async (req, res) => {
    const data = new Account({
      CreateAccount: req.body.CreateAccount,
      AccountName: req.body.AccountName,
      Phone: req.body.Phone,
      Description: req.body.Description,
      Supplier: req.body.Supplier,
      Website: req.body.Website
    });
    console.log(data);

    try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave);
      console.log("Details added");
    }
    catch (error) {
      res.status(400).json({ message: error.message })
    }
  },

  accountDetails: async (req, res) => {
    try {
      const account = await Account.find();
      res.json(account);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteAccount: async (req, res) => {
    try {
      const account = await Account.findByIdAndDelete(req.params.id);
      if (!account) throw Error("No user found");
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updateAccount: async (req, res) => {
    try {
      await Account.findByIdAndUpdate(req.params.id, {
        CreateAccount: req.body.CreateAccount,
        AccountName: req.body.AccountName,
        Phone: req.body.Phone,
        Description: req.body.Description,
        Supplier: req.body.Supplier,
        Website: req.body.Website,
      });
      res.status(200).json("Successfully updated");
    } catch (error) {
      console.error(error.message);
      res.status(500).json("ServerError");
    }
  },
  
  getEmployee: async (req, res) => {
    const account = req.params;
    try {
      const data = await Account.findById(account.id);
      res.status(200).json(data);
    } catch (error) {
      console.log(error.message);
    }
  },
}