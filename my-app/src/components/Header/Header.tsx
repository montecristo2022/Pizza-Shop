import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <div>
        {/* <svg width="16" height="12">
          <use href="../images/image1.svg"></use>
        </svg> */}
        <img src="../images/lana.jpg" alt='картинка Пиццы'></img>
        <h2>React Pizze</h2>
        <p>The best pizza for you and your friends</p>
      </div>

      <button>Price: 42$</button>
    </header>
  );
}
