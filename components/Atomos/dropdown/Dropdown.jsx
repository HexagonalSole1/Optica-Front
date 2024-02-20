import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = ({ options }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    const isSelected = selectedOptions.includes(option);

    if (isSelected) {
      // Si la opción ya está seleccionada, quitarla de la lista
      setSelectedOptions(selectedOptions.filter((selected) => selected !== option));
    } else {
      // Si la opción no está seleccionada, agregarla a la lista
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="dropdown">
      <button className="dropdown-btn" onClick={toggleDropdown}>
        Seleccionar opciones
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => selectOption(option)}
              className={selectedOptions.includes(option) ? 'selected' : ''}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
      {selectedOptions.length > 0 && (
        <div className="selected-options">
          {selectedOptions.map((selected, index) => (
            <span key={index} className="selected-option">
              {selected}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

