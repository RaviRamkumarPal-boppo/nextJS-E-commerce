import React, { useEffect, useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { MdClose } from 'react-icons/md';
import { useRouter } from 'next/navigation';  
import ProductsPageObj from '@/components/modules/JSON';
import useStateStore from '../zustand';
import { CiSearch } from 'react-icons/ci';

function Modal({ isOpen, onClose }) {
    const products = ProductsPageObj.ProductsPageObj;
    const [searchResults, setSearchResults] = useState([]);

    const { searchTerms, updateSearchTerm } = useStateStore();
    const router = useRouter();

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    }, [isOpen]);

    useEffect(() => {
        const filteredProducts = searchTerms.trim()
            ? products.filter((item) =>
                item.title.toLowerCase().includes(searchTerms.toLowerCase())
            )
            : [];
        setSearchResults(filteredProducts);
    }, [searchTerms, products]);

    if (!isOpen) return null;

    const handleSearch = (e) => {
        updateSearchTerm(e.target.value);
    };

    const handleSearchClick = () => {
        router.push(`/search`);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSearchClick();
            onClose();
        }
    };

    const handleSearchOption = (title) => {
        updateSearchTerm(title);
        handleSearchClick();
        onClose();
    };

    return (
        <div className="absolute inset-0 text-black" onClick={onClose}>
            <div className="p-4 rounded-lg flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
                <div className="animate-searchbar flex items-center bg-white rounded-full border border-gray-300 gap-3">
                    <input
                        type="text"
                        className="flex-1 border-none outline-none py-1 px-5 rounded-full"
                        placeholder="Type your search..."
                        value={searchTerms}
                        onChange={handleSearch}
                        onKeyDown={handleKeyDown}
                    />
                    <MdClose className="text-2xl text-gray-600 cursor-pointer" onClick={onClose} />
                    <button
                        className="flex items-center px-5 py-3 rounded-3xl bg-[#d09423] text-white"
                        onClick={handleSearchClick}
                    >
                        <IoSearchSharp className="text-2xl mr-2" />
                        Search
                    </button>
                </div>
                {searchResults.length > 0 && (
                    <div className="search-option-bar absolute top-[73px] max-h-[300px] overflow-auto rounded-3xl w-[700px] px-4 bg-white">
                        <ul>
                            {searchResults.map((item) => (
                                <li
                                    key={item.id}
                                    className="flex items-center p-3 text-[#686664] hover:bg-[#f1f1f1] font-medium cursor-pointer"
                                    onClick={() => handleSearchOption(item.title)}
                                >
                                    <CiSearch className="text-4xl bg-[#efefef] rounded-full p-2 " />&#160; {item.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Modal;
