import React, { useEffect, useState } from 'react';
import ProductsPageObj from '@/components/modules/JSON';

function Modal({ isOpen, onClose }) {
    const products = ProductsPageObj.ProductsPageObj;
    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    useEffect(() => {
        if (searchTerm.trim() === '') {
            setSearchResults([]);
        } else {
            const filteredProducts = products.filter((item) =>
                item.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSearchResults(filteredProducts);
        }
    }, [searchTerm, products]);

    if (!isOpen) return null;

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className={`modal-overlay ${isOpen ? 'modal-open' : ''}`} onClick={onClose}>
            <div className="modal-content text-black" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>
                    &times;
                </button>
                <div className="text-black">
                    <h2 className="text-2xl mb-4">Search</h2>
                    <input
                        type="text"
                        className="modal-input"
                        placeholder="Type your search..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>
                <div className="p-3">
                    <ul>
                        {searchResults.length > 0 && (
                            searchResults.map((item) => (
                                <li key={item.id} >{item.title}</li>
                            ))
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Modal;
