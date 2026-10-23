import React from 'react';
import { Terminal as TerminalIcon, X, Trash2, CornerDownLeft } from 'lucide-react';
import { useTerminal } from './useTerminal';

interface TerminalDrawerProps {
  terminal: ReturnType<typeof useTerminal>;
}

export const TerminalDrawer: React.FC<TerminalDrawerProps> = ({ terminal }) => {
  const {
    isOpen,
    closeTerminal,
    lines,
    inputVal,
    setInputVal,
    handleExecute,
    handleKeyDown,
    inputRef,
    scrollRef
  } = terminal;

  if (!isOpen) return null;

  const quickCommands = ['help', 'bio', 'skills', 'projects', 'awards', 'pub', 'edu', 'neofetch', 'clear'];

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-sm transition-all duration-300">
      
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={closeTerminal} />

      {/* Terminal Container */}
      <div
        className="relative w-full sm:max-w-4xl h-[85vh] sm:h-[650px] bg-command-bg border-t sm:border border-command-borderStrong shadow-2xl flex flex-col rounded-t-sm sm:rounded-sm overflow-hidden z-10 font-mono"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-command-surface border-b border-command-border select-none">
          <div className="flex items-center space-x-3">
            <span className="w-3 h-3 rounded-full bg-telemetry-red/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-telemetry-amber/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-lime/80 inline-block"></span>
            <span className="text-xs text-editorial-white font-bold ml-2 flex items-center space-x-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-lime" />
              <span>JOEL_JO_OS // FIRMWARE CONSOLE [115200 BAUD]</span>
            </span>
          </div>

          <div className="flex items-center space-x-2 text-editorial-muted">
            <button
              onClick={() => handleExecute('clear')}
              className="p-1 hover:text-editorial-white hover:bg-command-hover rounded"
              title="Clear terminal output"
              aria-label="Clear Terminal"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={closeTerminal}
              className="p-1 hover:text-editorial-white hover:bg-command-hover rounded"
              title="Close terminal (ESC)"
              aria-label="Close Terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Command Toolbar */}
        <div className="px-4 py-2 bg-command-surface/50 border-b border-command-border/60 flex items-center gap-2 overflow-x-auto text-[11px] text-editorial-muted select-none">
          <span className="text-lime uppercase tracking-wider text-[10px] shrink-0">QUICK CMDS:</span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleExecute(cmd)}
              className="px-2 py-0.5 bg-command-bg hover:bg-lime/10 hover:text-lime hover:border-lime/40 border border-command-border rounded-xs transition-colors shrink-0"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Console Output Area */}
        <div
          ref={scrollRef}
          className="flex-1 p-4 overflow-y-auto space-y-1.5 text-xs text-editorial-white leading-relaxed font-mono"
        >
          {lines.map((line, idx) => {
            if (line.type === 'input') {
              return (
                <div key={idx} className="text-lime font-semibold pt-1">
                  {line.content}
                </div>
              );
            }
            if (line.type === 'system') {
              return (
                <div key={idx} className="text-telemetry-cyan opacity-90">
                  {line.content}
                </div>
              );
            }
            if (line.type === 'success') {
              return (
                <div key={idx} className="text-lime font-bold">
                  {line.content}
                </div>
              );
            }
            if (line.type === 'error') {
              return (
                <div key={idx} className="text-telemetry-red">
                  {line.content}
                </div>
              );
            }
            if (line.type === 'ascii') {
              return (
                <pre key={idx} className="text-lime text-[10px] sm:text-xs font-mono leading-tight overflow-x-auto py-2">
                  {line.content}
                </pre>
              );
            }
            return (
              <div key={idx} className="text-editorial-grey whitespace-pre-wrap">
                {line.content}
              </div>
            );
          })}
        </div>

        {/* Command Input Prompt */}
        <div className="p-3 bg-command-surface border-t border-command-border flex items-center space-x-2">
          <span className="text-lime text-xs font-bold select-none shrink-0">
            guest@joel-jo:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help' or any command..."
            className="flex-1 bg-transparent text-xs text-editorial-white focus:outline-none placeholder:text-editorial-subtle font-mono"
            autoComplete="off"
            spellCheck="false"
          />
          <button
            onClick={() => handleExecute()}
            className="p-1 text-editorial-muted hover:text-lime rounded"
            title="Execute (Enter)"
            aria-label="Execute Command"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Footer Key Hints */}
        <div className="px-4 py-1.5 bg-command-bg border-t border-command-border/40 flex items-center justify-between text-[10px] text-editorial-subtle select-none">
          <span>HINT: Press &apos;Tab&apos; for command autocomplete, &uarr;&darr; for history</span>
          <span className="hidden sm:inline">Press &apos;ESC&apos; or &lsquo;`&rsquo; to toggle console</span>
        </div>

      </div>
    </div>
  );
};
