const getArticles = 'SELECT * FROM artikel where deleted_at is null';
const getArticlesById = 'SELECT * FROM artikel WHERE id = $1';
const createArticles = 'INSERT INTO artikel (judul, konten, category, createdat, updatedat) VALUES ($1, $2, $3, CURRENT_TIMESTAMP, $4)';
// const updateArtickelsById = 'UPDATE artikel SET judul = $1, konten = $2, category = $3, updatedat = $4, WHERE id = $5';
const updateArticleById = 'UPDATE artikel SET judul = $1, konten = $2, category = $3 WHERE id = $4;';
const deleteArtikel = 'UPDATE artikel SET deletedat = NOW() WHERE id = $1';


module.exports = {
    getArticles,
    getArticlesById,
    createArticles,
    updateArticleById,
    deleteArtikel
}
