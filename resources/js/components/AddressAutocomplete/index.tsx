import { AutoCompleteResponse, Prediction } from '@/types/autoCompleteResponse';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

type Props = {
  label: string;
  id: string;
  defaultValue?: string;
  register?: any;
  onSelect: (prediction: Prediction) => void;
};
const AddressAutocomplete = ({
  id,
  label,
  onSelect,
  defaultValue,
  register,
}: Props) => {
  const [query, setQuery] = useState<string>('');
  const [suggestions, setSuggestions] = useState<Prediction[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const suggestionsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (query.length < 3) {
      setSuggestions([]);
      return;
    }

    const delayDebounce = setTimeout(async () => {
      try {
        const response = await axios.get<AutoCompleteResponse>(
          `/api/map/autocomplete?input=${query}`,
        );
        setSuggestions(response.data.predictions || []);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setSelectedIndex(-1);
    setIsFocused(true);
  };

  const handleSelect = (index: number) => {
    if (suggestions[index]) {
      setQuery(suggestions[index].description);
      setSuggestions([]);
      setSelectedIndex(-1);
      setIsFocused(false);
      onSelect(suggestions[index]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      setSelectedIndex((prevIndex) =>
        Math.min(prevIndex + 1, suggestions.length - 1),
      );
    } else if (e.key === 'ArrowUp') {
      setSelectedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      handleSelect(selectedIndex);
    }
  };

  useEffect(() => {
    if (suggestionsRef.current && selectedIndex >= 0) {
      const selectedItem = suggestionsRef.current.children[
        selectedIndex
      ] as HTMLElement;
      selectedItem?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }, [selectedIndex]);

  return (
    <div className="relative flex w-full">
      <label
        htmlFor={id}
        className={`inline-block w-[120px] cursor-pointer items-center rounded-tl-md rounded-bl-md bg-[#ff9000] px-4 py-3 text-center text-xs text-gray-50 select-none sm:text-sm`}
      >
        {label}
      </label>
      <input
        id={id}
        type="text"
        value={query}
        autoComplete="off"
        defaultValue={defaultValue}
        className="flex-1 rounded-tr-md rounded-br-md bg-white px-3"
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 200)} // Delay để tránh mất focus trước khi chọn item
        placeholder={`Nhập ${label ? label.toLowerCase() : '...'}`}
      />
      {suggestions.length > 0 && isFocused && (
        <ul
          ref={suggestionsRef}
          className="absolute top-full z-10 mt-1 max-h-60 w-full overflow-auto rounded border bg-white"
        >
          {suggestions.map((item, index) => (
            <li
              key={item.place_id}
              className={`cursor-pointer p-2 ${index === selectedIndex ? 'bg-gray-300' : 'hover:bg-gray-200'}`}
              onMouseDown={() => handleSelect(index)}
            >
              <strong>{item.structured_formatting.main_text}</strong>,{' '}
              {item.structured_formatting.secondary_text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AddressAutocomplete;
