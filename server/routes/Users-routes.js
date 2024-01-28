const express = require('express');

const Router = express.Router();

const UserModel = require('../models/Auth')
const RelationsModel = require('../models/Relations')

Router.get('/', async(req,res)=>{
    const us = await UserModel.find();
    res.json({ UserData: us.map(emp => emp.toObject({ getters: true })) });
})

Router.get('/contacts',async(req,res)=>{
    try {
        // Pobranie wszystkich rekordów z kolekcji Auth
        const authData = await UserModel.find();
    
        // Pobranie wszystkich ID z kolekcji Relations
        const relationIds = (await RelationsModel.find()).map(relation => relation._id);
    
        // Filtracja danych z kolekcji Auth na podstawie ID
        const filteredAuthData = authData.filter(auth => !relationIds.includes(auth._id));
    
        // Wysłanie danych do frontendu
        res.json({filteredAuthData});
      } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
      }
})

Router.post('/', async (req, res) => {
  const { id_user } = req.body;

  if (!id_user) {
      return res.status(400).json({ error: 'Brak Id' });
  }

  try {
      // Zmieniono zmienną `Id` na `user`, aby odzwierciedlić bardziej sensowną nazwę
      const user = await UserModel.findOne({ _id: id_user });

      if (!user) {
          return res.status(404).json({ error: 'Nie ma takiego użytkownika' });
      }

      res.status(200).json({ message: 'Znaleziono użytkownika', user });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Wystąpił błąd serwera' });
  }
});

module.exports = Router;