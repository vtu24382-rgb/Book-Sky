import React, { useState } from 'react';
import './index.css';

const App = () => {
  const [books, setBooks] = useState([
    {
      title: 'Rich Dad Poor Dad',
      author: 'Robert',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolorem porro exercitationem, maxime iste officiis in at vitae blanditiis excepturi nam cum reprehenderit rerum commodi harum quaerat tenetur aperiam quia perferendis omnis soluta, corrupti iusto libero? Repellendus optio aspernatur error harum, ipsam, suscipit, eaque aperiam distinctio ex eos culpa architecto?'
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({...newBook, [name]: value});
  };

  const addBook = (e) => {
    e.preventDefault();
    setBooks([...books, newBook]);
    setNewBook({ title: '', author: '', description: '' });
    setShowForm(false);
  };

  const deleteBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Booksky</h1>
      </header>

      <main className="book-container">
        {books.map((book, index) => (
          <div className="book-card" key={index}>
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <p>{book.description}</p>
            <button 
              className="delete-btn"
              onClick={() => deleteBook(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </main>

      {showForm && (
        <div className="modal-overlay">
          <div className="add-book-form">
            <h2>Add New Book</h2>
            <form onSubmit={addBook}>
              <input
                type="text"
                name="title"
                placeholder="Book Title"
                value={newBook.title}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="author"
                placeholder="Author"
                value={newBook.author}
                onChange={handleInputChange}
                required
              />
              <textarea
                name="description"
                placeholder="Description"
                value={newBook.description}
                onChange={handleInputChange}
                required
              />
              <div className="form-actions">
                <button type="submit">Add</button>
                <button type="button" onClick={() => setShowForm(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <button 
        className="add-btn"
        onClick={() => setShowForm(true)}
      >
        +
      </button>
    </div>
  );
};

export default App;
