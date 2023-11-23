module.exports = {
    globDirectory: 'build/',
    globPatterns: ['**/*.{json,ico,html,png,js,jsx,css}'],
    swDest: 'build/service-worker.js', // Add this line
    clientsClaim: true,
    skipWaiting: true,
  };
  