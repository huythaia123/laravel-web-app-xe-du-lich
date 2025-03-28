import { Prediction } from '@/types/autoCompleteResponse';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  id: string;
  label: string;
  register: UseFormRegisterReturn;
  onSelect: (selectedAddress: string) => void;
};

const AddressAutocomplete = ({ id, label, register, onSelect }: Props) => {
  const [suggestions, setSuggestions] = useState<Prediction[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const suggestionsRef = useRef<HTMLUListElement>(null);

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    if (query.length < 3) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await axios.get<{ predictions: Prediction[] }>(
        `/api/map/autocomplete?input=${query}`,
      );
      setSuggestions(response.data.predictions || []);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const handleSelect = (index: number) => {
    if (suggestions[index]) {
      const selectedAddress = suggestions[index].description;
      setSuggestions([]);
      setSelectedIndex(-1);
      setIsFocused(false);
      onSelect(selectedAddress); // Gửi địa chỉ đã chọn lên form cha
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown')
      setSelectedIndex((prev) => Math.min(prev + 1, suggestions.length - 1));
    else if (e.key === 'ArrowUp')
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    else if (e.key === 'Enter' && selectedIndex >= 0) {
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
        className="inline-block w-[120px] cursor-pointer rounded-tl-md rounded-bl-md bg-[#ff9000] px-4 py-3 text-center text-xs text-gray-50 select-none sm:text-sm"
      >
        {label}
      </label>
      <input
        id={id}
        type="text"
        className="flex-1 rounded-tr-md rounded-br-md bg-white px-3"
        placeholder={`Nhập ${label.toLowerCase()}`}
        autoComplete="off"
        {...register}
        onChange={handleInputChange}
        onBlur={() => setTimeout(() => setIsFocused(false), 200)}
        onFocus={() => setIsFocused(true)}
        onKeyDown={handleKeyDown}
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
