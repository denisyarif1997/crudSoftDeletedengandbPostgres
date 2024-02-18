const pool = require('../../db'); // Import the database configuration
const queries =  require('../articles/queries')


const getArticles = (req,res) => {
    pool.query(queries.getArticles, (error, results) =>{
        if (error)throw error;
        res.status(200).json(results.rows);
    })
};

const getArticlesById = (req,res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getArticlesById, [id], (error, results) =>{
      if (error)throw error;
      res.status(200).json(results.rows);
    })
  };



  const createArticles = (req,res) => {
    const { judul,konten,category } = req.body;

    pool.query(queries.createArticles, [judul,konten,category,new Date()], 
    (error, results) =>{
      if (error)throw error;
      res.status(201).json({"message": "Artickel berhasil di buat..", "body": req.body});
    })
 };


const updateArticleById = (req, res) => {
  const articleId = req.params.id;
  const { judul, konten, category } = req.body;

  pool.query(
    queries.updateArticleById,
    [judul, konten, category, articleId],
    (error, results) => {
      if (error) {
        console.error('Error updating article', error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        if (results.rowCount === 0) {
          res.status(404).json({ message: `Article Dengan ID ${articleId} tidak ditemukan` });
        } else {
          res.status(200).json({ message: `Article Dengan ID ${articleId} berhasil di update` });
        }
      }
    }
  );
};

const deleteArtikel = (req, res) => {
  const articleId = parseInt(req.params.id);
  pool.query(queries.deleteArtikel, [articleId], (error, results) => {
     if (error) {
       console.error('Error deleting artikel:', error);
       res.status(500).send('An error occurred.');
     } else {
       res.status(200).send('Artikel deleted successfully');
     }
  });
 };






 module.exports = {
    getArticles,
    getArticlesById,
    createArticles,
    updateArticleById,
    deleteArtikel
 };