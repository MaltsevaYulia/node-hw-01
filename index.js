const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");
const contacts = require("./db/contacts.json");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.log("🚀 ~ invokeAction ~ allContacts:", allContacts);
      break;

    case "get":
      const contactById = await contacts.getContactById(id);
      console.log("🚀 ~ invokeAction ~ contactById:", contactById);
      break;

    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      console.log("🚀 ~ invokeAction ~ newContact:", newContact);
      break;

    case "remove":
      const deleteContact=await removeContact(id)
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);

//  listCoclearntacts()
// addContact("test", "test@gmail.com", "11111111111")
// getContactById("AeHIrLTr6JkxGE6SN-0Rw");
// removeContact("9717322d-ce26-457e-b014-6dfffee6a3f8");
