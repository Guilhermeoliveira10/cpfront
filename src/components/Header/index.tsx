import './style.css';

const Header = ({ Title }: { Title: string }) => (
  <header className="header">
    <img
      className="header-image"
      src="https://pbs.twimg.com/profile_images/1047801547579580416/1DUY2BEd_400x400.jpg" />
    <h1>{Title}</h1>
    <h3>
      <p>Jogos: 717</p>
      <p>Gols: 439</p>
      <p>Assistências: 228</p>
      <p>Títulos: 29</p>
      <p>Campeonato Paulista: 2010, 2011 e 2012</p>
      <p>Copa do Brasil: 2010</p>
      <p>Copa Libertadores da América: 2011</p>
      <p>Recopa Sul-Americana: 2012</p>
      <p>Supercopa da Espanha: 2013</p>
      <p>Campeonato Espanhol: 2014–15, 2015–16</p>
      <p>Copa do Rei: 2014–15, 2015–16, 2016–17</p>
      <p>Liga dos Campeões da UEFA: 2014–15</p>
      <p>Copa do Mundo de Clubes da FIFA: 2015</p>
      <p>Campeonato Francês: 2017–18, 2018–19, 2019–20, 2021–22, 2022–23</p>
      <p>Copa da Liga Francesa: 2017–18, 2019–20</p>
      <p>Copa da França: 2017–18, 2019–20, 2020–21</p>
      <p>Supercopa da França: 2018, 2020, 2022</p>
      <p>Copa das Confederações: 2013</p>
      <p>Jogos Olímpicos de Verão: 2016</p>
    </h3>
  </header>
);

export default Header;