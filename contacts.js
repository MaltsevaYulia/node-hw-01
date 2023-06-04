const fs = require("fs").promises;
const path = require("path");
const { v4: uuidv4 } = require("uuid");


const contactsPath = path.join("db", "contacts.json");


async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    console.log("🚀 ~ listContacts ~ error:", error);
  }
}

async function getContactById(contactId) {
  try {
    contacts = await listContacts()
    const contactById = contacts.find((contact) => contact.id === contactId);
    return contactById || null;
  } catch (error) {
    console.log("🚀 ~ getContactById ~ error:", error)
    
  }
  
}

async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
    const newContacts = contacts.filter((contact) => contact.id !== contactId);
    console.log("🚀 ~ removeContact ~ newContacts:", newContacts)
    await fs.writeFile(contactsPath,JSON.stringify(newContacts))
  } catch (error) {
    console.log("🚀 ~ removeContact ~ error:", error)
    
  }
}

async function addContact(name, email, phone) {
  try {
    const contacts = await listContacts();
    const newContact={ id: uuidv4(), name, email, phone }
    const newContacts = [...contacts, newContact];
    await fs.writeFile(contactsPath, JSON.stringify(newContacts, null, 2));
    return newContact
  } catch (error) {
    console.log("🚀 ~ addContact ~ error:", error);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
