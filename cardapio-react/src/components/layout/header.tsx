export function Header() {
    return (
        <header>
            <div className="container">
                <div className="brand">
                    <img src="/logo.svg" alt="Logo" />
                    <h1>Meu Cardápio</h1>
                    <p>O melhor da cidade</p>
                </div>
                <div className="cart-button">
                    <img src="/cart.svg" alt="Carrinho" />
                </div>
            </div>
        </header>
    );
}