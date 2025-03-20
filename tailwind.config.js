module.exports = {
    theme: {
      extend: {
        keyframes: {
          textChange: {
            '0%, 50%': { content: '"profile"', opacity: '1' },
            '50.01%, 100%': { content: '"slomen"', opacity: '1' },
          },
        },
        animation: {
          textChange: 'textChange 4s infinite',
        },
      },
    },
  };