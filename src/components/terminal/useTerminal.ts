import { useState, useCallback, useRef, useEffect } from 'react';
import { executeCommand, TerminalOutputLine, TERMINAL_COMMANDS } from '../../data/terminalData';

export function useTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [inputVal, setInputVal] = useState('');
  const [lines, setLines] = useState<TerminalOutputLine[]>([
    { type: 'system', content: 'Connected to Joel Jo Virtual Command Console [STM32/ESP32 Host Interface]' },
    { type: 'system', content: "Type 'help' to inspect available firmware commands, or 'neofetch' for system specs." }
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const toggleTerminal = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const openTerminal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeTerminal = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Global hotkeys (` backtick or ESC)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`' && !e.ctrlKey && !e.metaKey && !(e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement)) {
        e.preventDefault();
        toggleTerminal();
      } else if (e.key === 'Escape' && isOpen) {
        closeTerminal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, toggleTerminal, closeTerminal]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Scroll to bottom when lines change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const handleExecute = useCallback((cmdToRun?: string) => {
    const command = (cmdToRun !== undefined ? cmdToRun : inputVal).trim();
    if (!command) return;

    if (command.toLowerCase() === 'clear') {
      setLines([]);
      setInputVal('');
      setHistory(prev => [...prev, command]);
      setHistoryIndex(-1);
      return;
    }

    const output = executeCommand(command);

    setLines(prev => [
      ...prev,
      { type: 'input', content: `guest@joel-jo:~$ ${command}` },
      ...output
    ]);

    setHistory(prev => [...prev, command]);
    setHistoryIndex(-1);
    setInputVal('');
  }, [inputVal]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleExecute();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIdx = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIdx);
      setInputVal(history[nextIdx]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIdx = historyIndex + 1;
      if (nextIdx >= history.length) {
        setHistoryIndex(-1);
        setInputVal('');
      } else {
        setHistoryIndex(nextIdx);
        setInputVal(history[nextIdx]);
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const current = inputVal.trim().toLowerCase();
      if (!current) return;
      const matches = Object.keys(TERMINAL_COMMANDS).filter(cmd => cmd.startsWith(current));
      if (matches.length === 1) {
        setInputVal(matches[0]);
      } else if (matches.length > 1) {
        setLines(prev => [
          ...prev,
          { type: 'input', content: `guest@joel-jo:~$ ${inputVal}` },
          { type: 'system', content: `Suggestions: ${matches.join('  ')}` }
        ]);
      }
    }
  };

  return {
    isOpen,
    openTerminal,
    closeTerminal,
    toggleTerminal,
    lines,
    inputVal,
    setInputVal,
    handleExecute,
    handleKeyDown,
    inputRef,
    scrollRef
  };
}
