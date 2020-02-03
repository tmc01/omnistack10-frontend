import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="username_github" required />
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/32100834?s=220&v=4" alt="Thiago Marques" />
              <div className="user-info">
                <strong>Thiago Marques</strong>
                <span>ReactJs, React Native, NodeJS</span>
              </div>
            </header>
            <p>Entusiasta de programação e tecnologia em geral.</p>
            <a href="https://github.com/tmx01">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/32100834?s=220&v=4" alt="Thiago Marques" />
              <div className="user-info">
                <strong>Thiago Marques</strong>
                <span>ReactJs, React Native, NodeJS</span>
              </div>
            </header>
            <p>Entusiasta de programação e tecnologia em geral.</p>
            <a href="https://github.com/tmx01">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/32100834?s=220&v=4" alt="Thiago Marques" />
              <div className="user-info">
                <strong>Thiago Marques</strong>
                <span>ReactJs, React Native, NodeJS</span>
              </div>
            </header>
            <p>Entusiasta de programação e tecnologia em geral.</p>
            <a href="https://github.com/tmx01">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/32100834?s=220&v=4" alt="Thiago Marques" />
              <div className="user-info">
                <strong>Thiago Marques</strong>
                <span>ReactJs, React Native, NodeJS</span>
              </div>
            </header>
            <p>Entusiasta de programação e tecnologia em geral.</p>
            <a href="https://github.com/tmx01">Acessar perfil no github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
