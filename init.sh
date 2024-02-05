SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

yarn init -y
sed -i '/"main":/d' your_file.json

yarn add --dev parcel
yarn add react react-dom react-router-dom @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome

cp "${SCRIPT_DIR}/index.html" index.html
cp -r "${SCRIPT_DIR}/src" ./src

# Tailwind
yarn add --dev tailwindcss postcss
yarn tailwindcss init

cp "${SCRIPT_DIR}/.postcssrc" .postcssrc
cp "${SCRIPT_DIR}/tailwind.config.js" tailwind.config.js
cp "${SCRIPT_DIR}/index.css" index.css

# Lint and Formatter

