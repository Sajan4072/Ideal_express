import { useRef } from "react";

export default function useFocus() {
  const inputRef = useRef<HTMLInputElement>(null);
  const setInputRef = () => {
    inputRef.current && inputRef.current.scrollIntoView();
  };

  return [inputRef, setInputRef];
}
