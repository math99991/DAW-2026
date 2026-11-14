import { NavigationBar } from "./components/layout/NavigationBar"
import { Footer } from "./components/layout/footer"
import { Header } from "./components/layout/header"
import { categories } from "./data/categories"
import { useState } from "react";
import { ProductCard } from "./cases/products/components/product-card";
import { useProduct } from "./cases/products/hooks/use-product";

function App() {

    const [activeCategory, setActiveCategory] = useState('Todos');

    const {products, loading, error} = useProduct();

    const visibleProducts = activeCategory === 'Todos' 
    ? products 
    : products?.filter(product => product.category === activeCategory);

    function handleSelectCategory(alias: string) {
        setActiveCategory(alias);
    }

  return (
    <>
      <Header />

      <NavigationBar 
        categories={categories} 
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory} 
        />

    <main>
        <section>
          <header>
            <h2>Produtos</h2>
            <p>Categoria <span id="selected-category">{activeCategory}</span> - {visibleProducts.length} itens</p>
          </header>

          {loading && (
            <p className= "panel panel-loading">Carregando produtos...</p>
          )}

          {error && (
            <p className="panel panel-error">Erro ao carregar produtos: {error}</p>
          )}

        {visibleProducts.map((product) => (
            <ProductCard product={product} />
        ))}

        
        
       
        </section>

        <aside>
            <h2>Seu Pedido</h2>
            <div className="cart-empty">
                <img src="./assets/img/cart.svg" alt="Carrinho vazio" />
                <p>Seu carrinho está vazio</p>
                <p>Escolha um item do cardápio para começar.</p>
            </div>
        </aside>
    </main>

    <Footer />
    
    </>
  )
}

export default App