import './style.css';

const Header = ({ Title }: { Title: string }) => {
  return (
    <header className="header">
      <img
        className="header-image"
        src="https://pbs.twimg.com/profile_images/1047801547579580416/1DUY2BEd_400x400.jpg"
      />
      <h1>{Title}</h1>
      <h3>
                     <p><li>Jogos: 717</li></p>
                     <p><li>Gols: 439</li></p>
                     <p><li>Assistências: 228</li></p>
                     <p><li>Títulos: 29</li></p>
                     <p><li>Campeonato Paulista: 2010, 2011 e 2012</li></p>
                     <p><li>Copa do Brasil: 2010</li></p>
                     <p><li>Copa Libertadores da América: 2011</li></p>
                     <p><li>Recopa Sul-Americana: 2012</li></p>
                     <p><li>Supercopa da Espanha: 2013</li></p>
                     <p><li>Campeonato Espanhol: 2014–15, 2015–16</li></p>
                     <p><li>Copa do Rei: 2014–15, 2015–16, 2016–17</li></p>
                     <p><li>Liga dos Campeões da UEFA: 2014–15</li></p>
                     <p><li>Copa do Mundo de Clubes da FIFA: 2015</li></p>
                     <p><li>Campeonato Francês: 2017–18, 2018–19, 2019–20, 2021–22, 2022–23</li></p>
                     <p><li>Copa da Liga Francesa: 2017–18, 2019–20</li></p>
                     <p><li>Copa da França: 2017–18, 2019–20, 2020–21</li></p>
                     <p><li>Supercopa da França: 2018, 2020, 2022</li></p>
                     <p><li>Copa das Confederações: 2013</li></p>
                     <p><li>Jogos Olímpicos de Verão: 2016</li></p>
            </h3>
    </header>
  );
};

export default Header;