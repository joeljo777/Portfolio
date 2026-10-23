/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        command: {
          bg: "#121212",
          surface: "#1a1a1a",
          hover: "#222222",
          elevated: "#282828",
          border: "rgba(255, 255, 255, 0.08)",
          borderStrong: "rgba(255, 255, 255, 0.18)",
        },
        editorial: {
          white: "#f5f4f0",
          grey: "#d9d9d5",
          muted: "#a0a09c",
          subtle: "#666662",
        },
        lime: {
          DEFAULT: "#ddf5ce",
          dim: "#25331e",
          glow: "rgba(221, 245, 206, 0.25)",
        },
        telemetry: {
          cyan: "#66d9ef",
          amber: "#ffd93d",
          green: "#a8e6cf",
          red: "#ff6b6b",
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
};
