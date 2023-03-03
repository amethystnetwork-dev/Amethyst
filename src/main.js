import './styles/app.css';
import './styles/games.css';
import './styles/settings.css';
import './styles/search.css';

import './styles/themes.css';

import '@fortawesome/fontawesome-free/css/all.css';

import App from './App.svelte';

// Bugging people because this is licensed under GPLv3
console.log(`Amethyst
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.`);

// @ts-ignore
const app = new App({
  target: document.body,
});

export default app;